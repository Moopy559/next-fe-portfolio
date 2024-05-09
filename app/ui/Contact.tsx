import SectionInner from "./SectionInner";

export default function Contact() {
  return (
    <SectionInner>
      <div className="my-20">
        <h2>Contact</h2>
        <p className="mb-16">
          Need a hand on your next project? I'd love to hear about it!
        </p>
        <div className="mb-36">
          <a
            href="mailto:samueljlittle@gmail.com"
            className="border-b-2 border-hotPink font-bold text-xl"
          >
            Let's Chat!
          </a>
        </div>
      </div>
    </SectionInner>
  );
}
