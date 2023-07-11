import "./App.css";
import { CreateBlogs } from "./blog/CreateBlogs";
import { EditBlogs } from "./blog/EditBlogs";
import { ShowBlogs } from "./blog/ShowBlogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlogs />} />
          <Route path="/create" element={<CreateBlogs />} />
          <Route path="/edit/:id" element={<EditBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
