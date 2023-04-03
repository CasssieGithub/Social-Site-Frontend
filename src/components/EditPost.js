import { useState } from "react";

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
          {/* <label htmlFor="userId">User Id:</label>
          <input
            type="text"
            name="userId"
            onChange={handleChange}
            value={editPost.userId}
          /> */}
          <br />
          <br />
          <label htmlFor="name">Date:</label>
          <input
            type="text"
            name="date"
            onChange={handleChange}
            value={editPost.date}
          />
          <br />
          <br />
          <label htmlFor="name">Text:</label>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            value={editPost.text}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </details>
    </>
  );
};

export default EditPost;
