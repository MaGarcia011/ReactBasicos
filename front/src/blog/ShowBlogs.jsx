import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export const ShowBlogs = () => {
  const URL = "http://localhost:8000/blogs/";
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(URL);
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlogs = async (id) => {
    try {
      axios.delete(`${URL}${id}`);
      getBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4" style={{height: 70}}>App by: carlos and mike</h1>
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mb-3">
            <i className="fa-solid fa-plus"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>
                    <div className="d-flex" style={{ gap: 15 }}>
                      <Link to={`/edit/${item.id}`} className="btn btn-info">
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteBlogs(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
