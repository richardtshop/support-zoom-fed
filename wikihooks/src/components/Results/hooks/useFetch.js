import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError(`Error: HTTP status ${response.status}`);
        }
      } catch (err) {
        setError(err.toString());
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, error, loading };
};

