import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NewsSection from "@/components/NewsSection";
import Examples from "@/components/Examples";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Examples />
      {/* <BlogPreview /> */}
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
