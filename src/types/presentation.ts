export interface StudentAnswer {
  id: string;
  studentName: string;
  answerText: string;
  timestamp: string;
  likes: number;
}

export interface WeekPlan {
  weekNumber: number;
  title: string;
  subtitle: string;
  status: 'completed' | 'active' | 'upcoming';
  duration: string;
  skills: string[];
  description: string;
  mission: string;
  deliverable: string;
}

export interface PresenterNote {
  slideId: number;
  slideTitle: string;
  hook: string;
  script: string[];
  interactivePrompt: string;
  proTips: string[];
}
