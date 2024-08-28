import CallToAction from "../../../components/call-to-action";
import EmblaCarousel from "../../../components/guide-carousel";
import CategoriesComponent from "../../../components/guides/categories-component";
import GuidesListing from "../../../components/guides/guide-listings";
import PopularPosts from "../../../components/guides/popular-guides";

const ProviderGuides = () => {
  return (
    <section className="flex w-full flex-row items-center justify-center pt-32">
      <div>
        <h1 className="text-3xl font-bold">Wellness Provider Guides</h1>
        <EmblaCarousel />
        <CallToAction />
        <div className="container mx-auto flex px-4 py-8">
          <GuidesListing />
          <div className="ml-8 w-1/3">
            <PopularPosts />
            <CategoriesComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderGuides;
