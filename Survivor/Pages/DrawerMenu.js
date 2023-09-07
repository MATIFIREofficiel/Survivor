import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TrombinoscopeScreen from './Trombinoscope.js';

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

export default function DrawerMenu({ navigation, setIsSignedIn }) {
  return (
    <NavigationContainer styles={style.container}>
      <Drawer.Navigator initialRouteName="trombinoscope">
      <Drawer.Screen name="Trombinoscope" component={TrombinoscopeScreen}
          initialParams={{setIsSignedIn}}
          options={
            {
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                name= {focused ? "people": "people-outline"}
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