import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../../components/Slider/Slider";
import TopRated from "../../components/TopRated/TopRated";
import Upcoming from "../../components/UpComing/UpComing";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const accordingData = [
  {
    according_text: "Something",
    accordian_answer: "Lorem ipsum dolor sit amet...",
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleclick = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <>
      <div className="accordian_container">
        {accordingData.map((item, idx) => (
          <div
            className="accordian_box"
            key={idx}
            onClick={() => handleclick(idx)}
          >
            <div className="accordian_title">
              <h1>{item?.according_text}</h1>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            {activeIndex === idx && (
              <div className="accordian_answer">
                <p>{item?.accordian_answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Slider />
      <TopRated />
      <Upcoming />
    </>
  );
};

export default HomePage;
