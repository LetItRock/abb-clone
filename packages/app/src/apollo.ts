import { Platform } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// android
// ios localhost
const host = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: host
  }),
  cache: new InMemoryCache()
});
