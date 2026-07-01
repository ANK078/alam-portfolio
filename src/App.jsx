import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Cpu,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  User,
  Calendar,
  Globe,
  Award,
  Users,
  FileText,
} from 'lucide-react';
import AdsterraBanner from "./components/AdsterraBanner";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    'About',
    'Experience',
    'Projects',
    'Skills',
    'Awards',
    'Education',
    'References',
    'Contact',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-blue-900 tracking-tight">
              Dr. Alam Nawaz
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Nav Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 h-screen overflow-y-auto pb-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-4 border-b border-slate-50 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                Bridging Process Engineering & Digital Systems
              </h1>
              <p className="text-xl sm:text-2xl font-light text-blue-100 mb-8 leading-relaxed">
                PhD Chemical Engineer | AI & Software Systems Developer
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg transition-colors shadow-lg flex items-center"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="https://scholar.google.com/citations?user=Alam_Nawaz"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-colors flex items-center"
                >
                  Google Scholar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Profile Photo - Using initials avatar, replace URL with actual photo */}
            <div className="md:w-1/3 flex justify-center md:justify-end shrink-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-white/10 backdrop-blur-sm shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Dr. Alam Nawaz"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-1 bg-blue-500 mr-4 rounded"></div>
                About Me
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed" style={{ textAlign: 'justify' }}>
                I am a PhD-qualified Chemical Engineer with an interdisciplinary
                profile combining advanced process engineering expertise and
                modern software and IoT systems development. I bring strong
                analytical capability, research depth, and hands-on technical
                execution across industrial engineering and digital technology
                domains.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed" style={{ textAlign: 'justify' }}>
                My applied experience includes wastewater treatment design,
                biological nitrogen removal (including Anammox systems), control
                strategy development, simulation-based validation, and
                industrial performance optimization.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed" style={{ textAlign: 'justify' }}>
                In parallel, I have developed solid expertise in software
                engineering and digital infrastructure design. I am proficient
                in Python for backend development; Node.js for API services;
                ReactJS/React Native for applications; and MongoDB for
                distributed databases. I specialize in implementing real-time
                IoT systems using MQTT, secure WebSockets, and cloud deployment.
              </p>
            </div>

            {/* Personal Details */}
            <div className="mt-10 lg:mt-0 lg:w-1/3">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-500" />
                    Personal Details
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Visa Status - F2
                    </p>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Date of Birth
                    </p>
                    <p className="text-slate-700 font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400" /> 28
                      Jan 1984
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Nationality
                    </p>
                    <p className="text-slate-700 font-medium flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-slate-400" /> Indian
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Father's Name
                    </p>
                    <p className="text-slate-700 font-medium">
                      Mr. Muhammad Tariq Khan
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Temporary Address (Korea)
                    </p>
                    <p className="text-slate-600 text-sm">
                      8, Nongdae-ro 8beon-gil
                      <br />
                      Yuseong-gu, Daejeon, 
                      <br />
                      Rep. of Korea 34139
                      <br />
                      대전광역시 유성구 농대로8번길 8
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Permanent Address (India)
                    </p>
                    <p className="text-slate-600 text-sm">
                      Gadi Khana Jalil Marg,
                      <br />
                      Fatehgarh, Farrukhabad, 
                      <br />
                      209601 U.P. INDIA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Ad run  */}            
            <AdsterraBanner />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center justify-center">
            <Briefcase className="mr-3 text-blue-500" />
            Professional Experience
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* Experience 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Code className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">
                    Researcher - AI & Software Systems
                  </h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    Mar 2024 - Present
                  </span>
                </div>
                <h4 className="text-md text-slate-600 font-medium mb-3">
                  Sherpa Space Inc. • Daejeon, Rep. of Korea
                </h4>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-slate-300" style={{ textAlign: 'justify' }}>
                  <li>
                    Developing IoT-based precision agriculture monitoring
                    systems utilizing environmental/soil sensors.
                  </li>
                  <li>
                    Designing real-time data transmission architectures with
                    MQTT and secure WebSocket (WSS).
                  </li>
                  <li>
                    Building robust backend systems via Python, Node.js, and
                    MongoDB for sensor data processing.
                  </li>
                  <li>
                    Creating mobile/web platforms using ReactJS and React Native
                    for actionable monitoring.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">
                    Assistant Professor
                  </h3>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    Mar 2021 - Feb 2024
                  </span>
                </div>
                <h4 className="text-md text-slate-600 font-medium mb-3">
                  Yeungnam University • Rep. of Korea
                </h4>
                <p className="text-sm text-slate-600" style={{ textAlign: 'justify' }}>
                  Department of Chemical Engineering. Led academic instruction
                  and advanced research initiatives bridging chemical process
                  design and data-driven optimization strategies.
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-slate-900">
                    Post-Doctoral Researcher
                  </h3>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    Mar 2020 - Feb 2021
                  </span>
                </div>
                <h4 className="text-md text-slate-600 font-medium mb-3">
                  Yeungnam University • Rep. of Korea
                </h4>
                <p className="text-sm text-slate-600" style={{ textAlign: 'justify' }}>
                  Cleantech Institute & Dept of Chemical Engineering. Conducted
                  post-doctoral research focusing on advanced modeling, control
                  strategy development, and pilot-scale WWTP implementation.
                </p>
              </div>
            </div>

            {/* Academic / Earlier Experience Batch */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-400 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all">
                <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2">
                  Earlier Academic Roles (India)
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-800">
                        Lecturer - Computer Science
                      </h4>
                      <span className="text-xs text-slate-500">
                        Jan 2020 - Aug 2021
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      P.D. Mahila P.G. College, Fatehgarh, UP
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-800">
                        Computer Teacher & Olympiad In-charge
                      </h4>
                      <span className="text-xs text-slate-500">
                        Jul 2013 - Dec 2014
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Rosy Public School, Fatehgarh, UP
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-800">
                        Computer Teacher & Examiner
                      </h4>
                      <span className="text-xs text-slate-500">
                        Dec 2007 - Nov 2008
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      P.B.V.M. School, Fatehgarh, UP
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-800">
                        Chemistry Teacher
                      </h4>
                      <span className="text-xs text-slate-500">
                        Jul 2006 - Dec 2007
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      K.R. Memorial Public School, Fatehgarh, UP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Featured Projects & Research
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Industrial Projects */}

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Precision Agriculture IoT System
                </h3>
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded whitespace-nowrap">
                  Mar 2025 - Present
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                This system employs weather stations and soil sensors
                strategically placed in open-field agricultural areas to support
                AI-powered precision farming. By leveraging advanced IoT
                (Internet of Things) technologies, real-time data on
                environmental conditions—such as temperature, humidity,
                rainfall, soil moisture, pH, and nutrient levels—are
                continuously collected and transmitted to a central platform.
                The data undergoes sophisticated analysis and modeling using AI
                algorithms to accurately predict critical farming parameters,
                including optimal irrigation schedules, precise fertilizer
                requirements, and targeted pesticide application. This approach
                not only improves resource efficiency but also enhances crop
                health and yield by minimizing overuse or underuse of inputs.
                All insights and recommendations generated by the system are
                delivered through a user-friendly mobile or web application,
                empowering farmers with actionable guidance and automation
                capabilities. The integration of IoT sensor data, AI analytics,
                and intuitive app services creates a comprehensive precision
                agriculture solution tailored for sustainable and
                high-efficiency open-field farming.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  React Native
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Python
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  MongoDB
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  MQTT
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Image Analysis
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Computer Vision
                </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Sherpa Vision AI Solution
                </h3>
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded whitespace-nowrap">
                  Jul 2024 - Mar 2025
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                Sherpa Vision is an advanced smart farming solution that
                integrates both a Depth Camera and a Thermal Imaging Camera to
                enable precise monitoring and analysis of individual plants. By
                utilizing depth sensing and thermal imaging technologies, it can
                recognize each plant and assess its growth status in real time.
                This intelligent system offers more than just visual analysis.
                It continuously records comprehensive environmental data, such
                as temperature, humidity, and other critical variables, to
                provide a complete overview of growing conditions. Through this
                data-driven approach, Sherpa Vision delivers a comprehensive
                growth diagnosis service, helping farmers and researchers
                identify issues early, optimize growing environments, and
                improve crop yield and quality. In essence, Sherpa Vision is a
                holistic, AI-powered plant monitoring system that supports smart
                agriculture by combining visual recognition, real-time
                analytics, and environmental sensing into a single,
                user-friendly platform.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Computer Vision
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  AI Analytics
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  IoT
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Integrated LCA-TEA Platform
                </h3>
                <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-1 rounded whitespace-nowrap">
                  May 2022 - Dec 2022
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                The project focused on developing an integrated digital platform
                that combines Life Cycle Assessment (LCA) and Techno-Economic
                Analysis (TEA) using Aspen Plus process simulation modeling. The
                main objective was to enable simultaneous evaluation of economic
                feasibility and environmental impact for chemical process
                systems through a unified computational platform. The system
                architecture was designed around a Python-based backend server
                and a MongoDB database, enabling efficient storage, management,
                and processing of large-scale process simulation data. The
                platform automatically connects process simulation outputs from
                Aspen modeling to environmental analysis tools such as openLCA,
                allowing lifecycle environmental impact calculations to be
                performed directly from process simulation results.
                <p
                  className="text-slate-600 text-sm mb-6 leading-relaxed"
                  style={{ textAlign: 'justify' }}
                >
                  Key functional capabilities of the platform include:
                  <br />
                  • Automated process simulation integration, where process
                  stream data and operating conditions generated in Aspen Plus
                  are automatically transferred to the platform database for
                  further analysis.
                  <br />
                  • Techno-Economic Analysis (TEA) module, which calculates
                  capital expenditure (CAPEX), operating expenditure (OPEX), and
                  economic indicators such as Net Present Value (NPV), Internal
                  Rate of Return (IRR), and payback period based on process
                  equipment and operational data.
                  <br />
                  • Life Cycle Assessment (LCA) module, enabling environmental
                  impact evaluation including carbon emissions, energy
                  consumption, and lifecycle environmental indicators using
                  standardized LCA databases.
                  <br />
                  • Integrated database management system, which stores process
                  streams, equipment parameters, economic data, and
                  environmental datasets in a centralized MongoDB structure for
                  scalable and efficient data processing.
                  <br />• User-friendly graphical interface, allowing users to
                  configure process parameters, run economic and environmental
                  analyses, and visualize results through an integrated
                  web-based platform.
                </p>
                By integrating process simulation, environmental evaluation, and
                economic analysis into a single framework, the platform provides
                a comprehensive decision-support tool for sustainable chemical
                process development. The system enables engineers and
                researchers to identify optimal process conditions that balance
                cost efficiency and environmental sustainability, thereby
                supporting environmentally responsible industrial innovation and
                advanced process optimization.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Aspen Plus
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Python Backend
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  openLCA
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  ICT based ANFIS Pineapple Cropping
                </h3>
                <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-1 rounded whitespace-nowrap">
                  Nov 2021 - Apr 2023
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                <p
                  className="text-slate-600 text-sm mb-6 leading-relaxed"
                  style={{ textAlign: 'justify' }}
                >
                  The project is specifically designed to enhance and optimize
                  pineapple cultivation through the integration of intelligent
                  technologies, with a core focus on the ANFIS (Adaptive
                  Neuro-Fuzzy Inference System) algorithm. ANFIS combines the
                  learning capabilities of artificial neural networks with the
                  reasoning capabilities of fuzzy logic, enabling a powerful
                  decision-making system that adapts to real-world farming
                  conditions. At its heart, the application serves as a smart
                  farming assistant, helping pineapple farmers manage their
                  crops more efficiently and effectively. It offers a suite of
                  intelligent features that support day-to-day farming
                  activities, including: Key functional capabilities of the
                  platform include:
                  <br />
                  • Real-time weather-based alarms and alerts to notify farmers
                  of potentially harmful environmental conditions such as
                  extreme heat, cold, or rainfall, allowing them to take timely
                  protective actions.
                  <br />
                  • AI-powered disease prediction, which analyzes sensor data
                  and plant health indicators to detect early signs of disease
                  or stress in pineapple crops. This enables preventive
                  treatment and minimizes yield loss.
                  <br />
                  • Automated irrigation control, which uses real-time soil and
                  climate data to determine the optimal watering schedule,
                  conserving water resources and ensuring healthy crop
                  development.
                  <br />
                  • By integrating environmental sensors, AI models, and
                  automation tools, the system provides a comprehensive decision
                  support platform tailored specifically for pineapple farming.
                  It empowers farmers with data-driven insights, predictive
                  analytics, and proactive recommendations, leading to increased
                  productivity, reduced resource wastage, and improved crop
                  quality.
                  <br />
                  In summary, this project leverages ANFIS and smart agriculture
                  technologies to transform traditional pineapple farming into a
                  sustainable, intelligent, and high-yielding agricultural
                  practice.
                </p>
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  ANFIS
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Fuzzy Logic
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  AI
                </span>
              </div>
            </div>

            {/* Research & KOGAS Projects */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-purple-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Smart Farm Plant Cultivation Model
                </h3>
                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded whitespace-nowrap">
                  Mar 2020 - Dec 2022
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                Ph.D. research focused on fine-tuning the wavelength of light
                using quantum dot nanoparticles on LED backlights.
                App-controlled mechanical adjustments of light sources allow
                elaborate optimization specifically tailored for different plant
                growth stages.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Quantum Dots
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Embedded Systems
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  App Development
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-purple-300 transition-colors group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  KOGAS LNG Optimization Systems
                </h3>
                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded whitespace-nowrap">
                  2013 - 2019
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                <strong>Excel Optimization of Cryogenic Process:</strong>{' '}
                Reduced LNG compression energy using MCD algorithm via Excel-VB
                integration with Aspen HYSYS. The numerical method was
                implemented in Visual Basic (VB) and embedded within a Microsoft
                Excel-based interface for user-friendly control and monitoring.
                The approach enabled the engineering team to execute complex
                optimization tasks without the need for advanced external
                software environments. <br />
                <strong>ODESSEY System:</strong> Developed a robust optimization
                system for LNG process compression power utilizing the MCD
                algorithm coded in VB within Visual Studio. <br />
                <br />
                As a result, the integration of the MCD optimization engine with
                the HYSYS-simulated models led to a significant reduction in
                energy usage, improving both operational efficiency and
                environmental sustainability. The solution demonstrated the
                feasibility of applying Excel-VB optimization tools to
                real-world industrial cryogenic systems.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Aspen HYSYS
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  Visual Basic (VB)
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  MCD Algorithm
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 transition-colors group h-full flex flex-col md:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Smart ANAMMOX SBR System
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded whitespace-nowrap">
                  Mar 2016 - Sep 2019
                </span>
              </div>
              <p
                className="text-slate-600 text-sm mb-6 leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                Funded by Doosan Heavy Industrial Ltd. Applied optimal control
                strategies, SCADA integration, and parameter estimation to an
                ANAMMOX wastewater treatment process to achieve 90% nitrogen
                removal. Built with C# and MATLAB.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  C# (.NET)
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  MATLAB
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  SCADA
                </span>
              </div>
            </div>

            {/* Software MCA Projects */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 transition-colors group h-full flex flex-col md:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Software MCA Projects
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded whitespace-nowrap">
                  2010 - 2012
                </span>
              </div>
              <ul className="text-slate-600 text-sm mb-6 space-y-3 leading-relaxed list-disc pl-4">
                <li>
                  <strong>Organized Flour Mill (OFM):</strong> ASP.NET & SQL
                  Server portal for automating milling processes and sales.
                </li>
                <li>
                  <strong>Network Marketing:</strong> Windows application via C#
                  & SQL Server for market operations and sales management.
                </li>
                <li>
                  <strong>Drugs Management System:</strong> C# Windows app to
                  automate inventory, purchases, and crystal reports for
                  pharmacies.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  C# / ASP.NET
                </span>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                  MS SQL Server
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Software & Web</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Python</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-blue-400 w-11/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Node.js</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-blue-400 w-9/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">ReactJS / React Native</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-blue-400 w-10/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">C# (.NET) / ASP.NET</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-blue-400 w-10/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">C / C++ / VB 6.0</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-blue-400 w-8/12"></span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT, Cloud & Data</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">MongoDB</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-emerald-400 w-10/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">MS SQL / Oracle 8i/9i</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-emerald-400 w-10/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">MQTT / WebSockets</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-emerald-400 w-11/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">AWS / Naver Cloud</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-emerald-400 w-9/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Sensor Integration</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-emerald-400 w-9/12"></span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Engineering & Design
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">MATLAB / Maple</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-purple-400 w-11/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Aspen Plus / Hysys</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-purple-400 w-11/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">ANAMMOX Systems</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-purple-400 w-10/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Process Control</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-purple-400 w-9/12"></span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Photoshop / Corel Draw</span>{' '}
                  <span className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <span className="block h-full bg-purple-400 w-7/12"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Book Chapters */}
      <section id="awards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Awards & Grants */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <Award className="mr-3 text-blue-500" />
                Awards & Grants
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 shadow-sm flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Best Poster Award
                    </h3>
                    <p className="text-sm text-slate-600">
                      19th International Symposium on Clean Technology (Nov
                      2019)
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 shadow-sm flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Best Poster Award
                    </h3>
                    <p className="text-sm text-slate-600">
                      Asia Pacific Gas Conference (Oct 2016)
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 shadow-sm flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Brain Korea Scholarship
                    </h3>
                    <p className="text-sm text-slate-600">
                      Awarded for pursuing PhD (Sep 2015)
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-2 text-sm">
                    University Sports & Extracurricular Awards
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    <li>Open University Common Room Game Fiesta (Mar 2013)</li>
                    <li>Captain Table Tennis (Apr 2006)</li>
                    <li>Inter Hall Cricket Tournaments (2003, 2004, 2005)</li>
                    <li>Annual Common Room Championship (Mar 2005)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Book Chapters & Seminars */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <BookOpen className="mr-3 text-blue-500" />
                Book Chapters & Seminars
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">
                    Published Book Chapters
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                        Role of ionic liquids in bioactive compounds extractions
                        and applications
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Advanced Applications of Ionic Liquids (Pages 247-284) •
                        Jan 2023
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                        Chapter 26 - Development of Smart AnAmmOx System and Its
                        Agile Operation and Decision Support for Pilot-Scale
                        WWTP
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Soft Computing Techniques in Solid Waste and Wastewater
                        Management (Pages 423-454) • Oct 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">
                    Seminars Delivered
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-slate-400">
                    <li>ANAMMOX SCADA system.</li>
                    <li>Seminar lecture on the topic "Two Solid Membranes".</li>
                    <li>
                      Seminar on automated flour system software for transparent
                      transaction processing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Publications */}
      <section
        id="education"
        className="py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <GraduationCap className="mr-3 text-blue-500" />
                Education
              </h2>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-5 before:h-full before:w-0.5 before:bg-slate-200">
                <div className="relative flex items-center pl-10 md:pl-12">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full bg-blue-500 shadow border-2 border-white"></div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm w-full">
                    <h3 className="font-bold text-lg text-slate-800">
                      Ph.D. in Chemical Engineering
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      Yeungnam University, South Korea • 2020 • Credit: 4.2 /
                      4.5
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center pl-10 md:pl-12">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full bg-blue-400 shadow border-2 border-white"></div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm w-full">
                    <h3 className="font-bold text-lg text-slate-800">
                      M.C.A. in Computer Science (First Grade)
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      Integral University, Lucknow, India • 2012 • Credit: 76.7
                      / 100
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center pl-10 md:pl-12">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full bg-slate-400 shadow border-2 border-white"></div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm w-full">
                    <h3 className="font-bold text-lg text-slate-800">
                      P.G. Diploma in IT (First Grade)
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      SITD, Lucknow, India • 2009 • Credit: 64 / 100
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center pl-10 md:pl-12">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full bg-slate-400 shadow border-2 border-white"></div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm w-full">
                    <h3 className="font-bold text-lg text-slate-800">
                      M.Sc. Physical Chemistry (First Grade)
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      Aligarh Muslim University, India • 2006 • Credit: 61.5 /
                      100
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center pl-10 md:pl-12">
                  <div className="absolute left-3.5 w-3 h-3 rounded-full bg-slate-400 shadow border-2 border-white"></div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm w-full">
                    <h3 className="font-bold text-lg text-slate-800">
                      B.Sc. Hons Chemistry (First Grade)
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                      Aligarh Muslim University, India • 2003 • Credit: 60.5 /
                      100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Publications */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <BookOpen className="mr-3 text-blue-500" />
                Selected Publications
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title:
                      'Ingredient analysis of biological wastewater using hybrid multi-stream deep learning framework',
                    journal: 'Computers & Chemical Engineering',
                    year: '2022',
                  },
                  {
                    title:
                      'Intelligent human-machine interface: An agile operation and decision support for an ANAMMOX SBR system...',
                    journal: 'IEEE Transactions on Industrial Informatics',
                    year: '2022',
                  },
                  {
                    title:
                      'Advanced predicting technique for optimal operation of wastewater treatment process: A ProActive scheduling approach',
                    journal: 'Journal of Cleaner Production',
                    year: '2021',
                  },
                  {
                    title:
                      'Optimization of mixed fluid cascade LNG process using a multivariate Coggins step-up approach',
                    journal: 'International Journal of Refrigeration',
                    year: '2019',
                  },
                ].map((pub, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start"
                  >
                    <span className="w-8 h-8 rounded bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 mr-4 text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
                        {pub.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  </div>
                ))}
                <a
                  href="https://scholar.google.com/citations?user=Alam_Nawaz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                >
                  View all 20+ publications on Google Scholar{' '}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section
        id="references"
        className="py-20 bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center">
            <Users className="w-8 h-8 mr-3 text-blue-500" />
            Academic & Professional Referees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900">
                Dr. Moonyong Lee
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4">
                Professor, Dept of Chemical Engineering
              </p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Yeungnam University, Rep. of Korea</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:mynlee@ynu.ac.kr"
                    className="text-blue-600 hover:underline"
                  >
                    mynlee@ynu.ac.kr
                  </a>
                </p>
                <p>Mobile: +82-10-3527-8419</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900">
                Dr. Choa Mun Yun
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4">
                CEO, Sherpa Space Inc.
              </p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Daejeon, Rep. of Korea</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:cmunyun@sherpaspace.co.kr"
                    className="text-blue-600 hover:underline"
                  >
                    cmunyun@sherpaspace.co.kr
                  </a>
                </p>
                <p>Mobile: +82-10-5041-9660</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900">
                Dr. Mohammad Faisal
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4">
                Professor & HOD, Dept of Computer Science
              </p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Integral University, Lucknow, U.P. India</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:headca@iul.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    headca@iul.ac.in
                  </a>
                </p>
                <p>Mobile: +91-99-8417-1083</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900">
                Dr. Mohammad Muqeem
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4">
                Professor, Dept of Computer Science
              </p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Sandip University, Nashik, M.P. India</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:muqeem.79@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    muqeem.79@gmail.com
                  </a>
                </p>
                <p>Mobile: +91-94-5002-2699</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-slate-300 mb-12 font-light">
            I am currently open to academic, industrial, and technology-focused
            roles globally, particularly in process engineering, industrial
            digitalization, IoT systems, backend and full-stack development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-slate-800 border border-slate-700 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:alam.chem@gmail.com"
                className="text-blue-400 text-sm hover:underline"
              >
                alam.chem@gmail.com
              </a>
              <a
                href="mailto:info@sherpaspace.co.kr"
                className="text-slate-400 text-sm hover:underline mt-1"
              >
                info@sherpaspace.co.kr
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-slate-800 border border-slate-700 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-slate-300 text-sm">
                +82-10-2641-0786 (Personal)
              </p>
              <p className="text-slate-400 text-sm mt-1">
                +82-070-8805-4950 (Office)
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-slate-800 border border-slate-700 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-slate-300 text-sm text-center">
                48, Techno 8-ro, Yuseong-gu,
                <br />
                Daejeon, Rep. of Korea 34028
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Dr. Alam Nawaz. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
