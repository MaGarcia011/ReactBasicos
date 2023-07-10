
import "./App.css";
import { ShowBlogs } from "./blog/ShowBlogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
