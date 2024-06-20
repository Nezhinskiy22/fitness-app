import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error:", err.message);
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};

// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
//   params: {
//     limit: "10",
//     offset: "0",
//   },
//   headers: {
//     "x-rapidapi-key": "568f93900amsh70cb898ae51211ap19e818jsn36e1d7d408d7",
//     "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
