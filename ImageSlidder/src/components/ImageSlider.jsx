import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./styles.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(
    async function fetchImages(getUrl) {
      try {
        setLoading(true);
        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (error) {
        setErrorMsg(error.message);
        setLoading(false);
      }
    },
    [limit, page]
  );

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, fetchImages]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  console.log(images);

  if (loading) {
    return <div>Please wait, Data is Loading.....</div>;
  }

  if (errorMsg) {
    return <div>Error occurred failed to load data, {errorMsg}</div>;
  }

  return (
    <div className="container">
      <FaArrowLeft className="arrow arrow-left" onClick={handlePrevious} />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <FaArrowRight className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indictor"
                }
              onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default ImageSlider;
