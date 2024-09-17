import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./styles.css";

function StarRatings({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(rating)
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handelMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : " inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handelMouseLeave ()}
            size={60}
          />
        );
      })}
    </div>
  );
}
StarRatings.propTypes = {
  stars: PropTypes.number.isRequired,
}

export default StarRatings;
