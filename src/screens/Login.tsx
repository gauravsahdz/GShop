import { RedArrowRightIcon } from '@assets/icons';
import MyButton from '@components/Buttons/MyButton';
import MyInputField from '@components/MyInputField';
import SocialLogin from '@components/SocialLogin';
import useThemedStyles from '@hooks/useThemedStyles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const styles: any = useThemedStyles(themedStyles);
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.signupForm}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <MyInputField placeholder="Email" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <MyInputField placeholder="Password" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 4,
              marginVertical: 10,
            }}>
            <Text style={styles.forgotPassText}>Forgot your password?</Text>
            <RedArrowRightIcon width={24} height={24} />
          </TouchableOpacity>
          <MyButton
            title="Login"
            btnStyle={{
              marginTop: 18,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginBottom: 80,
        }}>
        <SocialLogin />
      </View>
    </View>
  );
};

const themedStyles = (theme: any) => {
  const { colors, typography } = theme;

  return StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: typography.size['3XL'],
      fontFamily: 'Poppins Bold',
      marginBottom: 20,
      color: colors.shadow,
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
      color: colors.shadow,
    },
    forgotPassText: {
      fontFamily: 'Poppins Medium',
      fontSize: typography.size.S,
      color: colors.shadow,
    },
  });
};

export default Login;
