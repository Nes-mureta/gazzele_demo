"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import studentWithLaptop from "@/assets/student-with-laptop.png";

// Navigation component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroActiveOnLg, setIsHeroActiveOnLg] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateNavbarState = () => {
      const isLgScreen = window.matchMedia("(min-width: 1024px)").matches;

      if (!isLgScreen) {
        setIsHeroActiveOnLg(false);
        return;
      }

      const hero = document.getElementById("home");
      if (!hero) {
        setIsHeroActiveOnLg(false);
        return;
      }

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const heroRect = hero.getBoundingClientRect();
      const isOverHero = heroRect.top <= navHeight && heroRect.bottom > navHeight;
      setIsHeroActiveOnLg(isOverHero);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", updateNavbarState);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed p-2 w-full z-50 transition-all duration-300 ${
        isHeroActiveOnLg
          ? "bg-white shadow-md lg:bg-transparent lg:shadow-none"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-2xl font-bold text-[#ff00ff]">
            Gazelle
            </span> {""}
            <span className={isHeroActiveOnLg ? "lg:text-white text-gray-900" : "text-gray-900"} >
               Demo
            </span>{" "}
            <span className={isHeroActiveOnLg ? "lg:text-white text-gray-900" : "text-gray-900"}>
              University
            </span>

          </div>

          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHeroActiveOnLg ? "lg:text-white text-gray-800" : "text-gray-800"
                } hover:text-[#ff00ff]`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#ff00ff] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#d400d4] transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 font-medium hover:text-[#ff00ff]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#ff00ff] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#d400d4] transition-colors text-center"
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  const floatingIconAnimations = [
    { animation: "floating-hover 3.1s ease-in-out 0.18s infinite" },
    { animation: "floating-hover-alt 3.85s ease-in-out 1.02s infinite" },
    { animation: "floating-hover 4.2s ease-in-out 0.44s infinite reverse" },
    { animation: "floating-hover-alt 3.35s ease-in-out 1.3s infinite reverse" },
    { animation: "floating-hover-spin 4.05s ease-in-out 0.72s infinite" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff00ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              
              <span className="block text-[#ff00ff]">Customer Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10">
              Transform your career with expert-led training in Genesys customer
              experience technology. Join thousands of professionals advancing in
              the CX industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#ff00ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d400d4] transition-all hover:scale-105 inline-block text-center"
              >
                Get Started
              </a>
              <a
                href="#programs"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#1a1a2e] transition-all inline-block text-center"
              >
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "10K+", label: "Students" },
                { number: "500+", label: "Courses" },
                { number: "98%", label: "Satisfaction" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#ff00ff]">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 mt-1 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with Floating Icons */}
          <div className="relative hidden md:block">
            {/* Main Person with Laptop Image */}
            <div className="relative z-10">
              <Image
                src={studentWithLaptop}
                alt="Student with laptop"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                priority
              />
            </div>

            {/* Floating Icons */}
            {/* Icon 1 - Top Left */}
            <div
              className="absolute -top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-lg floating-icon"
              style={floatingIconAnimations[0]}
            >
              <svg className="w-8 h-8 text-[#ff00ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Icon 2 - Top Right */}
            <div
              className="absolute top-16 -right-4 z-20 bg-white p-3 rounded-xl shadow-lg floating-icon"
              style={floatingIconAnimations[1]}
            >
              <svg className="w-8 h-8 text-[#ff00ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Icon 3 - Bottom Left */}
            <div
              className="absolute bottom-24 -left-6 z-20 bg-white p-3 rounded-xl shadow-lg floating-icon"
              style={floatingIconAnimations[2]}
            >
              <svg className="w-8 h-8 text-[#ff00ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            {/* Icon 4 - Bottom Right */}
            <div
              className="absolute bottom-12 right-8 z-20 bg-white p-3 rounded-xl shadow-lg floating-icon"
              style={floatingIconAnimations[3]}
            >
              <svg className="w-8 h-8 text-[#ff00ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Icon 5 - Center */}
            <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-[#ff00ff] p-4 rounded-full shadow-lg floating-icon"
                style={floatingIconAnimations[4]}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ff00ff] font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Pioneering Genesys CX Education Excellence
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Gazelle Demo University is a leading educational institution
              dedicated to transforming how professionals approach customer
              experience. As an authorized Genesys partner, we provide
              cutting-edge training that empowers individuals and organizations
              to deliver exceptional customer journeys.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between technology and human
              connection, equipping learners with the skills needed to thrive
              in the rapidly evolving CX landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Expert Led</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Industry Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#ff00ff]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Community</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#ff00ff]/20 to-[#ff00ff]/5 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                alt="Students learning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#ff00ff] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-500 text-sm">Courses Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Programs Section
function Programs() {
  const programs = [
    {
      title: "Genesys Cloud Fundamentals",
      description:
        "Master the basics of Genesys Cloud platform, including routing, workflows, and basic administration.",
      icon: "☁️",
      duration: "4 Weeks",
      level: "Beginner",
    },
    {
      title: "Advanced CX Architecture",
      description:
        "Deep dive into complex call flows, integration patterns, and enterprise-level deployment strategies.",
      icon: "🏗️",
      duration: "8 Weeks",
      level: "Advanced",
    },
    {
      title: "Genesys IVR & Speech Design",
      description:
        "Learn to design intuitive IVR menus and speech recognition systems that enhance customer experience.",
      icon: "🎙️",
      duration: "6 Weeks",
      level: "Intermediate",
    },
    {
      title: "Analytics & Reporting Mastery",
      description:
        "Master Genesys analytics tools to create actionable insights and improve operational efficiency.",
      icon: "📊",
      duration: "5 Weeks",
      level: "Intermediate",
    },
    {
      title: "Workforce Management",
      description:
        "Learn forecasting, scheduling, and real-time management techniques for optimal staff utilization.",
      icon: "👥",
      duration: "4 Weeks",
      level: "Intermediate",
    },
    {
      title: "CX Consulting Professional",
      description:
        "Comprehensive program covering customer experience strategy, design thinking, and transformation.",
      icon: "💼",
      duration: "12 Weeks",
      level: "Professional",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff00ff] font-medium text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Comprehensive Genesys CX Training
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from our range of specialized programs designed to take
            your Genesys expertise to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff00ff] transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  <span className="font-medium">Duration:</span>{" "}
                  {program.duration}
                </span>
                <span className="px-3 py-1 bg-[#ff00ff]/10 text-[#ff00ff] rounded-full font-medium">
                  {program.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center text-[#ff00ff] font-semibold hover:underline"
          >
            View All Programs
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CX Manager",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Gazelle Demo University transformed my career. The Genesys training was comprehensive and practical. I went from beginner to managing enterprise deployments in just 6 months!",
    },
    {
      name: "Michael Chen",
      role: "Solutions Architect",
      company: "CloudFirst Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The instructors are world-class. They don't just teach Genesys - they teach you how to think about customer experience. Best investment I've made in my career.",
    },
    {
      name: "Emily Rodriguez",
      role: "Contact Center Director",
      company: "Global Services Ltd.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Our entire team benefited from the training. We reduced average handling time by 40% and customer satisfaction scores skyrocketed. Highly recommended!",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff00ff] font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our Genesys CX training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.role} at {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#ff00ff] font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-400 mb-8">
              Get in touch with our admissions team to learn more about our
              Genesys CX programs and find the right path for your career.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ff00ff]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email Us</div>
                  <div className="text-white font-medium">
                    admissions@gazelledemo.edu
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ff00ff]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Call Us</div>
                  <div className="text-white font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ff00ff]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff00ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Visit Us</div>
                  <div className="text-white font-medium">
                    123 Innovation Drive, Tech Valley, CA 94025
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Interested Program
                </label>
                <select
                  id="program"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]/20 outline-none transition-all"
                >
                  <option value="">Select a program</option>
                  <option value="fundamentals">Genesys Cloud Fundamentals</option>
                  <option value="architecture">Advanced CX Architecture</option>
                  <option value="ivr">Genesys IVR & Speech Design</option>
                  <option value="analytics">Analytics & Reporting Mastery</option>
                  <option value="wfm">Workforce Management</option>
                  <option value="consulting">CX Consulting Professional</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff00ff] focus:ring-2 focus:ring-[#ff00ff]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your goals and questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff00ff] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#d400d4] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Programs: [
      "Genesys Cloud Fundamentals",
      "Advanced CX Architecture",
      "IVR & Speech Design",
      "Analytics & Reporting",
    ],
    Company: ["About Us", "Careers", "News", "Partners"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white">
              Gazelle<span className="text-[#ff00ff]">Demo</span> University
            </a>
            <p className="mt-4 mb-6">
              Empowering professionals with world-class Genesys customer
              experience education. Transform your career with expert-led
              training.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff00ff] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#ff00ff] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Gazelle Demo University. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">Powered by</span>
            <span className="text-[#ff00ff] font-semibold">Genesys</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
