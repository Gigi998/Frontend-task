## Start project locally

```sh
npm install && npm start
```

## Technologies

- State => useReducer
- Styling => SCSS
- React-router

## API

Fetch data from two different endpoints.
The API has a request limit, so if You run out of requests, simply change the API key =>

1.Endpoint
"src/context/newsCategoryContext.js"

2.Endpoint
"src/hooks/useFetchInfinite.tsx"

Top headlines => https://newsapi.org/v2/top-headlines?country=us&category=$business&apiKey=?

Latest news => https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=20&page=2&apiKey=?

## Design

Favorites category added. Add to favorites and remove from favorites logic implemented.
