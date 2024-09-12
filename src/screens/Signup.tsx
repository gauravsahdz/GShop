import RedArrowRight from '@assets/icons/red_arrow_right.svg';
import MyButton from '@components/Buttons/MyButton';
import MyInputField from '@components/MyInputField';
import useTheme from '@hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Signup = () => {
  const navigation: any = useNavigation();
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
    link: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 4,
      marginVertical: 10,
    },
    btn: {
      marginTop: 18,
    },
  });

  return (
    <View style={styles.container}>
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
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: typography.size.S,
              color: '#222',
            }}>
            Already have an account?
          </Text>
          <RedArrowRight width={24} height={24} />
        </TouchableOpacity>
        <MyButton title="Sign Up" btnStyle={styles.btn} />
      </View>
    </View>
  );
};

export default Signup;
