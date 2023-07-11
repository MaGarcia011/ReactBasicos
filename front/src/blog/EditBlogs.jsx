import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:8000/blogs/";

export const EditBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}${id}`, { title: title, content: content });
    navigate("/");
  };

  useEffect(() => {
    const getBlogID = async () => {
      try {
        const res = await axios.get(`${URL}${id}`);
        console.log(res.data);
        setTitle(res.data.title );
        setContent(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogID();
  }, []);

  return (
    <div>
      <h3>Edit blogs</h3>
      <form onSubmit={update}>
        <div className="mb-3" style={{ width: 250 }}>
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};
