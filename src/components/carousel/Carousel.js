import React, { useState, useEffect, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Sample data - In a real app, this would come from an API or props
const CAROUSEL_DATA = [
  {
    id: '1',
    category: 'Education',
    channelName: 'SNN NETWORKS ☑️',
    description: 'Transforming learning through innovative technologies',
    imageUrl: 'https://images.unsplash.com/photo-1737079567862-4ccc9433d443'
  },
  {
    id: '2',
    category: 'Technology',
    channelName: 'Tech Insights ✨',
    description: 'Exploring the frontiers of digital innovation',
    imageUrl: 'https://images.unsplash.com/photo-1737079567862-4ccc9433d443'
  },
  {
    id: '3',
    category: 'Science',
    channelName: 'Discovery Hub 🔬',
    description: 'Unraveling the mysteries of the universe',
    imageUrl: 'https://images.unsplash.com/photo-1737079567862-4ccc9433d443'
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      // Calculate next index
      const nextIndex = (activeIndex + 1) % CAROUSEL_DATA.length;

      // Scroll to the next item
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true
        });
        setActiveIndex(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(autoScroll);
  }, [activeIndex]);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItemContainer}>
      <View style={styles.overlay}>
        <Text style={styles.carouselCategoryText}>
          {item.category}
        </Text>
        <View style={styles.contentContainer}>
          <Text style={styles.carouselChannelName}>
            {item.channelName}
          </Text>
          <Text style={styles.blogDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.carouselImage}
        resizeMode="cover"
      />
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {CAROUSEL_DATA.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex ? styles.activePaginationDot : {}
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={CAROUSEL_DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderCarouselItem}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
          }
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  carouselItemContainer: {
    width,
    height: height * 0.36,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: height * 0,
    left: width * 0,
    right: width * 0,
    bottom: height * 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 1,
    justifyContent: 'space-between',
    padding: width * 0.05,
  },
  contentContainer: {
    marginBottom: height * 0.023,
  },
  carouselCategoryText: {
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#0b86e7',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: 20,
    letterSpacing: 1,
    fontSize: 14,
    marginTop: height * 0.02,
  },
  carouselChannelName: {
    color: 'white',
    letterSpacing: 1,
    fontSize: 18,
  },
  blogDescription: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '600',
    marginTop: height * 0.009,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    left: width * 0,
    right: width * 0,
    top: height * 0.38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: width * 0.03,
    height: height * 0.013,
    borderRadius: 5,
    backgroundColor: 'rgba(11,134,231,0.5)', // Blue with opacity
    marginHorizontal: 8,
  },
  activePaginationDot: {
    backgroundColor: '#0b86e7', // Solid blue for active dot
    width: width * 0.05,
    height: height * 0.014,
  }
});

export default Carousel;