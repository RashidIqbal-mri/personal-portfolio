import React, { useState, useEffect, useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/color-sharp.png";
import Counter from "./Counter";


const Skills = () => {
  const [shouldLoadImages, setShouldLoadImages] = useState(false);
  const skillCarouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
  
      setShouldLoadImages(entry.isIntersecting);
 
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.25,
    });
    observer.observe(skillCarouselRef.current);

    return () => {
      if (skillCarouselRef.current) {
        observer.unobserve(skillCarouselRef.current);
      }
    };
  }, []);
  useEffect(()=>{
    console.log(shouldLoadImages)
  },[shouldLoadImages])

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="">
            <div className="skill-bx">
              <h2 className="text-4xl font-bold">Skills</h2>
              <p className="mt-4 text-lg">
                Skills are not just acquired, they are improved through
                practice, persistence, and a willingness to learn. <br />
                They are the keys that unlock doors to success, and the
                foundation upon which greatness is built.
              </p>

              <div className="w-[80vw]">
                <div ref={skillCarouselRef}>
                  {shouldLoadImages && (
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <Counter color="red" percent="95" skill="html" />
                      <Counter color="green" percent="90" skill="css" />
                      <Counter color="cyan" percent="95" skill="Tailwind" />
                      <Counter color="magenta" percent="75" skill="js" />
                      <Counter color="orange" percent="70" skill="react js" />
                      <Counter color="slateblue" percent="60" skill="node js" />
                      <Counter
                        color="turquoise"
                        percent="60"
                        skill="express js"
                      />
                      <Counter color="olive" percent="70" skill="mongodb" />
                      <Counter color="tomato" percent="80" skill="git" />
                      <Counter color="yellow" percent="90" skill="photoshop" />
                    </Carousel>
                  )}
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <img
         

          className="background-image-left"
          src={colorSharp}
          alt="skill"
        />
      </section>
    </>
  );
};

export default Skills;
