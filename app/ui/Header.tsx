import SectionInner from "./SectionInner";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <SectionInner>
      <div className="my-16">
        <SocialMedia />
      </div>
    </SectionInner>
  );
}
