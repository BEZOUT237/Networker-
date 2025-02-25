
import { Button } from "@/components/ui/button";
import { JobList } from "@/components/jobs/JobList";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container px-4 pt-24 pb-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center py-12 space-y-6 max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Trouvez votre prochain emploi facilement
          </h1>
          <p className="text-lg text-muted-foreground">
            Connectez-vous avec des employeurs qui recherchent vos compétences
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher un emploi..."
              className="pl-10 h-12 w-full"
            />
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="max-w-3xl mx-auto mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Offres Récentes</h2>
            <Button variant="ghost">Voir tout →</Button>
          </div>
          <JobList />
        </section>
      </main>
      
      {/* Copyright Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        © 2024 Stephane YEMELI
      </footer>
    </div>
  );
};

export default Index;
