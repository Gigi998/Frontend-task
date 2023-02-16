import React from "react";

// Fetch by category api
export const urlCategory = `https://newsapi.org/v2/top-headlines?country=us&`;

// News api
export const allNews = `https://newsapi.org/v2/everything?q=musk
    &pageSize=50&sortBy=publishedAt&apiKey=9370eb68c6004acd940c8644a2689e0c`;

// All news api
export const allNewsUrl = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=9370eb68c6004acd940c8644a2689e0c`;

// API1
export const api1 = "9370eb68c6004acd940c8644a2689e0c";
// API2
export const api2 = "150934a1060e4e93939ce31724e99b59";

// Infinite scroll api
export const infiniteUrl =
  "https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=20&page=2&apiKey=9370eb68c6004acd940c8644a2689e0c";
