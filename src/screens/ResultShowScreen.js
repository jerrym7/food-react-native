import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {//get the navigation stack instance
    const id = navigation.getParam('id'); //get the parameters passed by navigate method
    const [restaurant, setRestaurant] = useState(null);
    const getRestaurant = async (id) => {
        try{
            const response = await yelp.get(`/${id}`);
            setRestaurant(response.data);
        }catch(err){
            console.log('There is an errror: '+ err)
        }
    };
    useEffect(() => {
        getRestaurant(id)
    }, []); //call only at render time once
    if(!restaurant){
        return null;
    }

    return(
        <>
            <Text>{restaurant.name}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor = {(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.imageStyle} source={ { uri: item }} />
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 250,
        width: 350
    }
});

export default ResultShowScreen;