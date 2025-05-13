import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">SECOM Blog</h1>
          <BlogPost />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage; 