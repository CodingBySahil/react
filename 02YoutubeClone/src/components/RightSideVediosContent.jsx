import React from "react";

const RightSideVediosContent = () => {
  return (
    <>
      <div
        className="col-9 position-relative"
        style={{ top: "40% !important", left: "20% !important" }}
      >
        <div
          className="row position-fixed"
          style={{ top: "3em !important", left: "21% !important", zIndex: 9 }}
        >
          <div className="col-12" id="trending">
            <button type="button" className="btn btn-sm">
              All
            </button>
            <button type="button" className="btn btn-sm">
              Music
            </button>
            <button type="button" className="btn btn-sm">
              HD video
            </button>
            <button type="button" className="btn btn-sm">
              Gaming
            </button>
            <button type="button" className="btn btn-sm">
              Cartoon
            </button>
            <button type="button" className="btn btn-sm">
              Funny
            </button>
            <button type="button" className="btn btn-sm">
              Sahil
            </button>
            <button type="button" className="btn btn-sm">
              Pakistan
            </button>
            <button type="button" className="btn btn-sm">
              Movie
            </button>
            <button type="button" className="btn btn-sm">
              Gaming
            </button>
            <button type="button" className="btn btn-sm">
              &gt;
            </button>
          </div>
        </div>

        <section className="row">
          <div className="col-12">
            <div className="row blank-row"></div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src="../assets/images/tom&jerry.webp"
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src="../assets/images/channel.jpg"
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Tom and Jerry funny cartoon | beautiful scenes and many
                        more
                      </h6>
                      <p className="channel-name">Channel Name</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src="../assets/images/whiteSnakeCartoon.webp"
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src="../assets/images/hollywoodChannel.jpg"
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        WHITE SNAKE HOLLYWOOD NEW 2024 HINDI DUBBED WHITE
                      </h6>
                      <p className="channel-name">Hollywood Hindi</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src="../assets/images/keyboard.webp"
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src="../assets/images/channel.jpg"
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Make life easy with using Shortcuts | computer knowledge
                        | use Keyboard
                      </h6>
                      <p className="channel-name">Shortcuts easy</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RightSideVediosContent;
