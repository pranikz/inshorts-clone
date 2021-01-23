import './App.css';
import NavInshorts from './components/NavInshorts';
import { useEffect, useState  } from "react";
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apikey from './data/config';

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);


  const newsApi = async() => {

    try {

      const news = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
      // const proxyUrl="https://cors-anywhere.herokuapp.com/";
      // const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
    <NavInshorts setcategory={setCategory}/>
    <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults}/>
    <Footer/>
    </div>
  );
}

export default App;
