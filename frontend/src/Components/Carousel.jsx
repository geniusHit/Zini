import React, { useRef, useEffect } from 'react';
import img1 from "../assets/Pictures/30001._CB542120021_.jpg";
import img2 from "../assets/Pictures/929712._CB542298789_.png";
import img3 from "../assets/Pictures/Boult_3000x1200-PC._CB543542644_.jpg";
import img4 from "../assets/Pictures/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg";
import img5 from "../assets/Pictures/Hero_PC_3000x1200._CB541107158_.jpg";
import img6 from "../assets/Pictures/Nov_New_3000x1200._CB542180708_.jpg";
import img7 from "../assets/Pictures/PC_Hero_2x-toys_1._CB582765723_.jpg";
import img8 from "../assets/Pictures/pc_WE._CB541919667_.jpg";

const Carousel = () => {
  const left = useRef();
  const right = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (left.current && !left.current.contains(event.target)) {
        left.current.classList.remove('active-border');
      }
      if (right.current && !right.current.contains(event.target)) {
        right.current.classList.remove('active-border');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const addBorder = (ref) => {
    left.current?.classList.remove('active-border');
    right.current?.classList.remove('active-border');
    ref.current?.classList.add('active-border');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = document.querySelector('.carousel-control-next');
      if (nextButton) {
        nextButton.click(); // Simulates a click to move the carousel to the next slide
      }
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ minWidth: "1350px", height: "281px" }}>
      <div id="carouselExample" className="carousel slide" style={{ width: "100%" }}>
        <div className="carousel-inner" style={{ width: "100%", margin: "auto" }}>
          <div className="carousel-item active">
            <img src={img1} className="d-block" style={{ width: "100%" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block" alt="..." style={{ width: "100%" }} />
          </div>
        </div>

        <button
          className="carousel-control-prev carousel-btn rounded-1"
          ref={left}
          onClick={() => addBorder(left)}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next carousel-btn rounded-1"
          ref={right}
          onClick={() => addBorder(right)}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;