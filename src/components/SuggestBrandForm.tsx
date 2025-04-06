
import React, { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { SendIcon } from 'lucide-react';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "Brand name must be at least 2 characters.",
  }),
  reason: z.string().min(10, {
    message: "Please provide a reason with at least 10 characters.",
  }),
  link: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  email: z.string().email({ message: "Optional: Provide your email if you'd like updates" }).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

const SuggestBrandForm = () => {
  const { toast } = useToast();
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: '',
      reason: '',
      link: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Log form submission
      console.log('Form data submitted:', data);
      
      // Send email notification to the admin
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "aseerniloy@gmail.com", // Your email address
          brand_name: data.brandName,
          reason: data.reason,
          link: data.link || "No link provided",
          submitter_email: data.email || "Not provided",
          date: new Date().toLocaleString(),
        }
      );
      
      toast({
        title: "Suggestion received",
        description: "Thank you for your suggestion. We'll review it soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your suggestion. Please try again.",
        variant: "destructive",
      });
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
          
          <Button type="submit" className="w-full" variant="default">
            <SendIcon className="mr-2 h-4 w-4" />
            Submit Suggestion
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SuggestBrandForm;
