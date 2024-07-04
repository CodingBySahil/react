import React from "react";

const NewPost = ({ postImg, channelLogoIMG, postDescription, channelName }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="y-post d-flex flex-column">
        <div className="post-img">
          <img className="img-fluid rounded-3" src={postImg} alt="post img" />
        </div>
        <div className="d-flex gap-2 mt-3">
          <span>
            <img
              src={channelLogoIMG}
              className="img-fluid"
              alt="channel logo"
              style={{ borderRadius: "50%" }}
            />
          </span>
          <span>
            <h6 className="description d-inline-block">{postDescription}</h6>
            <p className="channel-name">{channelName}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
