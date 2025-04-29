"use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import Button from "./ui/button";

// const services = [
//   "Mobile App Development",
//   "UI/UX Design",
//   "Website Development",
//   "Custom Software Development",
//   "MS D365 CRM",
//   "Cloud Application Development",
//   "Game Development",
//   "SaaS Development",
//   "E-commerce Development",
//   "Design & Development",
//   "Maintenance & Support",
//   "Automation",
// ] as const;

// const formSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Invalid email"),
//   phone: z.string().min(10, "Phone number is required"),
//   budget: z.string().min(1, "Budget is required"),
//   services: z.array(z.enum(services)),
//   details: z.string().min(10, "Project details are required"),
// });

const ContactForm = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     budget: "",
  //     services: [],
  //     details: "",
  //   },
  // });

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };

  return (
    <>
      <div className="container mx-auto max-w-2xl p-4">
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+92xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<$1000">&lt; $1000</SelectItem>
                        <SelectItem value="$1000-$5000">$1000–$5000</SelectItem>
                        <SelectItem value="$5000+">$5000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel>Services You Are Looking For</FormLabel>
                  <div className="services-checkbox">
                    {services.map((service) => (
                      <FormField
                        key={service}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service}
                              className="flex items-center gap-2 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          service,
                                        ])
                                      : field.onChange(
                                          field.value.filter(
                                            (s) => s !== service
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {service}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="primary w-full">
              Submit Project
            </Button>
          </form>
        </Form> */}
        <iframe
          className="w-full h-[1200px] p-0"
          src="https://erpcrm.sysvelop.com/2048/forms/ticket"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
