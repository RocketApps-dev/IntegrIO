import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import { AuthRoutes } from './auth.routes';

import { PublicRoutes } from './public.routes';
import { SplashScreen } from '../screens/PublicScreens';

export const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return !user ? <AuthRoutes /> : <PublicRoutes />;
};
