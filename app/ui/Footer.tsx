import SectionInner from "./SectionInner";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <SectionInner>
      <div className="flex justify-between mt-20 mb-36 items-center">
        <div className="font-bold text-3xl text-hotPink">Sam Little</div>
        <SocialMedia />
      </div>
    </SectionInner>
  );
}
