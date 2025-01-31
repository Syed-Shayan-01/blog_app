import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
const { width, height } = Dimensions.get('window');
const Home = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc', // Replace with actual image URL
            category: 'Sports',
            title: 'What Training Volleyball Players Need?',
            author: 'McKindney',
            date: 'Feb 27, 2023',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc', // Replace with actual image URL
            category: 'Sports',
            title: ' Training Do Volleyball Players Need?',
            author: 'McKindney',
            date: 'Feb 27, 2023',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc', // Replace with actual image URL
            category: 'Sports',
            title: 'What Training Do  Players Need?',
            author: 'McKindney',
            date: 'Feb 27, 2023',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc', // Replace with actual image URL
            category: 'Sports',
            title: 'What Do Volleyball Players Need?',
            author: 'McKindney',
            date: 'Feb 27, 2023',
        },
        // Add more items as needed
    ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={[1, 1, 1]}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ index }) => {
                    if (index == 0) {
                        return (
                            <Navbar name1={'menu'} name2={'search'} name3={'notifications-none'} />
                        );
                    }
                    if (index == 1) {
                        return (
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingBottom: height * 0.02,
                                    paddingHorizontal: width * 0.05
                                }}>
                                    <Text style={{
                                        fontSize: 24,
                                        color: '#000',
                                        fontWeight: '700'
                                    }}>
                                        Breaking News
                                    </Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#0b86e7',
                                        fontWeight: 'bold'
                                    }}>
                                        View All
                                    </Text>
                                </View>
                                <Carousel />
                            </View>
                        );
                    }
                    if (index === 2) {
                        return (
                            <>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: height * 0.058,
                                    paddingBottom: width * 0.05,
                                    paddingHorizontal: width * 0.05
                                }}>
                                    <Text style={{
                                        fontSize: 24,
                                        color: '#000',
                                        fontWeight: '700'
                                    }}>
                                        Popular News
                                    </Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#0b86e7',
                                        fontWeight: 'bold'
                                    }}>
                                        View All
                                    </Text>
                                </View>
                                {data.map((item) => {
                                    return (
                                        <View style={styles.card}>
                                            <Image source={{ uri: item.image }} style={styles.image} />
                                            <View style={styles.cardContent}>
                                                <Text style={styles.category}>{item.category}</Text>
                                                <Text style={styles.title}>{item.title}</Text>
                                                <View style={styles.footer}>
                                                    <Text style={styles.author}>{item.author}</Text>
                                                    <Text style={styles.date}>• {item.date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                                }

                            </>
                        );
                    }
                    return null;
                }}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.01,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: width * 0.3,
        height: '100%',
        alignSelf: 'center',
    },
    cardContent: {
        flex: 1,
        padding: Math.max(width, height) * 0.01,
    },
    category: {
        fontSize: 12,
        color: '#666',
        marginBottom: height * 0.01,
    },
    title: {
        fontSize: 17,
        color: 'black',
        fontWeight: '600',
        marginBottom: height * 0.01,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    author: {
        fontSize: 13,
        letterSpacing: 0.5,
        fontWeight: '500',
        color: '#333',
    },
    date: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
        marginLeft: width * 0.01,
    },
})