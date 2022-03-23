import axios from "axios";
//create instance of axios
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer AM0TVo6PziBl5iB8nfEuWTaAbumaawgTulMJLxkWhDdG19gwG4itzEgQvt4jO7TohN-5nHhKUgCKFfrWGBQpGtGYB54U_gCj__ZvMpBrZLXPyEkPYol9__jTijI6YnYx'
    }
});
//call it 
//yelp.get('/search');