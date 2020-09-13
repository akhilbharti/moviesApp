import axios from 'axios';

// Search class model
export default class Search {
  // Passing the query when creating a new search
  constructor(query) {
    this.query = query;
  }

  // Get results from query
  async getResults(page = 1) {
        const apiKey = "4ad36844";
        
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.query}&type=movie&page=${page}`
      );
      // Save the data on the object
      this.result = res.data;
      this.page = page;
    } catch (error) {
      console.log(error);
    }
  }
}
