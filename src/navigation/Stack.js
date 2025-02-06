import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog from '../pages/readBlog/Blog';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tab">
                <Stack.Screen name='Tab' component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='Blog' component={Blog} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;