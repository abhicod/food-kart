import React from 'react';
import { useEffect, useState} from 'react';

const useFetchApiData = (url) => {

    const [topRes, setTopRes] = useState([]);

     useEffect(() => {
        fetchData();
      }, [url]);

      const fetchData = async () => {
    const data = await fetch(url);

    const json = await data.json();
    setTopRes(json?.data?.cards);
  };

  return {topRes , setTopRes}; ;
}

export default useFetchApiData;


// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const res = await fetch(url);
//         const text = await res.text();

//         if (!text.startsWith("{")) {
//           throw new Error("Invalid JSON response");
//         }

//         const json = JSON.parse(text);
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;
