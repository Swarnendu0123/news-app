import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardContainer from "./components/card container/cardContainer.component";
import data from "./Sample_Report.json";
import Search from "./components/search/search.component";

function App() {
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
      <Search onChange={onSearchChange} />
      <CardContainer data={filteredNewses} onChange={onSearchChange} />
    </div>
  );
}

export default App;
