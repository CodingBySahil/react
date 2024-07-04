import React from "react";
import NewPost from "./NewPost"; // Assuming NewPost component is imported and defined properly

import logo1 from "../assets/images/channel.jpg";
import logo2 from "../assets/images/hollywoodChannel.jpg";
import logo3 from "../assets/images/channelThree.jpg"
import logo4 from "../assets/images/logo4.jpg"
import logo5 from "../assets/images/logo5.jpg"
import logo6 from "../assets/images/logo6.jpg"
import tomJerryImage from "../assets/images/tom&jerry.webp";
import whiteSnake from "../assets/images/whiteSnakeCartoon.webp";
import shortcutKeyboard from "../assets/images/keyboard.webp";
import awesomeCartoon from "../assets/images/cartoon2.webp";
import youngBoy from "../assets/images/youngBoy.webp";
import kinkKong from "../assets/images/kingKong.webp";
import opratingSystem from "../assets/images/opratingSystem.webp";
import panda from "../assets/images/pandaCartoon.webp";
import robotics from "../assets/images/robotics.webp";
import naat from "../assets/images/ye-donya-chode-hamne.webp";
import barmudaTriangle from "../assets/images/barmudaTriangle.webp"
import dontBeThisCoder from "../assets/images/donotBeThisCoder.webp"
import moodbooster from "../assets/images/moodBooster.webp"
import reactJs from "../assets/images/reactJs.webp"


const postsData = [
  {
    postImg: tomJerryImage,
    channelLogoIMG: logo1,
    postDescription: "New hilarious cartoon adventures of Tom and Jerry, classic fun guaranteed.",
    channelName: "Tom and Jerry Fan Channel"
  },
  {
    postImg: whiteSnake,
    channelLogoIMG: logo1,
    postDescription: "Exciting new cartoon with amazing visuals, a must-watch for cartoon enthusiasts.",
    channelName: "Cartoon Lovers"
  },
  {
    postImg: shortcutKeyboard,
    channelLogoIMG: logo1,
    postDescription: "Learn essential keyboard shortcuts to boost PC efficiency and productivity.",
    channelName: "Tech Tips"
  },
  {
    postImg: awesomeCartoon,
    channelLogoIMG: logo1,
    postDescription: "Discover a new cartoon release that promises entertainment and joy for all.",
    channelName: "Cartoon Central"
  },
  {
    postImg: youngBoy,
    channelLogoIMG: logo2,
    postDescription: "Follow a young boy's thrilling adventures in the bustling city environment.",
    channelName: "Adventure Seekers"
  },
  {
    postImg: kinkKong,
    channelLogoIMG: logo2,
    postDescription: "King Kong returns in a thrilling new adventure, action-packed and epic.",
    channelName: "Hollywood Movies"
  },
  {
    postImg: opratingSystem,
    channelLogoIMG: logo2,
    postDescription: "Explore the latest updates and features of modern operating systems.",
    channelName: "Tech Innovations"
  },
  {
    postImg: panda,
    channelLogoIMG: logo2,
    postDescription: "Adorable panda cartoon series for kids, full of fun and educational content.",
    channelName: "Animal World"
  },
  {
    postImg: robotics,
    channelLogoIMG: logo2,
    postDescription: "Exciting exploration into the future of robotics and AI technology advancements.",
    channelName: "Tech Explorations"
  },
  {
    postImg: naat,
    channelLogoIMG: logo2,
    postDescription: "Deep dive into spiritual enlightenment through beautiful Naat recitations and teachings.",
    channelName: "Spiritual Journeys"
  },
  {
    postImg: barmudaTriangle,
    channelLogoIMG: logo3,
    postDescription: "Unravel the mysteries of the Bermuda Triangle with captivating stories and theories.",
    channelName: "Mystery Explorers"
  },
  {
    postImg: dontBeThisCoder,
    channelLogoIMG: logo3,
    postDescription: "Avoid common mistakes and learn best practices for coding success.",
    channelName: "Coding Tips"
  },
  {
    postImg: moodbooster,
    channelLogoIMG: logo4,
    postDescription: "Uplift your spirits with heartwarming stories and inspirational moments.",
    channelName: "Positive Vibes"
  },
  {
    postImg: reactJs,
    channelLogoIMG: logo5,
    postDescription: "Master React.js with tutorials, tips, and advanced techniques.",
    channelName: "React.js Mastery"
  },
  {
    postImg: moodbooster,
    channelLogoIMG: logo6,
    postDescription: "Experience daily dose of positive energy and motivation to brighten your day.",
    channelName: "Daily Motivation"
  }
];


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
              {postsData.map((post, index) => (
                
                  <NewPost
                    key={index}
                    postImg={post.postImg}
                    channelLogoIMG={post.channelLogoIMG}
                    postDescription={post.postDescription}
                    channelName={post.channelName}
                  />
              ))}
              {postsData.map((post, index) => (
                
                  <NewPost
                    key={index}
                    postImg={post.postImg}
                    channelLogoIMG={post.channelLogoIMG}
                    postDescription={post.postDescription}
                    channelName={post.channelName}
                  />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RightSideVediosContent;
