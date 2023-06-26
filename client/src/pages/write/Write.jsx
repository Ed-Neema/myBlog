import React from "react";
import "./write.css";
const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeContainer">
          <div>
            {/* image and title input fields */}
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true} //whenever the page loads, it automatically comes into focus
                name=""
                id=""
              />
            </div>
            {/* body input */}
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                // autoFocus={true}
              />
            </div>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
