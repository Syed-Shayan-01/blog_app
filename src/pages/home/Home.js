import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import custom components
import Navbar from '../../components/navbar/Navbar';
import Carousel from '../../components/carousel/Carousel';

// Get device dimensions for responsive styling
const { width, height } = Dimensions.get('window');

const Home = () => {
  // Sample data for Popular News cards
  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc',
      category: 'Sports',
      title: 'What Training Volleyball Players Need?',
      author: 'McKindney',
      date: 'Feb 27, 2023',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc',
      category: 'Sports',
      title: 'Training Do Volleyball Players Need?',
      author: 'McKindney',
      date: 'Feb 27, 2023',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc',
      category: 'Sports',
      title: 'What Training Do Players Need?',
      author: 'McKindney',
      date: 'Feb 27, 2023',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1737602902540-6211385c19bc',
      category: 'Sports',
      title: 'What Do Volleyball Players Need?',
      author: 'McKindney',
      date: 'Feb 27, 2023',
    },
    // Add more items as needed
  ];

  // Render function for FlatList items based on their index
  const renderItem = ({ index }) => {
    // Index 0: Render the Navbar at the top
    if (index === 0) {
      return (
        <Navbar
          name1="menu"
          name2="search"
          name3="notifications-none"
        />
      );
    }

    // Index 1: Render Breaking News section with a Carousel
    if (index === 1) {
      return (
        <View>
          {/* Header for Breaking News */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Breaking News</Text>
            <Text style={styles.headerLink}>View All</Text>
          </View>
          <Carousel />
        </View>
      );
    }

    // Index 2: Render Popular News section with news cards
    if (index === 2) {
      return (
        <>
          {/* Header for Popular News */}
          <View style={styles.headerPopular}>
            <Text style={styles.headerTitle}>Popular News</Text>
            <Text style={styles.headerLink}>View All</Text>
          </View>
          {/* Map over the news data to create individual cards */}
          {data.map(item => (
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
          ))}
        </>
      );
    }

    // Return null if index does not match any condition
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 1, 1]} // Using a dummy array to render three sections
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Header container for Breaking News
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  // Header container for Popular News (includes extra top padding)
  headerPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: height * 0.058,
    paddingBottom: width * 0.05,
    paddingHorizontal: width * 0.05,
  },
  // Title text for both headers
  headerTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
  },
  // "View All" link style for headers
  headerLink: {
    fontSize: 15,
    color: '#0b86e7',
    fontWeight: 'bold',
  },
  // Card container style for each Popular News item
  card: {
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.01,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android shadow
    elevation: 5,
  },
  // Style for the news image
  image: {
    width: width * 0.3,
    height: '100%',
    alignSelf: 'center',
  },
  // Container for the card content (text details)
  cardContent: {
    flex: 1,
    padding: Math.max(width, height) * 0.01,
  },
  // Style for the category text
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: height * 0.01,
  },
  // Style for the title of the news card
  title: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
    marginBottom: height * 0.01,
  },
  // Container for the author and date footer
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Style for the author text
  author: {
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '500',
    color: '#333',
  },
  // Style for the date text
  date: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    marginLeft: width * 0.01,
  },
});
