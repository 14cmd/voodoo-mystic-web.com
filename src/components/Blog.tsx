import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const articles = [
    {
      title: 'Les Origines du Vaudou Haïtien',
      excerpt: 'Découvrez l\'histoire fascinante et les racines profondes de cette tradition spirituelle millénaire qui unit l\'Afrique et les Caraïbes.',
      category: 'Histoire',
      readTime: '8 min',
      date: '15 Nov 2024',
      image: '📜'
    },
    {
      title: 'Comprendre les Loas : Les Esprits Vaudou',
      excerpt: 'Guide complet sur les principales divinités vaudou, leurs attributs, et comment entrer en communication avec ces forces spirituelles.',
      category: 'Spiritualité',
      readTime: '12 min',
      date: '10 Nov 2024',
      image: '👻'
    },
    {
      title: 'Rituel de Protection : Votre Premier Pas',
      excerpt: 'Apprenez à créer votre premier cercle de protection avec des ingrédients simples et des incantations puissantes.',
      category: 'Pratique',
      readTime: '6 min',
      date: '5 Nov 2024',
      image: '🛡️'
    },
    {
      title: 'Les Symboles Veve : Langage Sacré',
      excerpt: 'Explorez la signification mystique des veves, ces dessins rituels qui servent de portails entre notre monde et celui des esprits.',
      category: 'Symbolisme',
      readTime: '10 min',
      date: '1 Nov 2024',
      image: '⚡'
    },
    {
      title: 'Purification de la Maison : Guide Complet',
      excerpt: 'Techniques ancestrales pour nettoyer votre espace de vie des énergies négatives et créer un sanctuaire de paix.',
      category: 'Pratique',
      readTime: '15 min',
      date: '28 Oct 2024',
      image: '🏠'
    },
    {
      title: 'La Divination par les Cauris',
      excerpt: 'Maîtrisez l\'art ancien de la lecture des coquillages pour révéler les secrets du passé, présent et avenir.',
      category: 'Divination',
      readTime: '9 min',
      date: '25 Oct 2024',
      image: '🐚'
    }
  ];

  const categories = ['Tous', 'Histoire', 'Spiritualité', 'Pratique', 'Symbolisme', 'Divination'];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-mystical-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical mb-6">
            Archives Mystiques
          </h2>
          <p className="font-garamond text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plongez dans notre bibliothèque de connaissances sacrées. Articles, guides pratiques et enseignements 
            pour approfondir votre compréhension des arts mystiques.
          </p>
          <div className="divider-ritual mt-8"></div>
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

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="card-mystical border-mystical max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex items-center justify-center bg-gradient-to-br from-mystical-purple to-blood-red">
                <div className="text-8xl text-ancient-gold">
                  📜
                </div>
              </div>
              <div className="p-8">
                <Badge className="mb-4 bg-secondary text-secondary-foreground">
                  ⭐ Article Vedette
                </Badge>
                <CardTitle className="font-cinzel text-2xl text-bone-white mb-4">
                  Les Origines du Vaudou Haïtien
                </CardTitle>
                <CardDescription className="font-garamond text-muted-foreground mb-6">
                  Découvrez l'histoire fascinante et les racines profondes de cette tradition spirituelle 
                  millénaire qui unit l'Afrique et les Caraïbes dans un héritage culturel extraordinaire.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground font-garamond">
                    <span className="text-ancient-gold">Histoire</span> • 8 min • 15 Nov 2024
                  </div>
                  <Button className="btn-ritual font-garamond">
                    Lire l'article
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="card-mystical border-mystical group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {article.image}
                  </div>
                  <Badge variant="secondary" className="font-garamond">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="font-cinzel text-lg text-bone-white group-hover:text-ancient-gold transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="font-garamond text-muted-foreground">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground font-garamond">
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full btn-ancient font-garamond group"
                >
                  Lire l'article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="card-mystical max-w-2xl mx-auto bg-gradient-to-r from-mystical-dark to-mystical-purple">
            <CardContent className="p-8 text-center">
              <h3 className="font-cinzel text-2xl font-bold text-ancient-gold mb-4">
                📚 Grimoire Numérique
              </h3>
              <p className="font-garamond text-bone-white mb-6">
                Recevez nos derniers articles, rituels exclusifs et conseils mystiques directement dans votre boîte spirituelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Laissez-nous un sortilège..."
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-md font-garamond focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-ancient font-garamond">
                  S'abonner
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 font-garamond">
                Vos données sont protégées par nos esprits gardiens 🛡️
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;