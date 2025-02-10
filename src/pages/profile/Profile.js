import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../../components/navbar/Navbar';
const { width, height } = Dimensions.get('window');
const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Navbar name1={'arrow-back-ios-new'}  />
            </View>
            <View style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380' }}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editImageButton}>
                        <MaterialIcons name="edit" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userTitle}>Tech Blogger</Text>

                {/* Stats Section */}
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>120</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>15K</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>500</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                </View>
            </View>

            {/* Bio Section */}
            <View style={styles.section}>
                <Text style={styles.bioText}>
                    Tech enthusiast and professional blogger. Sharing insights about the latest in technology and innovation.
                </Text>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionItem}>
                    <MaterialIcons name="email" size={24} color="#666" />
                    <Text style={styles.sectionText}>john.doe@example.com</Text>
                </View>
                <View style={styles.sectionItem}>
                    <MaterialIcons name="location-on" size={24} color="#666" />
                    <Text style={styles.sectionText}>New York, USA</Text>
                </View>
                <View style={styles.sectionItem}>
                    <MaterialIcons name="article" size={24} color="#666" />
                    <Text style={styles.sectionText}>Tech Articles</Text>
                </View>
            </View>

            {/* Social Links */}
            <View style={styles.section}>
                <TouchableOpacity style={styles.socialItem}>
                    <MaterialIcons name="language" size={24} color="#666" />
                    <Text style={styles.sectionText}>Website</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialItem}>
                    <MaterialIcons name="link" size={24} color="#666" />
                    <Text style={styles.sectionText}>LinkedIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialItem}>
                    <MaterialIcons name="article" size={24} color="#666" />
                    <Text style={styles.sectionText}>Medium</Text>
                </TouchableOpacity>
            </View>

            {/* Settings Section */}
            <View style={styles.section}>
                <TouchableOpacity style={styles.settingsItem}>
                    <MaterialIcons name="settings" size={24} color="#666" />
                    <Text style={styles.sectionText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <MaterialIcons name="notifications" size={24} color="#666" />
                    <Text style={styles.sectionText}>Notifications</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton}>
                <MaterialIcons name="logout" size={24} color="#fff" />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerTextContainer: {
        paddingHorizontal: width * 0.05,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 50,
        color: '#000',
        fontWeight: '700',
    },
    headerSubtitle: {
        fontSize: 13,
        color: '#333',
        letterSpacing: 0.5,
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    profileImageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    editImageButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#007AFF',
        borderRadius: 15,
        padding: 8,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userTitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 15,
    },
    sectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    socialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    sectionText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#333',
    },
    bioText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3B30',
        marginHorizontal: 20,
        marginVertical: 30,
        padding: 15,
        borderRadius: 10,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default ProfileScreen;