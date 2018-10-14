import { createStackNavigator } from 'react-navigation';
import Screen1 from '../container/ScreenOne';
import Screen2 from '../container/ScreenTwo';

const routes = createStackNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});

export default routes;
