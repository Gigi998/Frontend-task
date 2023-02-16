import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { infiniteUrl } from "../helpers/urls";

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
      url: `https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=8&page=${pageNumber}&apiKey=9370eb68c6004acd940c8644a2689e0c`,
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
