import { location, mail, phone } from "@/app/images/index";
import { socials } from "@/app/constants/index";
import Section from "@/app/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden pl-[4.5rem] pr-12">
      <Section crosses className="!px-0 !py-10" id="footer">
        <div className="sm:p-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="">
              <h3 className="font-bold text-2xl">VSAY Solutions</h3>
              <h5 className="text-lg font-semibold">
                Powering Tomorrow with All-in-One Tech Solutions!
              </h5>
              <p className="mt-4 text-n-3 body-2 md:max-w-[25rem]">
                In our digital learning ecosystem, powered by Microsoft & AWS,
                students and educators unite to unlock new horizons, nurturing
                profound educational, professional, and social growth.
              </p>
            </div>
            <div className=" ">
              <h5 className="h5 font-semibold mb-5 text-lg">Get In Touch</h5>
              <address className="not-italic mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex">
                <Image src={location} alt="location" height={30} width={30} />{" "}
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/mkcvYxJQup2JrnKc8"
                  className="ml-2"
                >
                  GT 22, Sector 117, Noida, Uttar Pradesh, India - 201301
                </Link>
              </address>
              <div>
                <p className="mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex">
                  <Image src={mail} alt="mail" height={30} width={30} />
                  <Link href="mailto:vsay.oficial@gmail.com" className="ml-2">
                    vsay.oficial@gmail.com
                  </Link>
                </p>
              </div>
              <p className="mt-2 text-n-3 hover:underline hover:text-n-1 inline-flex">
                <Image src={phone} alt="phone" height={30} width={30} />
                <Link href="tel:+918787016919" className="ml-2">
                  +91 8787016919
                </Link>
              </p>
            </div>
            <div className="">
              <h5 className="h5 font-semibold text-lg">Popular Links</h5>
              <ul className="mt-2 space-y-2 dark:text-gray-100">
                <li>
                  <Link
                    href="/"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Latest Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedback-form"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Feedback Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brochure"
                    className="text-n-3 hover:underline hover:text-n-1"
                  >
                    Brochure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block pl-10">
            © Copyright VSAY Solutions {new Date().getFullYear()}. All Rights
            Reserved &{" "}
            <Link className="hover:underline hover:text-n-1" href="/">
              Privacy Policy
            </Link>
          </p>
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <Image
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                  className=""
                />
              </Link>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
