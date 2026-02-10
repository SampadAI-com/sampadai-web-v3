import { assets } from "./assets";

export default function ImageBreakSection() {
  return (
    <section className="section image-break" aria-hidden="true">
      <img src={assets.imageBreak} alt="" />
    </section>
  );
}
