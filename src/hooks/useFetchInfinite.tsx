import React, { useEffect, useState } from "react";
import axios from "axios";
import { api1, api2, api3, api4, api5, api6, api7 } from "../helpers/urls";

const useFetchInfinite = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      // Change api key here
      url: `https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=8&page=${pageNumber}&apiKey=${api1}`,
      method: "GET",
      headers: {
        accept: "application/json",
      },
      // Canceling previous requests
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNewsList((prev) => {
          return [...prev, ...res.data.articles];
        });
        setHasMore(res.data.articles.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        // If is axios cancelation error ignore
        if (axios.isCancel(e)) return;
        setError(true);
      });
    // Clean up function it runs before useEffect starts
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, newsList, hasMore };
};

export default useFetchInfinite;
