import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import servicesImage from '@/assets/services-mystical.jpg';

const Services = () => {
  const services = [
    {
      icon: '🕯️',
      title: 'Rituels de Protection',
      description: 'Protégez-vous des énergies négatives avec nos rituels ancestraux personnalisés selon votre situation.',
      price: 'À partir de 50€'
    },
    {
      icon: '🔮',
      title: 'Consultation Spirituelle',
      description: 'Découvrez votre avenir et recevez des conseils éclairés grâce aux arts divinatoires vaudou.',
      price: 'À partir de 35€'
    },
    {
      icon: '🌿',
      title: 'Purification Énergétique',
      description: 'Nettoyez votre aura et votre espace de vie avec nos méthodes traditionnelles authentiques.',
      price: 'À partir de 60€'
    },
    {
      icon: '💕',
      title: 'Rituels d\'Amour',
      description: 'Harmonisez vos relations amoureuses et attirez l\'âme sœur avec la magie du cœur.',
      price: 'À partir de 80€'
    },
    {
      icon: '💰',
      title: 'Rituels de Prospérité',
      description: 'Ouvrez les voies de l\'abondance et attirez la richesse dans votre vie professionnelle.',
      price: 'À partir de 70€'
    },
    {
      icon: '🕯️',
      title: 'Désenvoûtement',
      description: 'Libérez-vous des malédictions et des blocages spirituels qui entravent votre chemin.',
      price: 'À partir de 120€'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-mystical-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical mb-6">
            Nos Services Mystiques
          </h2>
          <p className="font-garamond text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explorez notre gamme complète de services spirituels, chacun conçu pour répondre à vos besoins les plus profonds et vous connecter aux forces ancestrales.
          </p>
          <div className="divider-ritual mt-8"></div>
        </div>

        {/* Services Image */}
        <div className="mb-16 text-center">
          <img
            src={servicesImage}
            alt="Services mystiques vaudou"
            className="max-w-4xl mx-auto rounded-lg shadow-mystical border border-border"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-mystical border-mystical group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-cinzel text-xl text-bone-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-garamond text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-ancient-gold font-garamond font-semibold text-lg">
                  {service.price}
                </div>
                <Button 
                  className="btn-ritual w-full font-garamond group"
                  variant="outline"
                >
                  <span className="mr-2">✨</span>
                  Réserver
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-mystical max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-cinzel text-2xl font-bold text-mystical mb-4">
                Consultation Personnalisée
              </h3>
              <p className="font-garamond text-muted-foreground mb-6">
                Besoin d'un service sur mesure ? Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider dans votre parcours spirituel.
              </p>
              <Button className="btn-ritual text-lg px-8 py-3 font-garamond">
                Consultation Gratuite
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;