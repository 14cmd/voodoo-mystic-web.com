import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import boutiqueImage from '@/assets/boutique-professional.jpg';

const Boutique = () => {
  const products = [
    {
      name: 'Chandelles de Protection',
      description: 'Bougies rituelles consacrées pour éloigner les énergies négatives',
      price: '25€',
      image: '🕯️',
      category: 'Protection',
      featured: true
    },
    {
      name: 'Talismans d\'Amour',
      description: 'Amulettes artisanales pour harmoniser vos relations sentimentales',
      price: '45€',
      image: '💝',
      category: 'Amour',
      featured: false
    },
    {
      name: 'Encens de Purification',
      description: 'Mélange ancestral d\'herbes pour nettoyer votre espace énergétique',
      price: '15€',
      image: '🌿',
      category: 'Purification',
      featured: false
    },
    {
      name: 'Poudres Magiques',
      description: 'Poudres rituelles pour vos cérémonies et travaux spirituels',
      price: '30€',
      image: '✨',
      category: 'Rituel',
      featured: true
    },
    {
      name: 'Cristaux Chargés',
      description: 'Pierres précieuses imprégnées d\'énergie positive pour la méditation',
      price: '65€',
      image: '💎',
      category: 'Méditation',
      featured: false
    },
    {
      name: 'Huiles Essentielles',
      description: 'Huiles sacrées pour l\'onction et les rituels de guérison',
      price: '35€',
      image: '🫗',
      category: 'Guérison',
      featured: true
    },
    {
      name: 'Pendentifs Protecteurs',
      description: 'Bijoux mystiques pour porter la protection en permanence',
      price: '55€',
      image: '🔱',
      category: 'Protection',
      featured: false
    },
    {
      name: 'Cartes Oracle',
      description: 'Jeu de cartes divinatoires pour vos consultations personnelles',
      price: '40€',
      image: '🔮',
      category: 'Divination',
      featured: false
    }
  ];

  const categories = ['Tous', 'Protection', 'Amour', 'Purification', 'Rituel', 'Méditation', 'Guérison', 'Divination'];

  return (
    <section id="boutique" className="py-20 bg-gradient-to-b from-mystical-dark to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical mb-6">
            Boutique Mystique
          </h2>
          <p className="font-garamond text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection authentique d'objets rituels, talismans et produits spirituels, 
            chacun béni et consacré selon les traditions ancestrales.
          </p>
          <div className="divider-ritual mt-8"></div>
        </div>

        {/* Boutique Image */}
        <div className="mb-16 text-center">
          <img
            src={boutiqueImage}
            alt="Produits mystiques de la boutique"
            className="max-w-4xl mx-auto rounded-lg shadow-mystical border border-border"
          />
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-garamond px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="card-mystical border-mystical group relative overflow-hidden">
              {product.featured && (
                <Badge className="absolute top-3 right-3 z-10 bg-secondary text-secondary-foreground">
                  ⭐ Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <Badge variant="secondary" className="mb-2 font-garamond">
                  {product.category}
                </Badge>
                <CardTitle className="font-cinzel text-lg text-bone-white">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="font-garamond text-muted-foreground text-sm">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-ancient-gold font-garamond font-bold text-xl">
                    {product.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="btn-ritual font-garamond group"
                  >
                    Ajouter
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16">
          <Card className="card-mystical max-w-4xl mx-auto bg-gradient-to-r from-mystical-dark to-mystical-purple">
            <CardContent className="p-8 text-center">
              <h3 className="font-cinzel text-3xl font-bold text-ancient-gold mb-4">
                ✨ Offre Spéciale ✨
              </h3>
              <p className="font-garamond text-xl text-bone-white mb-6">
                Achetez 3 produits et recevez une consultation gratuite de 30 minutes !
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-ancient text-lg px-8 py-3 font-garamond">
                  Voir toute la collection
                </Button>
                <Button variant="outline" className="border-ancient-gold text-ancient-gold hover:bg-ancient-gold hover:text-background">
                  Contacter pour commande personnalisée
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Boutique;