# Home Component Documentation

The `Home` component is a crucial part of the **news-app** project, responsible for rendering the home page of the application. This page displays a list of news articles and provides search functionality for users to find specific articles based on their search queries.

## Table of Contents
- [Overview](#overview)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [State Variables](#state-variables)
- [Effect Hook](#effect-hook)
- [Functions](#functions)
- [Components Rendered](#components-rendered)
- [Important Note](#important-note)

## Overview

The `Home` component imports a JSON dataset containing news articles (`Sample_Report.json`) and renders a dynamic list of articles based on user search input. It consists of a search bar where users can input their queries, and the list of articles is updated in real-time as the user types.

## Dependencies

- **React**: The component is built using React, a JavaScript library for building user interfaces.
- **useState**: A React hook that enables state management within functional components.
- **useEffect**: A React hook used for performing side effects in functional components, in this case, filtering the news articles based on user input.
- **Sample_Report.json**: A JSON dataset containing news articles.

## Usage

```jsx
import React, { useState, useEffect } from "react";
import data from "../../Sample_Report.json";
import CardContainer from "../../components/cardcontainer/cardContainer.component";
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  // State variables
  const [searchField, setSearchField] = useState("");
  const [newses, setNewses] = useState(data.results);
  const [filteredNewses, setFilteredNewses] = useState(newses);

  // Effect Hook to filter news articles based on search input
  useEffect(() => {
    setFilteredNewses(
      newses.filter((news) => news.title.toLowerCase().includes(searchField))
    );
  }, [searchField]);

  // Function to handle search input change
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      {/* Navigation component with search input */}
      <Navigation onChange={onSearchChange} />
      
      {/* CardContainer component displaying filtered news articles */}
      <CardContainer data={filteredNewses} onChange={onSearchChange} />
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
```

## State Variables

- **`searchField`**: Manages the user's search query.
- **`newses`**: Contains the initial list of news articles fetched from `Sample_Report.json`.
- **`filteredNewses`**: Holds the filtered list of news articles based on the user's search query.

## Effect Hook

The `useEffect` hook filters the list of news articles (`newses`) whenever the `searchField` state changes. This ensures that the displayed articles dynamically update as the user types in the search input.

## Functions

- **`onSearchChange(event)`**: Handles the change event of the search input field and updates the `searchField` state.

## Components Rendered

- **`<Navigation />`**: Renders the navigation component, including the search input field.
- **`<CardContainer />`**: Renders the filtered news articles as individual cards.
- **`<Footer />`**: Renders the footer component of the application.

## Important Note

- **Data Source**: Ensure that the `Sample_Report.json` file contains valid and appropriate data. If your application fetches data from an API, update the data fetching logic accordingly.
