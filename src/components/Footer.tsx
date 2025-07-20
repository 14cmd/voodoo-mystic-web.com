import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/CKRIESHPMWFQE1',
      icon: '📱',
      description: 'Contact direct'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=hy01dw5',
      icon: '👁️',
      description: 'Miroir enchanté'
    },
    {
      name: 'TikTok',
      url: 'https://vm.tiktok.com/ZMB4mCxEg/',
      icon: '🥁',
      description: 'Tambour mystique'
    }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Boutique', href: '#boutique' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Rituels de Protection',
    'Consultation Spirituelle',
    'Purification Énergétique',
    'Rituels d\'Amour',
    'Désenvoûtement'
  ];

  return (
    <footer id="contact" className="bg-mystical-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-mystical text-xl">☩</span>
              </div>
              <span className="font-cinzel font-bold text-2xl text-mystical">
                Majesté Koffi Tô-Non
              </span>
            </div>
            <p className="font-garamond text-muted-foreground mb-6 max-w-md leading-relaxed">
              Découvrez les mystères ancestraux du vaudou. Consultations spirituelles, rituels personnalisés 
              et produits authentiques pour éveiller votre âme et transformer votre destinée.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-mystical group"
                  title={social.description}
                >
                  <span className="text-lg group-hover:animate-pulse">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-bone-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-garamond text-muted-foreground hover:text-secondary transition-colors duration-300 group"
                  >
                    <span className="group-hover:text-ancient-gold">✦</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-bone-white mb-6">
              Services Mystiques
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="font-garamond text-muted-foreground">
                    <span className="text-mystical-purple">◆</span> {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-cinzel text-2xl font-bold text-mystical mb-6">
                Contactez-nous
              </h3>
              <div className="space-y-4 font-garamond text-muted-foreground">
                <p className="flex items-center space-x-3">
                  <span className="text-ancient-gold">📞</span>
                  <a href="tel:+22999062361" className="hover:text-secondary transition-colors">
                    +229 99 06 23 61
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-ancient-gold">📧</span>
                  <a href="mailto:consultationvoodomystic@gmail.com" className="hover:text-secondary transition-colors">
                    consultationvoodomystic@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-ancient-gold">🕯️</span>
                  <span>Consultations disponibles 7j/7</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-mystical-purple">🌙</span>
                  <span>Rituels personnalisés sur rendez-vous</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-emerald-magic">✨</span>
                  <span>Urgences spirituelles acceptées</span>
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="font-cinzel text-xl font-bold text-bone-white mb-4">
                Contact Rapide
              </h4>
              <div className="space-y-3">
                <Button 
                  className="btn-ritual w-full font-garamond text-left justify-start"
                  onClick={() => window.open('tel:+22999062361')}
                >
                  <span className="mr-3">📞</span>
                  Appeler : +229 99 06 23 61
                </Button>
                <Button 
                  className="btn-ritual w-full font-garamond text-left justify-start"
                  onClick={() => window.open('https://wa.me/22999062361', '_blank')}
                >
                  <span className="mr-3">📱</span>
                  WhatsApp - Contact Immédiat
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full font-garamond text-left justify-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open('mailto:consultationvoodomystic@gmail.com')}
                >
                  <span className="mr-3">📧</span>
                  consultationvoodomystic@gmail.com
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-cinzel text-2xl font-bold text-mystical mb-4">
              Rejoignez Notre Cercle Mystique
            </h3>
            <p className="font-garamond text-muted-foreground mb-6">
              Recevez des conseils spirituels exclusifs, des rituels gratuits et les dernières nouvelles de notre monde mystique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Laissez-nous un sortilège..."
                className="flex-1 px-4 py-3 bg-background border border-border rounded-md font-garamond focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-ancient font-garamond px-6">
                Rejoindre
              </Button>
            </div>
          </div>
        </div>

        {/* Mystical Divider */}
        <div className="divider-ritual"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-center md:text-left">
          <p className="font-garamond text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Majesté Koffi Tô-Non. Tous droits réservés aux esprits ancestraux.
          </p>
          <div className="flex items-center space-x-6 text-sm font-garamond text-muted-foreground">
            <a href="#" className="hover:text-secondary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Conditions
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Mentions légales
            </a>
          </div>
        </div>

        {/* Mystical Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <blockquote className="font-garamond italic text-muted-foreground">
            "Dans l'obscurité, nous trouvons la lumière. Dans le mystère, nous découvrons la vérité."
          </blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;