import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// everything api
const API =
  "https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=20&page=2&apiKey=150934a1060e4e93939ce31724e99b59";

const useFetchInfinite = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      url: `https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=20&page=${pageNumber}&apiKey=150934a1060e4e93939ce31724e99b59`,
      method: "GET",
      headers: {
        accept: "application/json",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNewsList((prev) => {
          return [...prev, ...res.data.articles];
        });
        console.log(res.data.articles);
        setHasMore(res.data.articles.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, newsList, hasMore };
};

export default useFetchInfinite;
