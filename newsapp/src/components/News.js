import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  };

  static defaultProps = {
    country: "us",
    category: "business",
    pageSize: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchNews() {
    this.setState({ loading: true });
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2e0e1513df2479f84074bd85e85a015&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const response = await fetch(newsUrl);
    const parsedData = await response.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  async componentDidUpdate(prevProps, prevState) {
    // React to category or country prop changes
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country
    ) {
      await this.setState({ page: 1 }); // Reset to the first page
      await this.fetchNews(); // Fetch news for the new category/country
    }
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.fetchNews);
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.fetchNews);
  };

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  render() {
    return (
      <div  className="bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 py-10 sm:py-10">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Latest News
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {this.state.loading && <Loader />}
            {!this.state.loading &&
              this.state.articles.map((element) => (
                <NewsItem
                  key={element.url}
                  url={element.url}
                  description={
                    element.description
                      ? element.description.slice(0, 67)
                      : " "
                  }
                  author={element.author ? element.author : "Unknown" }
                  title={
                    element.title ? element.title.slice(0, 67) : " Title Not Added"
                  }
                  urlToImage={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://dummyimage.com/1280x720/fff/aaa"
                  }
                  publishedAt={
                    element.publishedAt
                      ? this.formatDate(element.publishedAt)
                      : "Unknown Date"
                  }
                />
              ))}
          </div>
          <div className="mt-3 justify-end flex">
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <button
                disabled={this.state.page <= 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={this.handlePrevClick}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="size-5" />
              </button>

              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={this.handleNextClick}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="size-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
