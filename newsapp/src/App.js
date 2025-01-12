
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsCategory from './components/NewsCategory';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';

function App() {
   const pageSize  = 9;
   const newsApi = process.env.REACT_APP_NEWS_API
  //  const newsApi = "f2e0e1513df2479f84074bd85e85a015";
   const [progress, setProgress] = useState(0);
  return (
    <>
    <BrowserRouter>
    <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar/>
    <NewsCategory/>
    <Routes>
    {/* <News pageSize={9} category='sports' country='us'/> */}
      <Route path="/" element={<News setProgress={setProgress} newsApi={newsApi}  pageSize={pageSize} category='General' country='us'/>} />
      <Route path="/business" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Business' country='us'/>} />
      <Route path="/entertainment" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Entertainment' country='us'/>} />
      <Route path="/health" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Health' country='us'/>} />
      <Route path="/science" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Science' country='us'/>} />
      <Route path="/sports" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Sports' country='us'/>} />
      <Route path="/technology" element={<News setProgress={setProgress} newsApi={newsApi} pageSize={pageSize} category='Technology' country='us'/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
