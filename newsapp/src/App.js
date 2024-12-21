
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsCategory from './components/NewsCategory';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <NewsCategory/>
    <Routes>
    {/* <News pageSize={9} category='sports' country='us'/> */}
      <Route path="/" element={<News pageSize={9} category='General' country='us'/>} />
      <Route path="/business" element={<News pageSize={9} category='Business' country='us'/>} />
      <Route path="/entertainment" element={<News pageSize={9} category='Entertainment' country='us'/>} />
      <Route path="/health" element={<News pageSize={9} category='Health' country='us'/>} />
      <Route path="/science" element={<News pageSize={9} category='Science' country='us'/>} />
      <Route path="/sports" element={<News pageSize={9} category='sports' country='us'/>} />
      <Route path="/technology" element={<News pageSize={9} category='Technology' country='us'/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
