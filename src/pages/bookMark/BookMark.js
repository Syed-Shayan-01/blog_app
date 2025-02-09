import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import { blogs } from '../../../utils/data/blogs';
const { width, height } = Dimensions.get('window');

const BookmarkPage = () => {
    return (
        <>
            <View style={{ backgroundColor: '#fff' }}>
                <Navbar name1={'arrow-back-ios-new'} />
            </View>
            <View style={styles.container}>

                <FlatList
                    data={blogs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} style={styles.bookmarkItem}>
                            <Image source={{ uri: item.blogImage }} style={styles.bookmarkImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.bookmarkTitle}>{item.title}</Text>
                                <Text style={styles.channelName}>{item.channel}</Text>
                                <Text style={styles.category}>{item.category}</Text>
                            </View>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Text style={styles.icon}>&#9733;</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    bookmarkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Math.max(width, height) * 0.022,
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        marginBottom: height * 0.01,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    bookmarkImage: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    bookmarkTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
    },
    channelName: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500'
    },
    category: {
        fontSize: 12,
        color: '#777',
        fontWeight: '600',
    },
    iconContainer: {
        padding: 7,
        backgroundColor: '#ffcc00',
        borderRadius: 50,
        elevation: 3,
    },
    icon: {
        fontSize: 22,
        color: '#fff',
    },
});

export default BookmarkPage;
