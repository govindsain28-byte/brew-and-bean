import { Hero } from "@/components/sections/hero";
import { BestSellers } from "@/components/sections/best-sellers";
import { TodaysSpecial } from "@/components/sections/todays-special";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { OurProcess } from "@/components/sections/our-process";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { EventsPreview } from "@/components/sections/events-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQ } from "@/components/sections/faq";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <TodaysSpecial />
      <AboutPreview />
      <WhyChooseUs />
      <JourneyTimeline />
      <OurProcess />
      <GalleryPreview />
      <Testimonials />
      <InstagramFeed />
      <EventsPreview />
      <BlogPreview />
      <FAQ />
      <NewsletterCTA />
    </>
  );
}
