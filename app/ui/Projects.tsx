import Carousel from "./Carousel";
import Project from "./Project";
import SectionInner from "./SectionInner";

export default function Projects() {
  return (
    <SectionInner>
      <h2>Projects</h2>
      <div>
        <Carousel>
          <Project>
            {" "}
            A modern responsive homepage utilising grid and flex layouts with an
            interactive slider that updates the text and image content. If
            viewed on a mobile device, the user is also presented with an
            interactive 'hamburger' icon that they can click to open up the menu
            overlay.
          </Project>
          <div>
            <div>image</div>
            <h3>Project title</h3>
            <a href="">View Live Site</a>
            <a href="">View Code</a>
            <div className="flex gap-x-4">
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
            </div>
            <p>
              A modern responsive homepage utilising grid and flex layouts with
              an interactive slider that updates the text and image content. If
              viewed on a mobile device, the user is also presented with an
              interactive 'hamburger' icon that they can click to open up the
              menu overlay.
            </p>
          </div>
          <div>goodbye</div>
          <div>goodbye1</div>
          <div>goodbye2</div>
          <div>goodbye3</div>
          <div>goodbye4</div>
          <div>goodbye5</div>
        </Carousel>
      </div>
    </SectionInner>
  );
}
