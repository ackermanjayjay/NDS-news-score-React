import axios from "axios";
const urlEndpoint= import.meta.env.VITE_ENDPOINT
// http://127.0.0.1:8000/search/text?q=harry kane
export async function QueryNews(text) {
    try {
      const response = await axios.get(
        `${urlEndpoint}/search/text?q=${text}`
      );
      return response.data.data; // Assuming you want to return the data from the response
    } catch (error) {
      console.error("Error fetching Prediction:", error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }