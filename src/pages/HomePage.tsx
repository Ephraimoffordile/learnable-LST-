import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BestsellerProducts from '../components/BestsellerProducts';
import ServiceSection from "../components/ServiceSection";
import BlogSection from "../components/BlogSection";
import TestimonialSection from '../components/TestimonialSection';
import PromoBanner from '../components/PromoBanner'; 
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
    
      {/* <h1>Home Page</h1> */}
     <Header/>
       <HeroSection />
       <BestsellerProducts />
       <ServiceSection />
       <BlogSection />
        <TestimonialSection />
        <PromoBanner />
        <Footer />
   
    </div>
  );
};

export default HomePage;
