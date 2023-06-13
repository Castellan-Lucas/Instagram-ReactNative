import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Stories() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LinearGradient
                    colors={['#FF0000', '#00FF00', '#0000FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.imageContainer}
                />
                <Image style={styles.image} source={require('./assets/img/1.jpg')} />
                <Image style={styles.image} source={require('./assets/img/2.jpg')} />
                <Image style={styles.image} source={require('./assets/img/3.jpg')} />
                <Image style={styles.image} source={require('./assets/img/4.jpg')} />
                <Image style={styles.image} source={require('./assets/img/5.jpg')} />
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        left:40,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        borderWidth: 2,
    },
});
