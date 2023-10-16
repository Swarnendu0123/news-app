import { useState, useEffect } from "react";
import data from "../../Sample_Report.json";
import CardContainer from "../../components/card container/cardContainer.component";
import Navagation from "../../components/navagation/navagation.component";
import Footer from "../../components/footer/footer.component";
import Trending from "../../components/trending/latestNews.component";

const Home = () => {
  const [searchField, setSearchfield] = useState("");
  const [newses, setNewses] = useState(data.results);
  const [filteredNewses, setFilteredNewses] = useState(newses);

  useEffect(() => {
    setFilteredNewses(
      newses.filter((news) => news.title.toLowerCase().includes(searchField))
    );
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchfield(searchFieldString);
  };

  console.log(searchField);
  return (
    <div>
      <Navagation onChange={onSearchChange} />
      <Trending/>
      <CardContainer data={filteredNewses} onChange={onSearchChange} />
      <Footer/>
    </div>
  );
};

export default Home;