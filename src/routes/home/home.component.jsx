import { useState, useEffect } from "react";
import data from "../../Sample_Report.json";
import CardContainer from "../../components/card container/cardContainer.component";
import Navagation from "../../components/navagation/navagation.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  const [searchField, setSearchfield] = useState("");
  const [newses, setNewses] = useState(data.results);
  const [filteredNewses, setFilteredNewses] = useState(newses);
  const [location, setLocation] = useState("");


  //function to filter search from navagation
  useEffect(() => {
    setFilteredNewses(
      newses.filter((news) => news.title.toLowerCase().includes(searchField))
    );
  }, [searchField]);

  useEffect(() => {
    setFilteredNewses(
      newses.filter((news) => news.country[0].toLowerCase().includes(location))
    );
  }, [location]);

  // handeler for search change
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchfield(searchFieldString);
  };

  // handeler for location change
  const onLocationChange = (event) => {
    const searchedLocation = event.target.value.toLowerCase();
    setLocation(searchedLocation);
  };

  console.log(location);
  return (
    <div>
      <Navagation onChange={onSearchChange} />
      <CardContainer data={filteredNewses} onChange={[onSearchChange, onLocationChange]} />
      <Footer />
    </div>
  );
};

export default Home;
