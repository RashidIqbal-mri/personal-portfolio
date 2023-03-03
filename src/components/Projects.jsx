import { Tab } from "@headlessui/react";

import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import { projects ,projects2,projects3} from "./ProjectData";

const Projects = () => {
  

  return (
    <>
      <section className="project" >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-12/12 px-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2 className="text-4xl font-bold mb-4 text-center">
                      Projects
                    </h2>
                    <p className="text-lg text-center mb-16">Projects are the tangible proof of our capabilities, they showcase our skills and demonstrate our commitment to excellence </p>

                    <Tab.Group >
                      <div id="projects" className="mb-5 " >
                        <Tab.List className="flex justify-center mb-5 nav-pills" id="pills-tab">
                          <Tab
                            className="nav-item px-4 py-2 bg-gray-200 rounded-l-md cursor-pointer"
                            eventKey="first" 
                          >
                            Front End 
                          </Tab>
                          <Tab
                            className="nav-item px-4 py-2 bg-gray-200 cursor-pointer"
                            eventKey="second" 
                          >
                            Graphics
                          </Tab>
                          <Tab
                            className="nav-item px-4 py-2 bg-gray-200 rounded-r-md cursor-pointer"
                            eventKey="third" 
                          >
                            Back End
                          </Tab>
                        </Tab.List>
                      </div>
                      <Tab.Panels className="p-4  rounded-md">
                        <Tab.Panel eventKey="first">
                          <div className=" flex flex-wrap">
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </div>
                        </Tab.Panel>
                        <Tab.Panel eventKey="second">
                          <div className=" flex flex-wrap">
                            {projects2.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </div>
                        </Tab.Panel>
                        <Tab.Panel eventKey="third">
                        <div className=" flex flex-wrap">
                            {projects3.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
        <img
          className="color-sharp2 "
          src={colorSharp2}
          alt="Background"
        ></img>
      </section>
    </>
  );
};

export default Projects;
