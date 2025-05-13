
import React from 'react';
import Header from "@/components/Header";
import Reference from "@/components/Reference";
import Footer from "@/components/Footer";

const ReferencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Reference />
      </div>
      <Footer />
    </div>
  );
};

export default ReferencePage;
