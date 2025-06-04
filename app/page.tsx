import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-img">
          <img src="/hero.jpg" alt="hero" />
        </div>
        <p>life is in Frames</p>
        <p>We capture the moments that matter</p>
      </section>
    </div>
  );
}
