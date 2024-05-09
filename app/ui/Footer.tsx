import SectionInner from "./SectionInner";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <SectionInner>
      <div className="flex justify-between">
        <div>Sam Little</div>
        <SocialMedia />
      </div>
    </SectionInner>
  );
}
