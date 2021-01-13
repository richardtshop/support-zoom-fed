import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useFetch } from './hooks';
import Error from '../Error';

const Results = ({ url }) => {
  const { data, error, loading } = useFetch(url);
  if (loading || (!data && !error)) return <h3>Loading...</h3>;
  if (error) return <Error error={error} />;

  const results = data.query.search;
  if (results.length === 0) return <Error error="No results" />;

  return (
    <ul className="search-results">
      {results.map((result, index) => (
        <Result key={`wiki-result--${index}`} data={result} />
      ))}
    </ul>
  );
};

const Result = ({ data }) => {
  const { title, snippet } = data;
  const articleURL = `https://en.wikipedia.org/wiki/${title}`;
  return (
    <li>
      <h3>
        <a href={articleURL} target="_blank" rel="noopener noreferrer nofollow">
          {title}
        </a>
      </h3>
      <p>{ReactHtmlParser(snippet)}</p>
    </li>
  );
};

export default Results;
