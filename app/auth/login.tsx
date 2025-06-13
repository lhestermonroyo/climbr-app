import CButton from '@/components/CButton';
import CFormInput from '@/components/CFormInput';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/toast';
import { VStack } from '@/components/ui/vstack';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';

const Login = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
    confPassword: ''
  });
  const [formErrors, setFormErrors] = useState({
    fullname: '',
    email: '',
    password: '',
    confPassword: ''
  }) as any;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const handleChange = (key: string, value: string) => {
    if (formErrors[key]) {
      setFormErrors({ ...formErrors, [key]: '' });
    }

    setValues({ ...values, [key]: value });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <VStack className="mt-24 px-4" space="4xl">
            {/* <Logo /> */}

            <VStack space="xs">
              <Text size="4xl" className="font-medium">
                Create your account
              </Text>
              <Text size="xl" className="text-primary-500">
                Let's get you signed in
              </Text>
            </VStack>

            <VStack space="3xl">
              <CFormInput
                type="text"
                label="Fullname"
                placeholder="Enter your fullname"
                value={values.fullname}
                onChangeText={(text) => handleChange('fullname', text)}
                errorMessage={formErrors.fullname}
              />

              <CFormInput
                type="text"
                label="Email"
                placeholder="Enter your email"
                value={values.email}
                onChangeText={(text) => handleChange('email', text)}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                errorMessage={formErrors.email}
              />

              <CFormInput
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Enter your password"
                value={values.password}
                onChangeText={(text) => handleChange('password', text)}
                rightIcon={showPassword ? EyeIcon : EyeOffIcon}
                onPressRightIcon={() => setShowPassword(!showPassword)}
                errorMessage={formErrors.password}
              />

              <CFormInput
                type={showConfPassword ? 'text' : 'password'}
                label="Confirm Password"
                placeholder="Enter confirm password"
                value={values.confPassword}
                onChangeText={(text) => handleChange('confPassword', text)}
                onBlur={() =>
                  values.password !== values.confPassword &&
                  setFormErrors({
                    ...formErrors,
                    confPassword: 'Passwords do not match'
                  })
                }
                rightIcon={showConfPassword ? EyeIcon : EyeOffIcon}
                onPressRightIcon={() => setShowConfPassword(!showConfPassword)}
                errorMessage={formErrors.confPassword}
              />

              <CButton
                text="Create Account"
                loading={submitting}
                onPress={() => {}}
              />
            </VStack>

            <Center>
              <HStack className="mt-4" space="xs">
                <Text size="lg" className="text-gray-500">
                  Already have an account?
                </Text>
                <Link onPress={() => router.push('/auth/Login')}>
                  <Text size="lg" className="text-primary-500">
                    Login
                  </Text>
                </Link>
              </HStack>
            </Center>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
