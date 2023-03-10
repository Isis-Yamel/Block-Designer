import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Blog: BlogScreen,
  Create: CreateScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog creator',
  },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
};
