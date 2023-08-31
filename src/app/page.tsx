import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">hero</section>
      <section className="padding">Popular Products</section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10 ">Services</section>
      <section className="padding">Special Offer</section>
      <section className="padding bg-pale-blue ">Customer Review</section>
      <section className="padding-x sm:py-32 py-16  w-full">Subscribe</section>
      <section className="padding-x bg-black padding-t pb-8 ">Footer</section>
    </main>
  );
}
