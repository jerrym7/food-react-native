import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    return(
        <View style={styles.conatinerStyle}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conatinerStyle: {
        marginLeft: 20
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultDetail;