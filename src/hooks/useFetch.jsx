import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL_RICK_AND_MORTY}/${endpoint}`);
      setData(response.data.results);
      setInfo(response.data.info);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);


  const loadNextPage = async () => {
    if (info.next) {
      try {
        const nextPageResponse = await axios.get(info.next);
        setData(nextPageResponse.data.results);
        setInfo(nextPageResponse.data.info);
        console.log('data-info', info);
        console.log('data-N', data);
      } catch (error) {
        setError(error);
      }
    }
  };

  const loadPreviousPage = async () => {
    if (info.prev) {
      try {
        const prevPageResponse = await axios.get(info.prev);
        setData(prevPageResponse.data.results);
        setInfo(prevPageResponse.data.info);
        console.log('data-info', info);
        console.log('data-p', data);
      } catch (error) {
        setError(error);
      }
    }
  };

  return { data, info, loading, error, loadNextPage, loadPreviousPage};
}