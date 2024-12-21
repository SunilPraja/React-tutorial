import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {author, title, description, url , urlToImage , publishedAt} = this.props;
    return (
      <article className="flex max-w-xl flex-col items-start justify-between">
        <img className="size-100 mb-2 rounded" src={urlToImage} alt="" />
        <div className="flex items-center gap-x-4 text-xs">
          <time className="text-gray-500"> Published At {publishedAt}
          </time>
          
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href={url} target="_blank" rel="noopener noreferrer"  >
              
              <span className="absolute inset-0" />
              {title}...
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{description}...</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
        <img alt="" src='https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633248_1280.png' className="size-5 rounded-full bg-gray-50" />
          <div className="text-sm/6">
            <p className="font-semibold text-gray-900">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0" />
                {author}
              </a>
            </p>
          {/* <p className=" line-clamp-3 text-sm/6 text-gray-600">{publishedAt}</p> */}
          </div>
        </div>
      </article>
    )
  }
}

export default NewsItem
