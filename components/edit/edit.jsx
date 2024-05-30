import React from "react";
import "./edit.css";
const Edit = () => {
  return (
    <div className="Main">
      <div className="section">
        <h2>Update Category</h2>
        <form>
          <label for="fname">Title</label>
          <input type="text" id="fname" name="fname" placeholder="math" />
        </form>
        <form>
          <label for="fname">Description</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Mathematics is the science and study of quality,structure,space,structure,space and change"
          />
        </form>
        <form>
          <label for="fname">Image Category</label>
          <input type="file" id="fimage" name="fname" />
        </form>
        <div className="logo">
          <img
            src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
            alt="Logo"
            height={80}
            width={80}
          />
        </div>
        <button className="edit-btn">Update Category</button>
      </div>
    </div>
  );
  gi;
};

export default Edit;
