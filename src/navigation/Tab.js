import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, PixelRatio, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/home/Home';
import Explore from '../pages/explore/Explore';
import BookmarkPage from '../pages/bookMark/BookMark';
import ProfileScreen from '../pages/profile/Profile';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const AnimatedTabIcon = ({ name, focused }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: focused ? 1.2 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [focused]);

    return (
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <MaterialIcons name={name} size={PixelRatio.getFontScale() * 26} color={focused ? '#0b86e7' : '#666666'} />
        </Animated.View>
    );
};

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Explore') {
                        iconName = 'language';
                    } else if (route.name === 'Bookmark') {
                        iconName = 'bookmark';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <AnimatedTabIcon name={iconName} focused={focused} />;
                },
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? '#0b86e7' : '#666',
                        fontSize: PixelRatio.getFontScale() * 12,
                        fontWeight: '500'
                    }}>
                        {route.name}
                    </Text>
                ),
                tabBarStyle: styles.tabBar,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Bookmark" component={BookmarkPage} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingBottom: Platform.OS === 'ios' ? height * 0.02 : 10,
        paddingTop: 10,
    },
});
