import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReview from "./components/CustomerReview";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

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
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 ">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16  w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
}
