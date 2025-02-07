import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Navbar from '../../components/navbar/Navbar';

const { width, height } = Dimensions.get('window');

const Explore = () => {
    // Sample data for news articles
    const data = [
        { id: 1, image: 'https://plus.unsplash.com/premium_photo-1734549547922-533a21843173', category: 'Sports', title: 'What Training Volleyball Players Need?', author: 'McKindney', date: 'Feb 27, 2023' },
        { id: 2, image: 'https://plus.unsplash.com/premium_photo-1734549547922-533a21843173', category: 'Entertainment', title: 'Top 10 Movies to Watch in 2023', author: 'Jane Doe', date: 'Mar 12, 2023' },
        { id: 3, image: 'https://plus.unsplash.com/premium_photo-1734549547922-533a21843173', category: 'Health', title: '5 Tips for a Healthier Lifestyle', author: 'John Smith', date: 'Jan 5, 2023' },
        { id: 4, image: 'https://plus.unsplash.com/premium_photo-1734549547922-533a21843173', category: 'Technology', title: 'Latest Innovations in AI', author: 'Sarah Lee', date: 'Dec 15, 2023' },
        { id: 5, image: 'https://plus.unsplash.com/premium_photo-1734549547922-533a21843173', category: 'Travel', title: 'Top 5 Destinations to Visit in 2023', author: 'Alice Brown', date: 'Nov 3, 2023' },
    ];

    // Renders each news card
    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.card}>
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
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Navigation Bar */}
            <Navbar name1={'arrow-back-ios-new'} />

            {/* Title and Subtitle */}
            <View style={{ paddingHorizontal: width * 0.05 }}>
                <Text style={{ fontSize: 50, color: '#000', fontWeight: '700' }}>Discover</Text>
                <Text style={{ fontSize: 13, color: '#333', letterSpacing: 0.5 }}>News from All Around the World</Text>
            </View>

            {/* Search Bar */}
            <TextInput style={styles.searchInput} placeholder='Search' keyboardType='text' placeholderTextColor={'#333'} />

            {/* Horizontal Category List */}
            <SafeAreaView>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.carouselCategoryText}>{item.category}</Text>
                    )}
                />
            </SafeAreaView>

            {/* News Articles List */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1.2,
        fontSize: 17,
        margin: Math.max(width, height) * 0.03,
        padding: Math.max(width, height) * 0.013,
        paddingHorizontal: width * 0.03,
        borderRadius: 20
    },
    carouselCategoryText: {
        color: 'white',
        backgroundColor: '#0b86e7',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.012,
        borderRadius: 22,
        letterSpacing: 1,
        fontSize: 16,
        marginHorizontal: width * 0.015,
        marginBottom: height * 0.02
    },
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
});

export default Explore;
