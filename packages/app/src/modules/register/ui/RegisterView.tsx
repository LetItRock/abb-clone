import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { validUserSchema } from '@abb/common';
import InputField from '../../shared/InputField';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Card>
          <Text style={{ fontSize: 25, marginBottom: 10 }}>Register</Text>
          <Field
            name="email"
            placeholder="Email"
            component={InputField}
            containerStyle={{ width: '100%' }}
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
            containerStyle={{ width: '100%', marginBottom: 30 }}
          />
          <Button
            title="Submit"
            onPress={handleSubmit as any}
          />
        </Card>
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
