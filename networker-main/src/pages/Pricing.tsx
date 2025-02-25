
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "react-router-dom";

const PricingTier = ({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}) => (
  <Card className={`${highlighted ? 'border-primary shadow-lg' : ''}`}>
    <CardHeader>
      <CardTitle className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-4xl font-bold">{price}</p>
      </CardTitle>
      <p className="text-center text-muted-foreground">{description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={highlighted ? "default" : "outline"} asChild>
        <Link to="/signup">{buttonText}</Link>
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container px-4 pt-24 pb-12 flex-grow">
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Tarifs simples et transparents
          </h1>
          <p className="text-xl text-muted-foreground">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            title="Gratuit"
            price="€0"
            description="Parfait pour commencer"
            features={[
              "Accès aux offres d'emploi",
              "Profil de base",
              "Candidature limitée",
              "Support par email"
            ]}
            buttonText="Commencer gratuitement"
          />
          <PricingTier
            title="Pro"
            price="€29/mois"
            description="Pour les professionnels"
            features={[
              "Toutes les fonctionnalités gratuites",
              "Candidatures illimitées",
              "Profil mis en avant",
              "Support prioritaire",
              "Statistiques avancées"
            ]}
            buttonText="Essayer Pro"
            highlighted={true}
          />
          <PricingTier
            title="Enterprise"
            price="€99/mois"
            description="Pour les grandes entreprises"
            features={[
              "Toutes les fonctionnalités Pro",
              "Offres d'emploi illimitées",
              "API Access",
              "Support dédié 24/7",
              "Formation personnalisée",
              "Personnalisation avancée"
            ]}
            buttonText="Contacter les ventes"
          />
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        © 2024 Stephane YEMELI
      </footer>
    </div>
  );
};

export default Pricing;
