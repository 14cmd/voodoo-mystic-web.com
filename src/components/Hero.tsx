import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-voodoo-empire.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Autel vaudou mystique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Presentation Name */}
          <div className="mb-6">
            <h2 className="font-cinzel text-2xl md:text-3xl text-ancient-gold font-bold tracking-wide">
              MAJESTÉ KOFFI TÔ-NON
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-ancient-gold to-transparent mx-auto mt-2"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-mystical bg-gradient-to-r from-ancient-gold via-blood-red to-mystical-purple bg-clip-text text-transparent">
              Découvrez
            </span>
            <br />
            <span className="text-bone-white">
              la Magie Ancestrale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-garamond text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Plongez dans l'univers mystérieux du vaudou. Rituels personnalisés, consultations spirituelles, et produits authentiques pour éveiller votre âme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-ritual text-lg px-8 py-4 font-garamond group"
            >
              <span className="mr-2">✨</span>
              Rituel Personnalisé
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-ancient text-lg px-8 py-4 font-garamond border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Mystical Divider */}
          <div className="divider-ritual"></div>

          {/* Mystical Quote */}
          <blockquote className="font-garamond italic text-lg text-muted-foreground max-w-xl mx-auto">
            "Les esprits parlent à ceux qui savent écouter le langage de l'âme"
          </blockquote>
        </div>

        {/* Floating Contact & Social Media Icons */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-3">
          <a
            href="tel:+22999062361"
            className="social-mystical"
            title="Appeler maintenant"
          >
            <span className="text-lg">📞</span>
          </a>
          <a
            href="https://wa.me/22999062361"
            target="_blank"
            rel="noopener noreferrer"
            className="social-mystical"
            title="WhatsApp"
          >
            <span className="text-lg">📱</span>
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=hy01dw5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-mystical"
            title="Instagram"
          >
            <span className="text-lg">👁️</span>
          </a>
          <a
            href="https://vm.tiktok.com/ZMB4mCxEg/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-mystical"
            title="TikTok"
          >
            <span className="text-lg">🥁</span>
          </a>
        </div>
      </div>

      {/* Mystical Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ancient-gold rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-mystical-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-magic rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;