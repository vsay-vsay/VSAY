import { NavbarButton } from "@/app/components/atom/navbutton";
import React from "react";
import { BackgroundBeamsWithCollisionClient } from "@/app/components/atom/backgroundbeam";
import { ExpandableCard } from "@/app/components/atom/expandablecard";
import { FlipWord } from "@/app/components/atom/flipword";
import { AnimatedTestimonial } from "@/app/components/atom/testimonals";
import { AnimatedPin } from "@/app/components/atom/videotestimonials";
import Section from "@/app/components/ui/Section";


const Clients: React.FC = () => {
    return (
        <>
        <NavbarButton />
        <BackgroundBeamsWithCollisionClient />
        <FlipWord flipword = {["inspiring", "modern", "creative", "happy clients"]}  firstWord = 'Trusted by' lastWord = 'working with to bring their visions to life.' />
        <ExpandableCard />
        <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden pl-[4.5rem] pr-12">
        <Section crosses className="!px-0 !py-10" id='footer'>
        <FlipWord flipword = {["Kind", "thoughtful", "authentic", "happy"]}  firstWord = 'Testimonials' lastWord = 'Modern & User-Friendly websites that my clients love.' />
        </Section>
        </div>
        <AnimatedTestimonial />
        <AnimatedPin />
        </>
    );
}

export default Clients;