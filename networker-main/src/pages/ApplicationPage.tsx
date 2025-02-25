
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { Application, Job, Chat } from "@/types";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ApplicationPage = () => {
  const { jobId } = useParams();
  const [application, setApplication] = useState<Application | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch application
      const { data: applicationData } = await supabase
        .from('applications')
        .select()
        .eq('job_id', jobId)
        .eq('worker_id', user.id)
        .single();

      if (applicationData) {
        setApplication(applicationData);

        // Fetch job details
        const { data: jobData } = await supabase
          .from('jobs')
          .select()
          .eq('id', jobId)
          .single();

        setJob(jobData);

        // Fetch chat
        const { data: chatData } = await supabase
          .from('chats')
          .select()
          .eq('application_id', applicationData.id)
          .single();

        setChat(chatData);
      }
    };

    fetchData();
  }, [jobId]);

  if (!application || !job || !chat) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container px-4 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            Loading...
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-sm text-muted-foreground">{job.location}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{job.salary}</span>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Status</h3>
                  <Badge
                    variant={
                      application.status === 'accepted'
                        ? 'default'
                        : application.status === 'rejected'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <ChatInterface chatId={chat.id} />
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        © 2024 Stephane YEMELI
      </footer>
    </div>
  );
};

export default ApplicationPage;
