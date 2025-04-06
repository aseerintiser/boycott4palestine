
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SendIcon, Loader2 } from 'lucide-react';
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

// Simple direct configuration - replace with your own values
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const EMAILJS_USER_ID = "YOUR_USER_ID"; // Replace with your User ID

const SuggestBrandForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      
      console.log('Form data submitted:', data);
      
      // Format data for EmailJS
      const templateParams = {
        brand_name: data.brandName,
        reason: data.reason,
        supporting_link: data.link || "Not provided",
        contact_email: data.email || "Not provided",
        submission_date: new Date().toLocaleString()
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log('Email sent successfully');
      
      toast({
        title: "Suggestion Sent!",
        description: "Thank you for your suggestion. Our team will review it soon.",
      });
      
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Unable to submit your suggestion. Please replace the EmailJS IDs with your own values.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-palestinian-black">Suggest a Brand to Boycott</h2>
      
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
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            variant="default"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
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
