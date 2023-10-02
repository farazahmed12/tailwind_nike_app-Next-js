import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10 ">Services</section>
      <section className="padding">Special Offer</section>
      <section className="padding bg-pale-blue ">Customer Review</section>
      <section className="padding-x sm:py-32 py-16  w-full">Subscribe</section>
      <section className="padding-x bg-black padding-t pb-8 ">Footer</section>
    </main>
  );
}
