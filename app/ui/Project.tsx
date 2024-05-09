import Image from "next/image";

interface ProjectProps {
  image: string;
  skills: Array<string>;
  children: React.ReactNode;
  title: string;
  liveSite: string;
  codeSite: string;
}

export default function Project({
  image,
  skills,
  children,
  title,
  liveSite,
  codeSite,
}: ProjectProps) {
  return (
    <div>
      <a href={liveSite} target="_blank">
        <Image
          src={image}
          alt={title}
          width={800}
          height={5}
          className="rounded-md"
        />
      </a>
      <h3 className="mt-4">{title}</h3>
      <div className="font-bold flex gap-x-4 text-lg mb-2">
        <a href={liveSite} className="border-b-2 border-hotPink ">
          View Live Site
        </a>
        <a href={codeSite} className="border-b-2 border-hotPink">
          View Code
        </a>
      </div>
      <div className="flex gap-x-4 mb-4">
        {skills.map((skill, index) => {
          return <p key={index}>{skill}</p>;
        })}
      </div>
      <p>{children}</p>
    </div>
  );
}
