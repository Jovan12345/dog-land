import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, CrimsonText_600SemiBold } from '@expo-google-fonts/crimson-text';
import { AppLoading } from 'expo';

const DogScreen = () => {
    const dogs = [
        { kind: 'Pekingese', height: '20', weight: '5.2', imageLocation: require('../../assets/dogs/pekingese.jpg') },
        { kind: 'Bulldog', height: '35', weight: '20.6', imageLocation: require('../../assets/dogs/bulldog.jpg') },
        { kind: 'Labrador Retriver', height: '59', weight: '31.2', imageLocation: require('../../assets/dogs/labrador.jpg') },
        { kind: 'Siberian Husky', height: '54', weight: '24.3', imageLocation: require('../../assets/dogs/siberianHusky.jpg') },
        { kind: 'Doberman', height: '69', weight: '43.1', imageLocation: require('../../assets/dogs/doberman.jpg') },
        { kind: 'Bull Terrir', height: '35', weight: '17.9', imageLocation: require('../../assets/dogs/bullTerrier.jpg') },
        { kind: 'Dalmatain', height: '57', weight: '27.7', imageLocation: require('../../assets/dogs/dalmation.jpg') },
        { kind: 'Miniature Pinscher', height: '27', weight: '4.5', imageLocation: require('../../assets/dogs/miniature-pinscher.jpg') },
        { kind: 'Shih Tzu', height: '22', weight: '4.6', imageLocation: require('../../assets/dogs/shihTzu.jpeg') },
        { kind: 'Beagle', height: '37', weight: '10.5', imageLocation: require('../../assets/dogs/beagle.jpg') }
    ];

    let [fontsLoaded] = useFonts({
        CrimsonText_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ffc21f', 'white', '#ffc21f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradinet}
            />
            <Text style={styles.header}>Find the puppy you want</Text>
            <FlatList
                data={dogs}
                keyExtractor={item => item.kind}
                renderItem={({ item }) => {
                    return (
                            <View style={styles.item}>
                                <View style={styles.itemImage}>
                                    <Image source={item.imageLocation} style={styles.image} />
                                </View>
                                <View style={styles.itemDescription}>
                                    <View style={{ flexDirection: "row" }}><Text style={[styles.firstOf, styles.itemContent]}>Breed</Text><Text> : </Text><Text style={styles.itemContent}>{item.kind}</Text></View>
                                    <View style={{ flexDirection: "row" }}><Text style={[styles.firstOf, styles.itemContent]}>Height</Text><Text> : </Text><Text style={styles.itemContent}>{item.height} cm</Text></View>
                                    <View style={{ flexDirection: "row" }}><Text style={[styles.firstOf, styles.itemContent]}>Weight</Text><Text> : </Text><Text style={styles.itemContent}>{item.weight} kg</Text></View>
                                </View>
                            </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    firstOf: {
        textAlign: 'right'
    },
    container: {
        display: "flex",
        flex: 1
    },
    header: {
        margin: 30,
        fontFamily: 'CrimsonText_600SemiBold',
        fontSize: 25
    },
    item: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        margin: '2%',
        padding: 5,
        backgroundColor: 'rgba(138, 138, 138, 0.2)',
        borderRadius: 3,
        borderColor: 'rgb(80, 80, 80)',
        borderWidth: 0.8
    },
    itemImage: {
        flex: 1.2
    },
    itemDescription: {
        flex: 2,
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'space-around'
    },
    itemContent: {
        flex: 1,
        fontFamily: 'CrimsonText_600SemiBold'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderColor: 'rgb(80, 80, 80)',
        borderWidth: 3,
        borderRadius: 3,
    },
    linearGradinet: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
})

export default DogScreen;