
import React from 'react';
import Header from "@/components/Header";
import Convention from "@/components/Convention";
import Footer from "@/components/Footer";

const ConventionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Convention />
      </div>
      <Footer />
    </div>
  );
};

export default ConventionPage;
