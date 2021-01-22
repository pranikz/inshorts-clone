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


  const newsApi = async() => {
    try {

      const news = await axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div className="App">
    <NavInshorts setcategory={setCategory}/>
    <NewsContent/>
    <Footer/>
    </div>
  );
}

export default App;
