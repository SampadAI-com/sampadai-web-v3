import { assets } from "./assets";

export default function BrandsSection() {
  return (
    <section className="section brands" aria-labelledby="brands-title">
      <div className="section-inner font-roboto">
        <h3 id="brands-title" className="brands-title">
          rewards from brands you love.
        </h3>
        <img className="brands-strip" src={assets.brandStrip} alt="Brand logos" />
      </div>
    </section>
  );
}
