"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";
import { NavbarButton } from "@/app/components/atom/navbutton";
import Footer from "@/app/components/atom/footer";
import Team from "@/app/components/atom/team";
import ContactForm from "@/app/components/atom/contact";
import MissionVision from "@/app/components/atom/mission";


const ContactUs: React.FC = () => {
  return (
    <>
    <NavbarButton />
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Connecting Vision with Purpose <br /> - Your Bridge to Excellence.
      </motion.h1>
    </LampContainer>
    <MissionVision />
    <Team />
    <ContactForm />
    <Footer />
    </>
  );
}

export default ContactUs;
