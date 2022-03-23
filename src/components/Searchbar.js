import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


/**
 * 
 * @returns the search bar view
 */
const SearchScreen = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={() => {
          onTermSubmit();
        }}
        placeholder='Search'
        value={term}
        onChangeText = {newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};


/**
 * styles for the component search bar
 */
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#EEEEEE',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
      fontSize: 15,
      flex: 1
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 5
    }
});

export default SearchScreen;
