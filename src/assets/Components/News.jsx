import React, { useState } from "react";
import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsApp = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
      );
      setArticles(res.data.articles);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  };

  return (
    <div className="min-h-screen dark:bg-pink-600 dark:text-cyan-500 flex items-center justify-center bg-yellow-100 px-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">🗞️ News App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter keyword (e.g., technology, sports)"
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={fetchNews}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-600">{article.description}</p>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="news"
                  className="w-full h-48 object-cover rounded mt-2"
                />
              )}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;