
import React, { useState, useRef } from 'react';
import { 
  Upload, Check, X, FileText, Loader2, BarChart, Award, RefreshCw,
  Briefcase, GraduationCap, User, List, Share2, Download, Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

type SectionScore = {
  name: string;
  score: number;
  feedback: string;
  recommendations: string[];
  icon: React.ReactNode;
};

type ResumeAnalysis = {
  overallScore: number;
  sections: SectionScore[];
  strengths: string[];
  weaknesses: string[];
  keywords: string[];
};

const ResumeChecker = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const fileType = selectedFile.type;
      
      if (
        fileType === 'application/pdf' || 
        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const fileType = droppedFile.type;
      
      if (
        fileType === 'application/pdf' || 
        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFile(droppedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const resetForm = () => {
    setFile(null);
    setAnalysis(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const analyzeResume = () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call to backend for resume analysis
    setTimeout(() => {
      // Mock analysis response
      const mockAnalysis: ResumeAnalysis = {
        overallScore: 78,
        sections: [
          {
            name: "Contact Information",
            score: 90,
            feedback: "Your contact information is well-structured and complete.",
            recommendations: [
              "Consider adding your LinkedIn profile URL",
              "Make sure your email is professional (firstname.lastname@domain.com)"
            ],
            icon: <User className="h-5 w-5" />
          },
          {
            name: "Summary/Objective",
            score: 70,
            feedback: "Your summary is good but could be more impactful and targeted.",
            recommendations: [
              "Tailor your summary to match the specific job description",
              "Include 2-3 key accomplishments with measurable results",
              "Keep it concise (3-4 lines maximum)"
            ],
            icon: <List className="h-5 w-5" />
          },
          {
            name: "Work Experience",
            score: 75,
            feedback: "Your work experience section is informative but lacks quantifiable achievements.",
            recommendations: [
              "Add metrics and numbers to showcase your impact (e.g., 'Increased sales by 20%')",
              "Use strong action verbs at the beginning of each bullet point",
              "Focus on achievements rather than responsibilities",
              "Ensure chronological order (most recent first)"
            ],
            icon: <Briefcase className="h-5 w-5" />
          },
          {
            name: "Education",
            score: 85,
            feedback: "Your education section is well-formatted and includes relevant information.",
            recommendations: [
              "Include your GPA if it's above 3.5",
              "Add relevant coursework if you're a recent graduate",
              "Consider listing academic achievements or honors"
            ],
            icon: <GraduationCap className="h-5 w-5" />
          },
          {
            name: "Skills",
            score: 65,
            feedback: "Your skills section needs better organization and more relevant technical skills.",
            recommendations: [
              "Organize skills by category (technical, soft, languages, etc.)",
              "Prioritize skills mentioned in the job descriptions you're targeting",
              "Remove outdated or irrelevant skills",
              "Consider adding proficiency levels for certain skills"
            ],
            icon: <Award className="h-5 w-5" />
          },
          {
            name: "Formatting",
            score: 80,
            feedback: "Your resume has good formatting but could be more consistent.",
            recommendations: [
              "Ensure consistent font sizes and styles throughout",
              "Limit your resume to 1 page (2 pages maximum for experienced professionals)",
              "Use bullet points for better readability",
              "Ensure adequate white space to avoid a cluttered appearance"
            ],
            icon: <FileText className="h-5 w-5" />
          }
        ],
        strengths: [
          "Clear organization of information",
          "Good use of action verbs",
          "Appropriate length for your experience level",
          "Relevant education credentials highlighted"
        ],
        weaknesses: [
          "Lack of quantifiable achievements",
          "Generic summary that doesn't showcase unique value",
          "Some formatting inconsistencies",
          "Skills section needs better categorization"
        ],
        keywords: [
          "project management",
          "data analysis",
          "team leadership",
          "JavaScript",
          "React",
          "customer service",
          "problem-solving",
          "communication"
        ]
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000); // Simulate 3 second API delay
  };

  const calculateScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  const calculateProgressColor = (score: number) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const handleShareResults = () => {
    // This would typically generate a shareable link
    toast({
      title: "Share link generated!",
      description: "Link copied to clipboard. You can now share your results.",
    });
  };

  const handleCopyRecommendations = () => {
    if (!analysis) return;
    
    let recommendationsText = "PrepFoundry Resume Analysis Recommendations:\n\n";
    
    analysis.sections.forEach(section => {
      recommendationsText += `${section.name} (Score: ${section.score}/100):\n`;
      recommendationsText += `${section.feedback}\n`;
      recommendationsText += "Recommendations:\n";
      section.recommendations.forEach((rec, index) => {
        recommendationsText += `${index + 1}. ${rec}\n`;
      });
      recommendationsText += "\n";
    });
    
    navigator.clipboard.writeText(recommendationsText);
    
    toast({
      title: "Recommendations copied!",
      description: "All recommendations have been copied to your clipboard.",
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume Checker</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Upload your resume to get an instant ATS compatibility score and detailed feedback
        </p>
      </div>

      {!file && !analysis ? (
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-6">
            <div
              className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
                isDragging 
                  ? 'border-brand-400 bg-brand-50/30' 
                  : 'border-border bg-card/50 hover:bg-secondary/50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={openFileSelector}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.docx"
                className="hidden"
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Upload size={24} />
              </div>
              <h3 className="mb-2 text-lg font-medium">Upload your resume</h3>
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Drag and drop your file here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Supports PDF, DOCX (Max 5MB)
              </p>
            </div>
          </CardContent>
        </Card>
      ) : isAnalyzing ? (
        <Card className="mx-auto max-w-2xl animate-fade-in">
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Loader2 size={48} className="mb-4 animate-spin text-brand-500" />
            <h3 className="mb-2 text-xl font-medium">Analyzing your resume...</h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Our AI is reviewing your resume for ATS compatibility and optimization opportunities
            </p>
            <Progress value={45} className="mb-2 w-full" />
            <p className="text-xs text-muted-foreground">This will take just a few moments</p>
          </CardContent>
        </Card>
      ) : analysis ? (
        <div className="animate-fade-in">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">{file?.name}</span>
            </div>
            <Button variant="outline" size="sm" onClick={resetForm}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Check Another Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Score Overview Card */}
            <Card className="col-span-1 lg:col-span-3">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-muted bg-card">
                      <div className="absolute text-4xl font-bold">
                        {analysis.overallScore}
                      </div>
                      <div className="absolute bottom-0 text-xs font-medium">out of 100</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">ATS Compatibility Score</h3>
                      <p className="text-muted-foreground">
                        {analysis.overallScore >= 85 
                          ? "Excellent! Your resume is well-optimized for ATS systems." 
                          : analysis.overallScore >= 70 
                            ? "Good start, but there's room for improvement." 
                            : "Your resume needs significant improvements for ATS systems."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleShareResults}>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Results
                    </Button>
                    <Button variant="default" size="sm" onClick={handleCopyRecommendations}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Recommendations
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Scores & Details */}
            <div className="col-span-1 grid gap-6 lg:col-span-2">
              <Tabs defaultValue="scores" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="scores">Section Scores</TabsTrigger>
                  <TabsTrigger value="strengths">Strengths & Weaknesses</TabsTrigger>
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                </TabsList>
                
                <TabsContent value="scores" className="mt-4 space-y-4">
                  {analysis.sections.map((section, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {section.icon}
                            <CardTitle className="text-lg">{section.name}</CardTitle>
                          </div>
                          <div className={`text-lg font-bold ${calculateScoreColor(section.score)}`}>
                            {section.score}/100
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress 
                          value={section.score} 
                          className={`mb-4 h-2 ${calculateProgressColor(section.score)}`}
                        />
                        <p className="mb-2 text-sm">{section.feedback}</p>
                        <div className="mt-3">
                          <h4 className="mb-2 text-sm font-medium">Recommendations:</h4>
                          <ul className="space-y-1">
                            {section.recommendations.map((rec, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="mt-1 flex-shrink-0 text-brand-500">•</div>
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="strengths" className="mt-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <CardTitle className="text-lg">Strengths</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {analysis.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <X className="h-5 w-5 text-red-500" />
                          <CardTitle className="text-lg">Areas for Improvement</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {analysis.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="keywords" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Relevant Keywords</CardTitle>
                      <CardDescription>
                        These keywords are relevant to your field and should be incorporated in your resume
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {analysis.keywords.map((keyword, index) => (
                          <div 
                            key={index}
                            className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700"
                          >
                            {keyword}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/50 px-6 py-4">
                      <p className="text-sm text-muted-foreground">
                        Tip: Include these keywords naturally throughout your resume, especially in your skills and experience sections.
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar with Tips */}
            <div className="col-span-1">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Resume Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-brand-50 p-3">
                      <h4 className="mb-1 font-medium">Quantify Achievements</h4>
                      <p className="text-sm text-muted-foreground">
                        Use numbers and percentages to demonstrate your impact (e.g., "Increased sales by 20%").
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-brand-50 p-3">
                      <h4 className="mb-1 font-medium">Be Concise</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep your resume to 1-2 pages maximum. Use bullet points and avoid lengthy paragraphs.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-brand-50 p-3">
                      <h4 className="mb-1 font-medium">Tailor for Each Job</h4>
                      <p className="text-sm text-muted-foreground">
                        Customize your resume for each position by matching keywords from the job description.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-brand-50 p-3">
                      <h4 className="mb-1 font-medium">Use Action Verbs</h4>
                      <p className="text-sm text-muted-foreground">
                        Start bullet points with strong action verbs like "Implemented," "Developed," or "Led."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : null}
      
      {file && !isAnalyzing && !analysis && (
        <div className="mt-8 flex justify-center">
          <Card className="w-full max-w-2xl animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button onClick={analyzeResume} className="flex-1 gap-2">
                  <BarChart className="h-4 w-4" />
                  Analyze Resume
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ResumeChecker;
