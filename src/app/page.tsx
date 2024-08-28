import ArticleSection from "../components/sections/article-section";
import BlogSection from "../components/sections/blog-section";
import ContactSection from "../components/sections/contact-section";
import EmailInputForm from "../components/sections/email-input-form";
import Footer from "../components/sections/footer";
import HeroSection from "../components/sections/hero-section";
import ImageSection from "../components/sections/image-section";
import LinkSection from "../components/sections/link-section";

export default function Home() {
  return (
    <section className="flex w-full flex-row items-center justify-center pt-32">
      <div>
        <HeroSection />
        <LinkSection />
        <ArticleSection />
        <EmailInputForm />
        <BlogSection />
        <ImageSection />
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
}
