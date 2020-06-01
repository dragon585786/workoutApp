import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import  LinksScreen from '../screens/LinksScreen';

const Screens = {
    home:{
        screen:HomeScreen
    },
    link:{
        screen:LinksScreen
    },
};

const routerDrawer = createStackNavigator(Screens);
export default routerDrawer;