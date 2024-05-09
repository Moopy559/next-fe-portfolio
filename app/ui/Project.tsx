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
      <Image src={image} alt={title} width={610} height={5} />
      <h3>{title}</h3>
      <a href={liveSite}>View Live Site</a>
      <a href={codeSite}>View Code</a>
      <div className="flex gap-x-4">
        {skills.map((skill, index) => {
          return <p key={index}>{skill}</p>;
        })}
      </div>
      <p>{children}</p>
    </div>
  );
}
