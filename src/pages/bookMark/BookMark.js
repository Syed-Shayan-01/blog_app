import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Navbar from '../../components/navbar/Navbar';

const bookmarks = [
    { id: '1', title: 'React Native Best Practices', channel: 'Tech Blog', category: 'Development', image: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d' },
    { id: '2', title: 'State Management in React Native', channel: 'Code Academy', category: 'Programming', image: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d' },
    { id: '3', title: 'How to Optimize React Native Performance', channel: 'Mobile Dev Hub', category: 'Optimization', image: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d' },
];
const BookmarkPage = () => {
    return (
        <>
            <View>
                <Navbar name1={'arrow-back-ios-new'} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={bookmarks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} style={styles.bookmarkItem}>
                            <Image source={{ uri: item.image }} style={styles.bookmarkImage} />
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
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#222',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    bookmarkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        marginBottom: 10,
        elevation: 5,
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
