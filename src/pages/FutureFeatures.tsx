
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileSearch, MessageSquare, FileText, Briefcase, 
  BookOpen, Palette, BarChart, Zap, Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FutureFeatures = () => {
  const features = [
    {
      title: "Job Match Analyzer",
      description: "Upload a job description and your resume to get a compatibility score and personalized recommendations to tailor your resume for that specific job.",
      icon: <FileSearch className="h-6 w-6" />,
      status: "Coming Soon"
    },
    {
      title: "AI Resume Builder",
      description: "Build a professional resume from scratch with AI guidance to create an optimized, ATS-friendly document based on your experience and skills.",
      icon: <FileText className="h-6 w-6" />,
      status: "In Development"
    },
    {
      title: "Mock Interview Preparation",
      description: "Practice for interviews with AI-powered mock interviews based on your resume content and targeted job roles.",
      icon: <MessageSquare className="h-6 w-6" />,
      status: "Planned"
    },
    {
      title: "Industry-Specific Templates",
      description: "Access a library of professionally designed resume templates optimized for specific industries and job functions.",
      icon: <Briefcase className="h-6 w-6" />,
      status: "In Development"
    },
    {
      title: "Resume Learning Center",
      description: "Educational resources with best practices, examples, and guides for creating standout resumes in your field.",
      icon: <BookOpen className="h-6 w-6" />,
      status: "Coming Soon"
    },
    {
      title: "Resume Design Studio",
      description: "Customize the visual appearance of your resume with professional design tools while maintaining ATS compatibility.",
      icon: <Palette className="h-6 w-6" />,
      status: "Planned"
    },
    {
      title: "Application Tracker",
      description: "Track your job applications, interview status, and follow-ups in one organized dashboard.",
      icon: <BarChart className="h-6 w-6" />,
      status: "Planned"
    },
    {
      title: "Premium Resume Analysis",
      description: "Advanced resume analysis with deeper insights, industry comparisons, and personalized coaching recommendations.",
      icon: <Zap className="h-6 w-6" />,
      status: "Planned"
    },
    {
      title: "Personal Branding Guide",
      description: "Develop a consistent personal brand across your resume, LinkedIn, and other professional profiles.",
      icon: <Star className="h-6 w-6" />,
      status: "Planned"
    }
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Coming Soon":
        return "bg-amber-100 text-amber-800";
      case "In Development":
        return "bg-green-100 text-green-800";
      case "Planned":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Future Features</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          We're continuously working to help students optimize their job search process.
          Here's what's coming to PrepFoundry.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border border-border transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                {feature.icon}
              </div>
              <CardTitle className="flex items-center gap-2">
                {feature.title}
                <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(feature.status)}`}>
                  {feature.status}
                </span>
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full opacity-50" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Want to try our current feature?</h2>
        <p className="mt-2 text-muted-foreground">
          Our Resume Checker is ready to help you improve your resume right now.
        </p>
        <Button asChild className="mt-6">
          <Link to="/resume-checker">Try Resume Checker</Link>
        </Button>
      </div>
    </div>
  );
};

export default FutureFeatures;
