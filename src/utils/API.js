import axios from "axios";

const URL = "https://randomuser.me/api/?results=200&nat=us";
//const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmp: function() {
    return axios.get(URL);
  }
};
