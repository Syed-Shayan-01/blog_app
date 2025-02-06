import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const Navbar = ({ name1, name2, name3, LinkText }) => {
    return (
        <>
            <View style={styles.navbarContainer}>
                <Link to={LinkText} style={styles.navbarIcon1}>
                    <MIcon name={name1} size={25} color="black" />
                </Link>
                <View style={styles.navbarIcon2}>
                    {name2 && <Text style={{
                        backgroundColor: '#dfdfe0',
                        padding: Math.max(width, height) * 0.011,
                        borderRadius: 50,
                    }}>
                        <MIcon name={name2} size={25} color="black" />
                    </Text>}
                    {name3 && <Text style={{
                        backgroundColor: '#dfdfe0',
                        padding: Math.max(width, height) * 0.011,
                        borderRadius: 50,
                    }}>
                        <MIcon name={name3} size={25} color="black" />
                    </Text>}
                </View>
            </View>
        </>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: height * 0.025,
        paddingHorizontal: width * 0.05,
    },
    navbarIcon1: {
        backgroundColor: '#dfdfe0',
        padding: Math.max(width, height) * 0.011,
        borderRadius: 50,
    },
    navbarIcon2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: width * 0.05,
    },
});
