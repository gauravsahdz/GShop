import { RedArrowRightIcon } from '@assets/icons';
import MyButton from '@components/Buttons/MyButton';
import MyInputField from '@components/MyInputField';
import SocialLogin from '@components/SocialLogin';
import useThemedStyles from '@hooks/useThemedStyles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Signup = () => {
  const navigation: any = useNavigation();
  const styles: any = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Sign up</Text>
        <View style={styles.signupForm}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <MyInputField placeholder="Name" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <MyInputField placeholder="Email" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <MyInputField placeholder="Password" />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.link}>
            <Text style={styles.alreadyHaveAccount}>
              Already have an account?
            </Text>
            <RedArrowRightIcon width={24} height={24} />
          </TouchableOpacity>
          <MyButton title="Sign Up" btnStyle={styles.btn} />
        </View>
      </View>
      <View
        style={{
          marginBottom: 80,
        }}>
        <SocialLogin title="Or sign up with social account" />
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
    link: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 4,
      marginVertical: 10,
    },
    alreadyHaveAccount: {
      fontFamily: 'Poppins Medium',
      fontSize: typography.size.S,
      color: colors.shadow,
    },
    btn: {
      marginTop: 18,
    },
  });
};

export default Signup;
