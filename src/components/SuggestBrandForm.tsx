
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SendIcon, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "Brand name must be at least 2 characters.",
  }),
  reason: z.string().min(10, {
    message: "Please provide a reason with at least 10 characters.",
  }),
  link: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  email: z.string().email({ message: "Please provide a valid email address" }).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

const SuggestBrandForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    try {
      emailjs.init("WbjGKgtIZn-MNUF77"); // EmailJS User ID
      console.log("EmailJS initialized successfully");
    } catch (err) {
      console.error("Error initializing EmailJS:", err);
      setError("Failed to initialize email service");
    }
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: '',
      reason: '',
      link: '',
      email: '',
    },
    mode: 'onChange', // Enable real-time validation
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Log form submission
      console.log('Form data submitted:', data);
      
      // Prepare template parameters based on the EmailJS template variables
      const templateParams = {
        name: data.email || "Anonymous Submitter", // For the recipient name greeting
        title: `New brand boycott suggestion: ${data.brandName}`, // For the request subject/title
        email: data.email || "Not provided", // Submitter's email
        brand_name: data.brandName, // Brand name for boycott
        reason: data.reason, // Reason for boycott
        link: data.link || "No link provided", // Supporting evidence link
        submitter_email: data.email || "Not provided", // Email for notification
        date: new Date().toLocaleString(), // Submission date
      };
      
      // Send email notification using EmailJS with the correct template ID
      const result = await emailjs.send(
        "service_y9e4hrq", // EmailJS service ID 
        "template_tzhle3w", // Using the correct template ID from user
        templateParams
      );
      
      console.log('EmailJS result:', result);
      
      toast({
        title: "Suggestion received",
        description: "Thank you for your suggestion. We'll review it soon.",
      });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        form.reset();
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error submitting your suggestion. Please verify your EmailJS template setup is correct.");
      toast({
        title: "Error",
        description: "There was an error submitting your suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-palestinian-black">Suggest a Brand to Boycott</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter brand name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Boycott</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Why should this brand be boycotted?" 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supporting Link (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/evidence" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a link to an article or source that supports your suggestion.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  Provide your email if you'd like to be notified when your suggestion is reviewed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            variant="default"
            disabled={isSubmitting || submitSuccess}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : submitSuccess ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Submitted Successfully!
              </>
            ) : (
              <>
                <SendIcon className="mr-2 h-4 w-4" />
                Submit Suggestion
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SuggestBrandForm;
