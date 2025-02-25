
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface JobCardProps extends Job {
  onApply?: () => void;
}

export const JobCard = ({ id, title, company, location, salary, type, description }: JobCardProps) => {
  const [isApplying, setIsApplying] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleApply = async () => {
    try {
      setIsApplying(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in or sign up to apply for jobs",
          variant: "destructive",
        });
        navigate("/login");
        return;
      }

      // Check if already applied
      const { data: existingApplication } = await supabase
        .from('applications')
        .select()
        .eq('job_id', id)
        .eq('worker_id', user.id)
        .single();

      if (existingApplication) {
        toast({
          title: "Already applied",
          description: "You have already applied for this job",
          variant: "destructive",
        });
        return;
      }

      // Create application
      const { error: applicationError } = await supabase
        .from('applications')
        .insert([
          { job_id: id, worker_id: user.id }
        ]);

      if (applicationError) throw applicationError;

      toast({
        title: "Application submitted",
        description: "Your application has been sent successfully",
      });

      navigate(`/applications/${id}`);
    } catch (error) {
      console.error('Error applying for job:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <Badge variant="outline">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{location}</span>
            <span>•</span>
            <span>{salary}</span>
          </div>
          <p className="text-sm line-clamp-2">{description}</p>
          <div className="pt-2">
            <Button 
              className="w-full" 
              onClick={handleApply}
              disabled={isApplying}
            >
              {isApplying ? "Applying..." : "Apply Now"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
