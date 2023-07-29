import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([]); //fetched data from the API and is initialized as an empty array []
  const [loading, setLoading] = useState(false); //data is currently being fetched or not and is initialized as false.
  const [error, setError] = useState(false); //store any error that may occur during the data fetching process and is initialized as false.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    try {
      const res = axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch