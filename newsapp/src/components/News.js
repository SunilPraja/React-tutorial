import React, { useState, useEffect, useCallback } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "us",
  category = "business",
  pageSize = 10,
  newsApi,
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async () => {
    setProgress(10);
    setLoading(true);
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsApi}&page=${page}&pageSize=${pageSize}`;
    try {
      const response = await fetch(newsUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const parsedData = await response.json();
      setArticles((prevArticles) => (page === 1 ? parsedData.articles : [...prevArticles, ...parsedData.articles]));
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
      setProgress(100);
    }
    
  }, [country, category, page, pageSize, newsApi, setProgress]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 py-10 sm:py-10">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Latest News
          </h2>
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader />}
        >
          <div className="mx-auto mb-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles.map((element) => (
              <NewsItem
                key={element.url}
                url={element.url}
                description={element.description ? element.description.slice(0, 67) : " "}
                author={element.author ? element.author : "Unknown"}
                title={element.title ? element.title.slice(0, 67) : "Title Not Added"}
                urlToImage={element.urlToImage ? element.urlToImage : "https://dummyimage.com/1280x720/fff/aaa"}
                publishedAt={element.publishedAt ? formatDate(element.publishedAt) : "Unknown Date"}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  newsApi: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
