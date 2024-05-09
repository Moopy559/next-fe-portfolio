import SectionInner from "./SectionInner";

export default function Welcome() {
  return (
    <SectionInner>
      <div className="mb-40">
        <h1>
          Nice to meet you!
          <br />
          I'm{" "}
          <span className="decoration-solid decoration-hotPink decoration-[0.4rem] underline">
            Sam Little
          </span>
          .
        </h1>
        <p className="max-w-[50%] mb-24">
          I'm a Brisbane based Web Developer and Designer passionate about
          building highly engaging, accessible and user-friendly web apps.
        </p>
        <a
          href="mailto:samueljlittle@gmail.com"
          className="font-bold text-xl border-b-4 border-hotPink"
        >
          Contact Me
        </a>
      </div>
    </SectionInner>
  );
}
