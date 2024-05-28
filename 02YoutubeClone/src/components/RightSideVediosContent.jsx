import React from "react";
import logo1 from "../assets/images/channel.jpg";
import tomJerryImage from "../assets/images/tom&jerry.webp";
import logo2 from "../assets/images/hollywoodChannel.jpg";
import whiteSnake from "../assets/images/whiteSnakeCartoon.webp";
import shortcutKeyboard from "../assets/images/keyboard.webp";
import youngBoy from '../assets/images/youngBoy.webp'
import awesomeCartoon from '../assets/images/cartoon2.webp'
import kinkKong from '../assets/images/kingKong.webp'
import opratingSystem from '../assets/images/opratingSystem.webp'
import panda from '../assets/images/pandaCartoon.webp'
import robotics from '../assets/images/robotics.webp'
import naat from '../assets/images/ye-donya-chode-hamne.webp'

const RightSideVediosContent = () => {
  return (
    <>
      <div
        className="col-9 position-relative"
        style={{ top: "40%", left: "20%" }}
      >
        <div
          className="row position-fixed"
          style={{ top: "3em", left: "21%", zIndex: 9 }}
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
                      src={tomJerryImage}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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
                      src={whiteSnake}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo2}
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
                      src={shortcutKeyboard}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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

              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={youngBoy}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Young Boy was chosen by an Ancient Stone which have
                        ability to Create a God || Martial
                      </h6>
                      <p className="channel-name">Channel Name</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- another post --> */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={awesomeCartoon}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Watch this awesome cartoon with us | very cool story |
                        most viral 2024
                      </h6>
                      <p className="channel-name">Funny Cartoon</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- another post --> */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs Godzilla 2024 | Hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={opratingSystem}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Operating system Very clear concepts | 300+ views |
                        study with me
                      </h6>
                      <p className="channel-name">Study here</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={panda}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Panda in new outfits | Hindi dubbed full cartoon | most
                        viral
                      </h6>
                      <p className="channel-name">Cartoon Cycle</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={robotics}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Robotics of the year | new technology of the world |
                        make it easy
                      </h6>
                      <p className="channel-name">Tech watch</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={naat}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Ye donya chode de ham ne | urdu naat | 2024 naat | most
                        viral
                      </h6>
                      <p className="channel-name">Islamic Steps</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs Godzilla 2024 | Hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={tomJerryImage}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={youngBoy}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Young Boy was chosen by an Ancient Stone which have
                        ability to Create a God || Martial
                      </h6>
                      <p className="channel-name">Channel Name</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={awesomeCartoon}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Watch this awesome cartoon with us | very cool story |
                        most viral 2024
                      </h6>
                      <p className="channel-name">Funny Cartoon</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs Godzilla 2024 | Hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={opratingSystem}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Operating system Very clear concepts | 300+ views |
                        study with me
                      </h6>
                      <p className="channel-name">Study here</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={panda}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Panda in new outfits | Hindi dubbed full cartoon | most
                        viral
                      </h6>
                      <p className="channel-name">Cartoon Cycle</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={robotics}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Robotics of the year | new technology of the world |
                        make it easy
                      </h6>
                      <p className="channel-name">Tech watch</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={naat}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Ye donya chode de ham ne | urdu naat | 2024 naat | most
                        viral
                      </h6>
                      <p className="channel-name">Islamic Steps</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs Godzilla 2024 | Hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={tomJerryImage}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={youngBoy}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Young Boy was chosen by an Ancient Stone which have
                        ability to Create a God || Martial
                      </h6>
                      <p className="channel-name">Channel Name</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={awesomeCartoon}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Watch this awesome cartoon with us | very cool story |
                        most viral 2024
                      </h6>
                      <p className="channel-name">Funny Cartoon</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs Godzilla 2024 | Hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={opratingSystem}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Oprating system Very clear concepts | 300+ views | stydy
                        with me
                      </h6>
                      <p className="channel-name">Study here</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={panda}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Panda in new outfits | hindi dubbed full cartoon | most
                        viral
                      </h6>
                      <p className="channel-name">Cartoon Cycle</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={robotics}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Robotics of the year | new technology of the world |
                        make it easy
                      </h6>
                      <p className="channel-name">Tech watch</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={naat}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Ye donya chode de ham ne | urdu naat | 2024 naat | most
                        viral
                      </h6>
                      <p className="channel-name">Islamic Steps</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs godzila 2024 | hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={tomJerryImage}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={youngBoy}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Young Boy was chosen by an Ancient Stone which have
                        ability to Create a God || Martial
                      </h6>
                      <p className="channel-name">Channel Name</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={awesomeCartoon}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Wathc this awesome cartoon with us | very cool story |
                        most viral 2024
                      </h6>
                      <p className="channel-name">Funny Cartoon</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs godzila 2024 | hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={opratingSystem}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Oprating system Very clear concepts | 300+ views | stydy
                        with me
                      </h6>
                      <p className="channel-name">Study here</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={panda}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Panda in new outfits | hindi dubbed full cartoon | most
                        viral
                      </h6>
                      <p className="channel-name">Cartoon Cycle</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={robotics}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Robotics of the year | new technology of the world |
                        make it easy
                      </h6>
                      <p className="channel-name">Tech watch</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={naat}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        Ye donya chode de ham ne | urdu naat | 2024 naat | most
                        viral
                      </h6>
                      <p className="channel-name">Islamic Steps</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={kinkKong}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
                        className="img-fluid"
                        alt="channel logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </span>
                    <span>
                      <h6 className="description d-inline-block">
                        King kong vs godzila 2024 | hindi dubbed full movie |
                        viral 2024
                      </h6>
                      <p className="channel-name">Monster Mov</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* another post */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="y-post d-flex flex-column">
                  <div className="post-img">
                    <img
                      className="img-fluid rounded-3"
                      src={tomJerryImage}
                      alt="post img"
                    />
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <span>
                      <img
                        src={logo1}
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RightSideVediosContent;
