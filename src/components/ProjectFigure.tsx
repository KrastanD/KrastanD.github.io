import { Tech, TechData } from "../utils/techs";

type ProjectFigureProps = {
  image: string;
  title: string;
  description: string;
  techs: Tech[];
  link?: string;
};

function ProjectFigure({
  image,
  title,
  description,
  techs,
  link,
}: ProjectFigureProps) {
  const InnerCard = () => (
    <div className="flex flex-col justify-between">
      <>
        <h3 className="font-semibold mb-2">{title}</h3>
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="object-cover object-top w-full h-64 border-gray-100 border-2 rounded"
        />
      </>
      <p className="mt-6">{description}</p>
      <div className="flex flex-row flex-wrap">
        {techs.map((tech) => {
          const techData = TechData[tech];
          return (
            <p
              className={`pl-2 pr-2 ${techData.bgColor} ${techData.textColor} font-semibold  rounded-2xl m-1 ml-0 mr-2 text-sm`}
            >
              {techData.name}
            </p>
          );
        })}
      </div>
    </div>
  );

  const Card = () => {
    if (link) {
      return (
        <a href={link} target="_blank" className="flex" rel="noreferrer">
          <InnerCard />
        </a>
      );
    }
    return <InnerCard />;
  };

  return (
    <div className="p-4 bg-white m-3 rounded">
      <Card />
    </div>
  );
}

export default ProjectFigure;
