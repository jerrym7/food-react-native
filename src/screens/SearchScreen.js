import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useRestaurant from '../hooks/useRestaurant';

import Searchbar from '../components/Searchbar'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useRestaurant(); //useRestaurant() is a custom hook I created. 

  const filterResultsByPrice = (price) => {
    //price == '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price; //returns price if the price of the result is the same as the price entered in the argument
    });
  }
  // '<> </>'this empty element (tag) will avoid issues when returning multiple elements, by rendering not past the screen and avoid putting flex: 1 on the parent view
  return (
    <>
      <Searchbar term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit = { () => {
          searchApi(term);
        } }
      />
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
