
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement job posting with Supabase here
    console.log("Posting job:", jobData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container px-4 pt-24 pb-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Publier une offre d'emploi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  name="title"
                  placeholder="Titre du poste"
                  value={jobData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="company"
                  placeholder="Nom de l'entreprise"
                  value={jobData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="location"
                  placeholder="Localisation"
                  value={jobData.location}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="salary"
                  placeholder="Salaire"
                  value={jobData.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="type"
                  placeholder="Type de contrat"
                  value={jobData.type}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="description"
                  placeholder="Description du poste"
                  value={jobData.description}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Publier l'offre
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PostJob;
