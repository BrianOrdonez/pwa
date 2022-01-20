import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8524b1f0271519a527aae238fac845cf";

const fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "imperial",
      appid: API_KEY,
    },
  });
  return data;
};

export default fetchweather;
