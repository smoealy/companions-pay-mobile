import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Wallet from '../components/Wallet';
import Stake from '../components/Stake';
import Donate from '../components/Donate';
import Redeem from '../components/Redeem';
import AIPlanner from '../components/AIPlanner';
import GetCard from '../components/GetCard';
import Sukuk from '../components/Sukuk';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Wallet':
              iconName = 'wallet';
              break;
            case 'Stake':
              iconName = 'trending-up';
              break;
            case 'Donate':
              iconName = 'heart';
              break;
            case 'Redeem':
              iconName = 'gift';
              break;
            case 'AI Planner':
              iconName = 'chatbubble-ellipses';
              break;
            case 'Get Card':
              iconName = 'card';
              break;
            case 'Sukuk':
              iconName = 'briefcase';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#16a34a',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Stake" component={Stake} />
      <Tab.Screen name="Donate" component={Donate} />
      <Tab.Screen name="Redeem" component={Redeem} />
      <Tab.Screen name="AI Planner" component={AIPlanner} />
      <Tab.Screen name="Get Card" component={GetCard} />
      <Tab.Screen name="Sukuk" component={Sukuk} />
    </Tab.Navigator>
  );
}
