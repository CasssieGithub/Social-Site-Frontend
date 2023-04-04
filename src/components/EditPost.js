import { useState } from "react";
import "./EditPost.css";

const EditPost = (props) => {
  const [editPost, setEditPost] = useState({ ...props.post });

  const handleChange = (event) => {
    setEditPost({ ...editPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEditPost(editPost);
  };

  return (
    <>
      <details>
        <summary>Edit Post</summary>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <label className="dateOnEditPostJs" htmlFor="name">
            Date:
          </label>
          <input
            type="text"
            name="date"
            onChange={handleChange}
            value={editPost.date}
          />
          <br />
          <br />
          <label className="postOnEditPostJs" htmlFor="name">
            Post:
          </label>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            value={editPost.text}
          />
          <br />
          <br />
          <button className="submitBtnOnEditPostJs">Submit</button>
        </form>
      </details>
    </>
  );
};

export default EditPost;
