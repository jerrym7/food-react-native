import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

/**
 * we will export an arrow function, return variables to make use at the SearchScreen component
 */
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
    try{
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm, //or term, will be a short syntax for term: term
            location: 'san jose'
          }
        });
      //response.data while be the list of object we need from the api call
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch(err){
      setErrorMessage('Something went wrong');
    }
    };
    //below the code is only rendered one time because we passed an empty array and 
    //letting knopw the function we do not want to update everytime it function (SearchScreen) is called or rendered by PASSING empty array
    useEffect(() => {
        searchApi('pasta');
    }, []);
    return [searchApi, results, errorMessage]; //returns searchApi function, the list of all restaurants as 'result' variable and errorMessage variable containing any errors
};