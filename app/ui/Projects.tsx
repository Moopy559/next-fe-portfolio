import Carousel from "./Carousel";
import Project from "./Project";
import SectionInner from "./SectionInner";

export default function Projects() {
  return (
    <SectionInner>
      <div className="my-20">
        <h2>Projects</h2>
        <div>
          <Carousel>
            <Project
              codeSite="https://github.com/Moopy559/room-homepage"
              liveSite="https://moopy559.github.io/room-homepage/"
              title="Room Homepage"
              skills={["HTML", "CSS", "JS"]}
              image="/img/room-homepage.webp"
            >
              {" "}
              A modern responsive homepage utilising grid and flex layouts with
              an interactive slider that updates the text and image content. If
              viewed on a mobile device, the user is also presented with an
              interactive 'hamburger' icon that they can click to open up the
              menu overlay.
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/pricing-component-with-toggle-master"
              liveSite="https://moopy559.github.io/pricing-component-with-toggle-master/"
              title="Pricing Component"
              skills={["HTML", "CSS", "JS"]}
              image="/img/pricing-component.webp"
            >
              Dynamic pricing components that are controlled by a toggle switch.
              The switch updates the text content between 'monthly' and 'annual'
              pricing plans. Also features a responsive design that adjusts the
              layout based on screen size.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/weather-app"
              liveSite="https://moopy559.github.io/weather-app/"
              title="Weather App"
              skills={["HTML", "CSS", "JS", "API"]}
              image="/img/weather-app.webp"
            >
              A small weather app that draws from a Weather API to allow the
              user to search for weather conditions across different parts of
              the world.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/calculator-app-main"
              liveSite="https://moopy559.github.io/calculator-app-main/"
              title="Calculator App"
              skills={["HTML", "CSS", "JS"]}
              image="/img/calculator.webp"
            >
              A straightforward and mobile-responsive calculator built with
              vanilla javascript.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/work-portfolio"
              liveSite="https://moopy559.github.io/work-portfolio/miscart.html"
              title="Design & Misc Art Portfolio"
              skills={["HTML", "CSS", "JS"]}
              image="/img/art-gallery.webp"
            >
              This was the first version of my portfolio and also includes work
              that showcases my other skillsets (animation, 3D rendering, video
              production, graphic design). This site features both my
              professional work and also miscellaneous artwork and animations
              that I do for fun. It includes an image gallery that allows the
              user to click on an image to view it in a larger size as an
              overlay. I also intentionally coded the gallery so that I can add
              or remove images at any time or display them in any order and the
              logic driving the layout and interactions will still work.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/admin-dashboard"
              liveSite="https://moopy559.github.io/admin-dashboard/"
              title="Admin Dashboard"
              skills={["HTML", "CSS"]}
              image="/img/admin-dashboard.webp"
            >
              A simple admin dashboard to practice using a combination of grid
              and flex layouts.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/fem-interactive-rating-component"
              liveSite="https://moopy559.github.io/fem-interactive-rating-component/"
              title="Interactive Rating Component"
              skills={["HTML", "CSS", "JS"]}
              image="/img/interactive-rating.webp"
            >
              This component uses hover states and JS to allow the user to
              submit a rating. Upon submission, they are then presented with a
              second screen that confirms their rating.{" "}
            </Project>
            <Project
              codeSite="https://github.com/Moopy559/ecommerce-product-page-main"
              liveSite="https://moopy559.github.io/ecommerce-product-page-main/"
              title="E-Commerce Product Page"
              skills={["HTML", "CSS", "JS"]}
              image="/img/ecommerce-cart.webp"
            >
              A mobile e-commerce page for a shoe-brand. The user can select
              multiple quantities of the shoe product and place them in a cart.
              They can then also click on the shopping cart icon to view a
              summary of their cart or clear the items. The site also features
              an interactive overlay menu.{" "}
            </Project>
          </Carousel>
        </div>
      </div>
    </SectionInner>
  );
}
