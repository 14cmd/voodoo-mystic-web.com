import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Boutique from '@/components/Boutique';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Boutique />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
