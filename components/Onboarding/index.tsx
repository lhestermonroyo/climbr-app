import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Center } from '../ui/center';

const hLogo = require('../../assets/images/horizontal-logo-dark.png'); // Adjust the path as necessary

const Onboarding = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: 'Connect and Share Experiences',
      description:
        'Find and join hiking events curated by passionate outdoor organizers. Explore hidden trails, majestic peaks, and nature’s best routes near you.',
      image: require('../../assets/images/1.png')
    }
    // {
    //   id: 2,
    //   title: 'Connect and Share Experiences',
    //   description:
    //     'Chat with fellow hikers, exchange tips, and leave ratings and reviews. Your hiking story doesn’t end at the summit — it continues in the community.',
    //   image: require('../../assets/images/3.png')
    // }
    // {
    //   id: 3,
    //   title: 'Create and Manage Your Own Hikes',
    //   description:
    //     'Are you an organizer? Plan hikes, manage participants, and build your community — all in one place. Climbr makes event creation effortless.',
    //   image: require('../../assets/images/2.png')
    // },
    // {
    //   id: 4,
    //   title: 'Build Trust Through Feedback',
    //   description:
    //     'Read and write honest reviews for events and organizations. Browse photo uploads, check average ratings, and join only the best hiking adventures.',
    //   image: require('../../assets/images/4.png')
    // }
  ]);

  const router = useRouter();

  const _renderItem = ({ item }: any) => {
    return (
      <VStack>
        <VStack
          space="lg"
          className="absolute bottom-0 z-10 px-4 py-8 pb-40 justify-center"
        >
          <Image
            size="xl"
            className="-mb-12"
            resizeMode="contain"
            alt="logo"
            source={hLogo}
          />
          <Text size="4xl" className="color-yellow-400 font-bold">
            {item.title}
          </Text>
          <Text size="lg" className="color-white">
            {item.description}
          </Text>
        </VStack>
        <Image
          className="h-full w-full"
          resizeMode="cover"
          alt={`item-${item.key}`}
          source={item.image}
        />
      </VStack>
    );
  };

  const _renderNextButton = () => {
    return (
      <View className="border-2 border-yellow-500 rounded-full px-8 py-4">
        <Text size="xl" className="color-yellow-500 text-center font-bold">
          Next
        </Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View className="bg-yellow-400 border-2 border-yellow-400 rounded-full px-8 py-4">
        <Text size="xl" className="text-white text-center font-bold">
          Get Started
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      showPrevButton={false}
      bottomButton={true}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      dotStyle={{
        display: 'none' // Hide default dots
      }}
      activeDotStyle={{
        display: 'none' // Hide active dot
      }}
      // onDone={() => router.push('/auth/SignUp')}
    />
  );
};

export default Onboarding;
