import React from "react";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Front-End Developer", "Web Designer", "Fresher" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
    return (
    
    <>
      <section className="banner" id="home">
        <div>
          <div className={`row align-items-center`}></div>
          <div className={`col flex `}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline absolute top-44 left-10  cursor-progress">Welcome to my Portfolio</span>
                  <br/>
                  <h1>
                    {`Hi! I'm Rashid.`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-End Developer", "Web Designer", "Fresher" ]'
                    >
                      <span className="wrap">I am a <span className="wrap-head">{text}</span> </span>
                    </span>
                  </h1>
                  <p>
                    <br></br>
                  As a web developer and designer, my objective is to combine my technical and creative skills to build visually stunning and highly functional websites that exceed client expectations.
                    <br/>
                    <br/>
                  Design is not just what it looks like and feels like. Design is how it works.

                  </p>
                  <div className={`flex  px-8 cursor-pointer`}>

                  <button onClick={() => console.log("connect")} className="animate-pulse">
                    <span className="text-sky-300">Let’s</span>&nbsp; <span className="text-teal-300">Connect</span>
                  </button> 
                  <Link to="/social">

                  <img src="images/connect.png" alt="" className={`button-connect ease-in-out duration-300 transform hover:translate-x-4`} />
                  </Link>
                  </div>
                </div>
              )}
            </TrackVisibility>

            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`isVisible ? "animate__animated animate__zoomIn" : "" relative bottom-32 right-20`}>
                  <img src="images/rashid.png" alt="Header Img" className={`rashid`}/>
                  <img src="images/hire.jpg" alt="" className={` hire relative bottom-64 left-2 animate-bounce`}/>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
