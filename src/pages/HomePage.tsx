
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Upload, BarChart, Target, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24">
        <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6">
          <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm">
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-xs font-semibold text-white">NEW</span>
            <span className="ml-2 text-foreground/80">Launching PrepFoundry for Students</span>
          </div>
          
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-heading">Optimize your resume</span> for job and internship success
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            PrepFoundry helps college students create ATS-friendly resumes that stand out to employers. 
            Upload your resume and get instant feedback to land more interviews.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/resume-checker">
                Try Resume Checker <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-brand-500" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-brand-500" />
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-brand-500" />
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-brand-500" />
              <span>Detailed Feedback</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How PrepFoundry Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get your resume optimized in three simple steps
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Upload size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Upload Your Resume</h3>
                <p className="mt-2 text-muted-foreground">
                  Upload your current resume in PDF or DOCX format for analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <BarChart size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Get Instant Analysis</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI analyzes your resume against ATS requirements and industry standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Target size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Improve & Apply</h3>
                <p className="mt-2 text-muted-foreground">
                  Follow our actionable recommendations to create an optimized resume.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create an outstanding resume
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">ATS Compatibility Score</h3>
              <p className="mt-2 text-muted-foreground">
                Get a numerical score showing how well your resume will perform with Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Section Analysis</h3>
              <p className="mt-2 text-muted-foreground">
                Detailed feedback on each section of your resume: header, skills, work experience, education, and more.
              </p>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Actionable Improvements</h3>
              <p className="mt-2 text-muted-foreground">
                Specific recommendations to improve each section for maximum impact with recruiters.
              </p>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Keyword Optimization</h3>
              <p className="mt-2 text-muted-foreground">
                Suggestions for industry-specific keywords to include for better job match rates.
              </p>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                  <path d="M14 15h4" />
                  <path d="M14 9h4" />
                  <path d="M14 12h4" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Format Analysis</h3>
              <p className="mt-2 text-muted-foreground">
                Feedback on formatting, readability, and visual structure to ensure clean presentation.
              </p>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" x2="12" y1="2" y2="15" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Shareable Results</h3>
              <p className="mt-2 text-muted-foreground">
                Share your analysis results with mentors, career advisors, or friends for additional help.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-brand-900 to-brand-700 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to land more interviews?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Don't let your resume hold you back. Optimize it now and start getting more callbacks.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8 gap-2">
                <Link to="/resume-checker">
                  Analyze My Resume <Rocket size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
