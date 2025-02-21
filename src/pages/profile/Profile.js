import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../../components/navbar/Navbar';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const scaleAnim = useRef(new Animated.Value(0.9)).current;
    const headerOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.stagger(150, [
            Animated.timing(headerOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 20,
                friction: 7,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.spring(slideAnim, {
                    toValue: 0,
                    tension: 20,
                    friction: 7,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
                    <View style={styles.headerOverlay} />
                    <Navbar name1={'arrow-back-ios-new'} style={styles.navbar} />
                </Animated.View>

                <View style={styles.contentWrapper}>
                    <Animated.View style={[
                        styles.profileImageContainer,
                        { transform: [{ scale: scaleAnim }] }
                    ]}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380' }}
                            style={styles.profileImage}
                        />
                        <TouchableOpacity style={styles.editImageButton}>
                            <MaterialIcons name="camera-alt" size={15} color="#fff" />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={[
                        styles.contentContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY: slideAnim }],
                        }
                    ]}>
                        <Text style={styles.userName}>John Doe</Text>
                        <Text style={styles.userTitle}>Senior Tech Blogger</Text>

                        <View style={styles.statsContainer}>
                            {[
                                { number: '120', label: 'Posts' },
                                { number: '15K', label: 'Followers' },
                                { number: '500', label: 'Following' }
                            ].map((stat, index) => (
                                <View key={index} style={styles.statItem}>
                                    <Text style={styles.statNumber}>{stat.number}</Text>
                                    <Text style={styles.statLabel}>{stat.label}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.bioText}>
                                Tech enthusiast and professional blogger with 10+ years of experience. 
                                Sharing insights about the latest in technology and innovation.
                            </Text>
                        </View>

                        <View style={styles.card}>
                            {[
                                { icon: 'email', text: 'john.doe@example.com' },
                                { icon: 'location-on', text: 'New York, USA' },
                                { icon: 'work', text: 'Tech Articles & Consulting' }
                            ].map((item, index) => (
                                <View key={index} style={styles.infoItem}>
                                    <MaterialIcons name={item.icon} size={24} color="#2196F3" />
                                    <Text style={styles.infoText}>{item.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Social Links</Text>
                            {[
                                { icon: 'language', text: 'Website', color: '#4285F4' },
                                { icon: 'link', text: 'LinkedIn', color: '#0077B5' },
                                { icon: 'article', text: 'Medium', color: '#00AB6C' }
                            ].map((item, index) => (
                                <TouchableOpacity 
                                    key={index} 
                                    style={styles.socialItem}
                                >
                                    <MaterialIcons name={item.icon} size={24} color={item.color} />
                                    <Text style={[styles.socialText, { color: item.color }]}>{item.text}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TouchableOpacity style={styles.editProfileButton}>
                            <MaterialIcons name="edit" size={20} color="#fff" />
                            <Text style={styles.editProfileText}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.logoutButton}>
                            <MaterialIcons name="logout" size={20} color="#FF3B30" />
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        height: height * 0.23,
        backgroundColor: '#2196F3',
    },
    headerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#1976D2',
        opacity: 0.3,
    },
    navbar: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#fff',
        resizeMode: 'cover'
    },
    editImageButton: {
        position: 'absolute',
        right: 150,
        bottom: -5,
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: '#fff',
        elevation: 4,
    },
    contentContainer: {
        padding: 20,
    },
    userName: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
        color: '#1A1A1A',
    },
    userTitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 2,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginTop: 20,
        elevation: 2,
    },
    bioText: {
        fontSize: 16,
        color: '#4A4A4A',
        lineHeight: 24,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    infoText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#4A4A4A',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: 15,
    },
    socialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    socialText: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: '500',
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        marginTop: 30,
        padding: 15,
        borderRadius: 12,
        elevation: 2,
    },
    editProfileText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 30,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FF3B30',
    },
    logoutText: {
        color: '#FF3B30',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
});

export default ProfileScreen;