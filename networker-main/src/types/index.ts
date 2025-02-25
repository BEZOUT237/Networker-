
export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  role: 'worker' | 'employer';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  employer_id: string;
}

export interface Application {
  id: string;
  job_id: string;
  worker_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
}

export interface Chat {
  id: string;
  application_id: string;
  created_at: string;
}

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}
