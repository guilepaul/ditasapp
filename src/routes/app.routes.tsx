import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import {useTheme} from 'styled-components';
import {Ionicons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { Platform } from 'react-native';

import Home from '../pages/Home';
import Scheduling from '../pages/Scheduling';
import Confirmation from '../pages/Confirmation';
import Success from '../pages/Success';


const {Navigator, Screen} = createBottomTabNavigator<RootNavigation>();
const Stack = createStackNavigator<RootNavigation>();

export type RootNavigation = {
    Scheduling: undefined;
    Confirmation: {
        type: string
        date: string
        hour: string
        period: string
        locale: string
        completeDateString: string
    };
    Success: undefined;
    Tabs: undefined;
    Home: undefined;
    Início: undefined;
    Perfil: undefined;
    Agenda: undefined;
}


export function AppRoutes() {
  const theme = useTheme()

 

  function Tabs() {
    return (
        <Navigator
            initialRouteName={'Início'}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.gold_dk,
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 72 : 64,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 16,
                    paddingTop: Platform.OS === 'ios' ? 8 : 8,
                    paddingHorizontal: 48,
                    borderTopRightRadius: 18,
                    borderTopLeftRadius: 18,
                    backgroundColor: theme.colors.brand,
                    shadowColor: theme.colors.brand,
                    shadowOpacity: 1,
                    shadowRadius: 9,
                    shadowOffset: {
                    height: 7,
                    width: 7,
                    },
                    elevation: 9,
                }
            }}
          >
              <Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <Ionicons
                            name='home-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
              />  
              <Screen
                name="Agenda"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialCommunityIcons
                            name='notebook-outline'
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarBadge: 2
                }}
              />  
              <Screen
                name="Perfil"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <AntDesign
                            name='user'
                            size={size}
                            color={color}
                        />
                    )
                }}
              />  
          </Navigator>)
  }

  const Routes = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}
        >
            <Stack.Screen name='Tabs' component={Tabs}/>
            <Stack.Screen name='Scheduling' component={Scheduling}/>
            <Stack.Screen name='Confirmation' component={Confirmation}/>
            <Stack.Screen name='Success' component={Success}/>
        </Stack.Navigator>
    )
  };

    return Routes()
}
