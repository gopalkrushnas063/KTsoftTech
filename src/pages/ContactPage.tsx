import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const CONTACT_EMAIL = "ktsofttech@gmail.com";
const OFFICE_ADDRESS =
  "4th Floor, OCAC Tower, Doordarshan Colony, Acharya Vihar, Bhubaneswar, Odisha 751013";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&output=embed`;

const SUBJECT_LABELS: Record<string, string> = {
  sales: "Sales Inquiry",
  support: "Technical Support",
  feedback: "Product Feedback",
  partnership: "Partnership Opportunity",
  other: "Other",
};

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject;
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
      `&su=${encodeURIComponent(`[KTsoftTech Contact] ${subjectLabel}`)}` +
      `&body=${encodeURIComponent(
        `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\n${data.message}`
      )}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Opening Gmail…",
      description: "Review your message in the new tab and click Send there.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="section-container py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you
              with any inquiries about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">info@ktsofttech.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-400">+91-9937220643</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-400">4th Floor, OCAC Tower,</p>
                    <p className="text-gray-400">Doordarshan Colony, Acharya Vihar,</p>
                    <p className="text-gray-400">Bhubaneswar, Odisha 751013</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/company/ktsofttech/",
                      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-saas-orange transition-colors bg-saas-darkGray p-3 rounded-lg"
                      aria-label={social.name}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              {...field} 
                              className="bg-saas-black border-gray-700 focus:border-saas-orange focus:ring-saas-orange/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              {...field} 
                              className="bg-saas-black border-gray-700 focus:border-saas-orange focus:ring-saas-orange/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-saas-black border-gray-700 focus:border-saas-orange focus:ring-saas-orange/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-saas-black border-gray-700 focus:border-saas-orange focus:ring-saas-orange/50 text-gray-300">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-saas-darkGray border-gray-700 text-white">
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="feedback">Product Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Your message here..." 
                            {...field} 
                            className="bg-saas-black border-gray-700 focus:border-saas-orange focus:ring-saas-orange/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-gray-700 bg-saas-black focus:ring-saas-orange/50 text-saas-orange"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-400 !mt-0">
                          I agree to the{" "}
                          <a
                            href="/privacy-policy"
                            className="text-saas-orange hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800">
            <div className="p-6 pb-0 text-center">
              <h3 className="text-xl font-semibold mb-1">Our Headquarters</h3>
              <p className="text-gray-400 max-w-md mx-auto">{OFFICE_ADDRESS}</p>
            </div>
            <iframe
              title="KTsoftTech office location"
              src={MAP_EMBED_SRC}
              className="w-full h-96 mt-6 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;