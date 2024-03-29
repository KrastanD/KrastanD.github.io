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
    <div className="flex flex-col justify-between text-darkGunmetal-200">
      <div>
        <h3 className="font-semibold mb-2 text-center text-xl">{title}</h3>
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className={`object-cover object-top w-full h-64 border-darkGunmetal-700 ${
            link && "border-2 rounded hover:scale-105 ease-in-out duration-200"
          }`}
        />
        <p className="my-2">{description}</p>
      </div>
      <div>
        <div className="flex flex-row flex-wrap align-bottom">
          {techs.map((tech) => {
            const techData = TechData[tech];
            return (
              <p
                key={techData.name}
                className={`pl-2 pr-2 ${techData.bgColor} ${techData.textColor} font-semibold  rounded-2xl m-1 ml-0 mr-2 text-sm`}
              >
                {techData.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );

  const Card = () => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          className="flex h-full"
          rel="noreferrer"
          tabIndex={0}
        >
          <InnerCard />
        </a>
      );
    }
    return <InnerCard />;
  };

  return (
    <div className="w-80 p-4 bg-darkGunmetal-700 m-3 rounded">
      <Card />
    </div>
  );
}

export default ProjectFigure;
