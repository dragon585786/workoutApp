import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import  LinksScreen from '../screens/LinksScreen';
import WorkoutTime from '../screens/Home/WorkoutTime';
import Notification from '../screens/Home/Notification';
import Send from '../screens/Home/Send';
import StartExcersize from '../screens/Home/StartExcersize'

const Screens = {
    Setting: {
        screen: LinksScreen,
    },
    WorkoutTime:{
        screen:WorkoutTime
    },
    Notification:{
        screen:Notification
    },
    Send:{
        screen:Send
    },
    StartExcersize:{
        screen:StartExcersize
    },
};

const routerStack = createStackNavigator(Screens);
export default routerStack;