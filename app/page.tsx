import BentoGallery from "@/components/BentoGallery";
import Header from "@/components/Header";
import SpecialOffers from "@/components/SpecialOffers";
import TestimonialsAndStats from "@/components/TestimonialsAndStats";

export default function Home() {
  return (
    <>
      <Header />
      <BentoGallery />
      <SpecialOffers />
      <TestimonialsAndStats />
    </>
  );
}
