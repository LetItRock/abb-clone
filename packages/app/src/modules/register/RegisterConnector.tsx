import * as React from 'react';
import { Button } from 'react-native-elements';
import { RegisterView } from './ui/RegisterView';

export class RegisterConnector extends React.PureComponent {
  dummy = async (values: any) => {
    console.log('button pressed');
    return null;
  };

  render() {
    return <RegisterView submit={this.dummy} />
  }
}
