import Onboarding from '@/components/Onboarding';
import { Text } from '@/components/Themed';
import React, { useState } from 'react';

const Index = () => {
  const [auth, setAuth] = useState(false);

  return <Onboarding />;
};

export default Index;
