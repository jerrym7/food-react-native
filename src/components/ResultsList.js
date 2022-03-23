import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{ title }</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor= {(result) => {
                    return result.id;
                }}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate('ResultShow', {id: item.id})
                        }}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);//withNavigation() this is a way to not bother search screen and just pass it from stack navigator to this component and be able to use navigation due to parent screen does not pass it as props