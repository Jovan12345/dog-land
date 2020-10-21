import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, CrimsonText_600SemiBold } from '@expo-google-fonts/crimson-text';
import { AppLoading } from 'expo';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'

interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeScreen = ({ navigation }: Props) => {
    let [fontsLoaded] = useFonts({
        CrimsonText_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background linear gardient
                colors={['#ffc21f', 'white', '#ffc21f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradinet}
            />
            <Text style={styles.header}>WELCOME TO DOG LAND</Text>

            <ImageBackground
                source={require('../../assets/dogland_background.jpg')}
                style={styles.image}
            >
                {/* Button to navigate to second screen */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dogs')}
                    style={styles.homepageButton}
                >
                    <Text style={styles.text}>Proceed to find out the dog you want</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {
        fontSize: 25,
        margin: "5%",
        fontFamily: 'CrimsonText_600SemiBold'
    },
    homepageButton: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 3,
        width: '65%',
        padding: '2%',
        height: 70,
        marginTop: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        opacity: 0.7,
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontFamily: 'CrimsonText_600SemiBold',
        fontSize: 15
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    linearGradinet: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
});

export default HomeScreen;