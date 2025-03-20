
const API_KEY = '4572f76e47dc283f203ccc4efbc0cbef'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data  = await response.json();
    return data.results;
   
  
};

export const searchMovies = async (query) => {
 
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data  = await response.json();
    return data.results;
    console.log(data.results);
  
};
