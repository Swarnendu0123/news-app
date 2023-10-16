import Home from "./routes/home/home.component";
import Landing from "./routes/landing page/landing.component";
import News from "./routes/news/news.component";
import { Route, Routes  } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news/:id" element={<News />} />
    </Routes>
  );
}

export default App;
