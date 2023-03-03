

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
      <div className="proj-imgbx relative">
        <img src={imgUrl} alt="projectcard" className="w-full h-full object-cover " />
        <div className="proj-txtx absolute bottom-0 left-0 w-full p-4 text-white">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <span className="text-base">{description}</span>
        </div>
      </div>
    </div>
  )
}
