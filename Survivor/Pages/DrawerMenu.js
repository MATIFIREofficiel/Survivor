import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileDetailScreen from './ProfileDetailsScreen.js';
import TrombinoscopeScreen from './Trombinoscope.js';
import ProfilePage from './ProfilePage.js';

import { Ionicons } from '@expo/vector-icons';
import { Button, View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Stack = createStackNavigator();

function ProfileStack({route}) {
  return (
    <Stack.Navigator initialRouteName="Trombinoscope">
      <Stack.Screen name="All members" component={TrombinoscopeScreen}
        initialParams={
          {
            access_token: route.params,
          }
        }
      />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}


export default function DrawerMenu({ navigation, apiUser }) {
  return (
    <NavigationContainer styles={style.container}>
      <Drawer.Navigator initialRouteName="trombinoscope">
        <Drawer.Screen name="Trombinoscope" component={ProfileStack}
          initialParams={apiUser}
          options={
            {
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "people" : "people-outline"}
                  size={size}
                  color={focused ? 'blue' : '#ccc'}
                />
              ),
            }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen}
          options={
            {
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="ios-notifications"
                  size={size}
                  color={focused ? 'blue' : '#ccc'}
                />
              ),
            }} />
        <Drawer.Screen name="Profile" component={ProfilePage}
          initialParams={[apiUser, 74]}
          options={
            {
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="person"
                  size={size}
                  color={focused ? 'blue' : '#ccc'}
                />
              ),
            }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const style = ({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E6',
  },
});