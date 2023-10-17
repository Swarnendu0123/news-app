import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../Sample_Report.json";
import Navagation from "../../components/navagation/navagation.component";
import CardContainer from "../../components/card container/cardContainer.component";
import Footer from "../../components/footer/footer.component";

const News = () => {
  let { id } = useParams();
  const [newses, setNewses] = useState(data.results);
  const news = data.results[id];
  const [searchField, setSearchfield] = useState("");
  const [filteredNewses, setFilteredNewses] = useState(newses);
  const [location, setLocation] = useState("");

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


  return (
    <section>
      <Navagation onChange={onSearchChange} />
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold sm:text-4xl">{news.title}</h2>
        </div>

        <div class="max-w-3xl ">
          <h2 class="text-3md sm:text-1md">{news.creator}</h2>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Party"
              src={news.image_url}
              class="absolute inset-0  w-full object-cover "
            />
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-gray-600">
              <p>{news.description}</p>
              <p>{news.content}</p>
              <p>{news.full_description}</p>
            </article>
          </div>
        </div>
      </div>
      <h1 class="text-center text-xl font-bold text-gray-900 sm:text-3xl">
        Read More 
      </h1>
      <CardContainer data={filteredNewses} onChange={[onSearchChange, onLocationChange]} />
      <Footer/>
    </section>
  );
};

export default News;
