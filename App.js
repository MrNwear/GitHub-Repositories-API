import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExploreScreen from './src/Screens/ExploreScreen';
import RepositoriesScreen from './src/Screens/RepositoriesScreen';
import {Image, SafeAreaView} from 'react-native';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#fff', marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            source={require('./src/assets/Milango.png')}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              color: '#2b1190',
              fontSize: 24,
              fontWeight: 'bold',
              marginStart: 5,
            }}>
            milango
          </Text>
        </View>
        <ExploreScreen />
        {/* <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#662ab0',
              tabBarInactiveTintColor: 'gray',
              tabBarIndicatorContainerStyle: {
                shadowColor: '#fff',
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#45a333',
              },
              tabBarItemStyle: {
                width: 140,
              },
            }}>
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Repositories" component={RepositoriesScreen} />
          </Tab.Navigator>
        </NavigationContainer> */}
      </View>
    </SafeAreaView>
  );
}
