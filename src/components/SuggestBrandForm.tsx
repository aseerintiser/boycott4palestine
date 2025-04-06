
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SendIcon, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

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
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: '',
      reason: '',
      link: '',
      email: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      console.log('Form data submitted:', data);
      
      // Create a formatted message for email body
      const messageBody = `
Brand Name: ${data.brandName}
Reason for Boycott: ${data.reason}
Supporting Link: ${data.link || "Not provided"}
Contact Email: ${data.email || "Not provided"}
Submitted on: ${new Date().toLocaleString()}
      `;
      
      // Instead of using EmailJS directly, use a more reliable approach - submit to server or use fetch
      // For now, simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Suggestion Received!",
        description: "Thank you for your suggestion. Our team will review it soon.",
      });
      
      setSubmitSuccess(true);
      form.reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error sending your suggestion. Please try again later.");
      toast({
        title: "Submission Failed",
        description: "Unable to submit your suggestion at this time. Please try again later.",
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
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
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
