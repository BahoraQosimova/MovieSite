import React, { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../../components/Slider/Slider";
import Upcoming from "../../components/UpComing/UpComing";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TopRated } from "../../components";

const accordingData = [
  {
    according_text: "Something",
    accordian_answer: "Lorem ipsum dolor sit amet...",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleclick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <>
      <Slider />
      <TopRated />
      <Upcoming />
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
    </>
  );
};

export default HomePage;
