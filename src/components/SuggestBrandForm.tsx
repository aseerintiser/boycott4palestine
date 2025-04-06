
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

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_y9e4hrq";
const EMAILJS_TEMPLATE_ID = "template_tzhle3w";
const EMAILJS_USER_ID = "O_pxAKKL-fpUTzN6v"; // This is the public key
const RECIPIENT_EMAIL = "aseerniloy@gmail.com"; // Recipient email

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
      
      // Format data for EmailJS - Make sure parameter names match EXACTLY with template variables
      const templateParams = {
        // These should match EXACTLY with your EmailJS template variables
        name: data.email ? data.email : "Anonymous User", // For {{name}} in template
        from_name: data.email ? data.email : "Anonymous User",
        title: `New Brand Suggestion: ${data.brandName}`, // For {{title}} in template
        brand_name: data.brandName,
        reason: data.reason,
        supporting_link: data.link || "Not provided",
        contact_email: data.email || "Not provided",
        reply_to: data.email || RECIPIENT_EMAIL,
        message: `Brand Name: ${data.brandName}\n\nReason for Boycott: ${data.reason}\n\nSupporting Link: ${data.link || "Not provided"}\n\nContact Email: ${data.email || "Not provided"}\n\nSubmission Date: ${new Date().toLocaleString()}`
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log('Email sent successfully:', response);
      
      toast({
        title: "Suggestion Sent!",
        description: "Thank you for your suggestion. Our team will review it soon.",
      });
      
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your suggestion. Please try again later.",
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
