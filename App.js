import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Category from './pages/Category';
import MovieDetail from './pages/MovieDetail';
import SwipeListView  from './pages/SwiperList.js';
import EmailForm from './pages/Contact';
import ContactEmail from './pages/Email';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Login Screen */}
          <Stack.Screen name="Login">
            {props => <Login {...props} setUser={setUser} />}
          </Stack.Screen>

          {/* Home Screen */}
          <Stack.Screen name="Home">
            {props => <Home {...props} user={user} />}
          </Stack.Screen>
          {/* Movie Detail Screen */}
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="SwiperList" component={SwipeListView} />
          <Stack.Screen name="Contact" component={EmailForm} options={{ title: 'Enter Email' }} />
          <Stack.Screen name="ContactEmail" component={ContactEmail} options={{ title: 'Contact Email' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
