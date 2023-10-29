import { useEffect, useState } from "react";
const useGetData = (url) => {
  // Local States
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response);
      })
      .then((data) => {
        setData(data);
        console.log("data in custom hook", data.length);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data: data, isLoading: isLoading, error: error };
};

export default useGetData;
