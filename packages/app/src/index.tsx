import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';
import { client } from './apollo';
import { Routes } from './routes';

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
