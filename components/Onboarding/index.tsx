import React from 'react';
import { useRouter } from 'expo-router';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import CButton from '../CButton';

const bgImage = require('../../assets/images/bg.jpg'); // Adjust the path as necessary
const hLogo = require('../../assets/images/h-logo-dark.png'); // Adjust the path as necessary

const Onboarding = () => {
  const router = useRouter();

  return (
    <VStack>
      <VStack
        space="lg"
        className="absolute bottom-0 z-10 px-4 py-8 pb-20 justify-center"
      >
        <Image
          size="xl"
          className="-mb-12"
          resizeMode="contain"
          alt="logo"
          source={hLogo}
        />
        <Text size="4xl" className="color-purple-500 font-bold">
          Connect and Share Experiences
        </Text>
        <Text size="lg" className="color-white mb-5">
          Find and join hiking events curated by passionate outdoor organizers.
          Explore hidden trails, majestic peaks, and nature’s best routes near
          you.
        </Text>
        <CButton
          text="Get Started"
          onPress={() => router.push('/auth/sign-up')}
        />
      </VStack>
      <Image
        className="h-full w-full"
        resizeMode="cover"
        alt="onboarding-image"
        source={bgImage}
      />
    </VStack>
  );
};

export default Onboarding;
