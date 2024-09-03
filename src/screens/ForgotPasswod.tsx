import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/Buttons/MyButton';
import MyInputField from '../components/MyInputField';
import useTheme from '../hooks/useTheme';

const ForgotPassword = () => {
  const { typography } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    headerText: {
      fontSize: typography.size['3XL'],
      fontFamily: 'Poppins Bold',
      marginBottom: 20,
      color: '#222',
    },
    info: {
      fontSize: typography.size.S,
      color: '#666',
      fontFamily: 'Poppins Medium',
    },
    signupForm: {
      marginTop: 20,
      gap: 10,
    },
    formGroup: {
      gap: 5,
    },
    label: {
      fontFamily: 'Poppins Medium',
      fontSize: typography.size.S,
      color: '#222',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forgot Password</Text>
      <View style={styles.signupForm}>
        <Text style={styles.info}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <MyInputField placeholder="Email" />
        </View>

        <MyButton
          title="SEND"
          btnStyle={{
            marginTop: 18,
          }}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
