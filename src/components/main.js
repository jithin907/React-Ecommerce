import React, { useState, useEffect } from "react";

const Home = () => {
  // Array of images
  const images = [
    "/assets/images/image01.jpg",
    "/assets/images/2.jpg",
    "/assets/images/1.jpg"
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change image at intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={`${process.env.PUBLIC_URL}${images[currentImageIndex]}`}
            alt="Slideshow"
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
