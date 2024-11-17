"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [sticky, setSticky] = useState(false);

  // Sticky Navbar & Scroll Animation
  const { scrollY } = useViewportScroll();
  const height = useTransform(scrollY, [0, 100], ["80px", "60px"]);
  const logoSize = useTransform(scrollY, [0, 100], ["48px", "32px"]);
  const controls = useAnimation();

  const lastScrollY = useRef(0);
  const delta = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastScrollY.current);

      delta.current =
        currentY >= lastScrollY.current
          ? Math.min(delta.current + diff, 10)
          : Math.max(delta.current - diff, -10);

      if (delta.current >= 10 && currentY > 200) {
        controls.start("hidden");
      } else if (delta.current <= -10 || currentY < 200) {
        controls.start("visible");
      }

      lastScrollY.current = currentY;
      setSticky(currentY >= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const pathname = usePathname();

  return (
    <motion.header
      className={`header fixed z-40 w-full flex items-center ${
        sticky
          ? " bg-gradient-to-t from-transparent to-slate-400/10 backdrop-blur-sm shadow-sticky dark:bg-gray-dark"
          : "bg-transparent"
      }`}
      initial="visible"
      animate={controls}
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      style={{ height }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <button onClick={navbarToggleHandler} aria-label="Toggle Navbar">
          {/* Your toggle icon here */}
          <IconArrowLeft onClick={()=>router.back()} />
        </button>
        {/* Logo */}
        <div className="w-60 max-w-full px-4">
          <Link href="/" className="block">
            <motion.div style={{ height: logoSize, width: logoSize }}>
              {/* Uncomment and provide the correct path to your logo */}
              {/* <Image src={logo} alt="Logo" className="dark:hidden" fill />
              <Image src={logo} alt="Logo" className="hidden dark:block" fill /> */}
            </motion.div>
          </Link>
        </div>

        {/* Navbar Toggle */}
      </div>
    </motion.header>
  );
};

export default Header;
