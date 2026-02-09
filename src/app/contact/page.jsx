"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "(+91) 84578-76843",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "cvksir07@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Campus Address",
    description: "Plot no 125, Chandrashekharpur, Bhubaneswar, Odisha 751016",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentClass: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, currentClass: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you for your interest! Our academic counselor will call you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentClass: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Contact Info Side */}
          <div className="flex-1 flex flex-col justify-center order-1 lg:order-none">
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h3>
            <p className="text-slate-600 mb-12 text-lg">
              Have questions about our residential program? Visit our campus or reach out to us directly.
            </p>
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">{item.title}</p>
                    <h4 className="text-xl font-medium text-slate-800">{item.description}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="lg:w-[500px] order-2">
            <form
              className="flex flex-col gap-6 p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Admission Inquiry</h3>
              <p className="text-slate-500 mb-4 text-sm">Fill details regarding the student.</p>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">First Name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors placeholder:text-slate-400 rounded-xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Last Name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors placeholder:text-slate-400 rounded-xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors placeholder:text-slate-400 rounded-xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors placeholder:text-slate-400 rounded-xl"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Class</label>
                <Select
                  value={formData.currentClass}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-full h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors rounded-xl">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Class</SelectLabel>
                      <SelectItem value="Class 9">Class 9 (Foundation)</SelectItem>
                      <SelectItem value="Class 10">Class 10 (Foundation)</SelectItem>
                      <SelectItem value="Class 11">Class 11 (NEET/JEE)</SelectItem>
                      <SelectItem value="Class 12">Class 12 (NEET/JEE)</SelectItem>
                      <SelectItem value="Dropper">Dropper Batch</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[150px] bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-colors resize-none placeholder:text-slate-400 rounded-xl"
                  placeholder="Type your message here..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-full">
                Request Call Back
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
