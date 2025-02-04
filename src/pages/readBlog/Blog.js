import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Navbar from '../../components/navbar/Navbar'; // Assuming Navbar is your custom component

const { width, height } = Dimensions.get('window');

const Blog = () => {
    return (
        <View style={styles.container}>
            {/* Navbar and Background Image */}
            <View style={styles.headerContainer}>
                <Navbar name1={'arrow-back-ios-new'} name2={'bookmark-outline'} />
                <Image
                    source={{ uri: `https://images.unsplash.com/photo-1585511543349-172d6c653ce7` }}
                    style={styles.image}
                />
            </View>

            {/* Scrollable Modal Section */}
            <View style={styles.modalContainer}>
                <View style={styles.channelContainer}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1738363436272-f191888a398b',
                        }}
                        style={styles.channelImage}
                    />
                    <Text style={styles.channelName}>CNN Indonesia</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.separator} />
                    <Text style={styles.content}>
                        As a tech department, we're usually pretty good at spotting tech that's out of the ordinary. During time trials, we’re used to seeing new aero innovation, and while there are certainly aero tricks used in road stages, they are harder to spot. {'\n\n'}
                        A case in point, throughout the Volta ao Algarve, Alexander Kristoff has been wearing an old discontinued time trial helmet, complete with the visor removed, in the road stages without much context. {'\n\n'}
                        This setup has sparked curiosity among enthusiasts and fans. While the exact reason remains unclear, the tech behind such modifications could be key for the next big innovation in sports racing.
                    </Text>
                </ScrollView>
            </View>

        </View>
    );
};

export default Blog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        position: 'relative',
    },
    image: {
        width: width,
        height: height * 0.5,
        resizeMode: 'cover',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -25, // Pull the modal slightly over the image
        padding: 20,
    },
    channelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    channelImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // Circular image
        marginRight: 10,
    },
    channelName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    scrollContainer: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc',
        marginVertical: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
});
