import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, ChevronDown, Award, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeModal, setActiveModal] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const openModal = (projectId) => {
    setActiveModal(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const projects = [
    {
      id: 'nexus-trading',
      title: "Nexus Trading Platform",
      subtitle: "AI-Powered Stock Analysis with Premium Dark UI",
      description: "Full-stack stock analysis platform featuring real-time market data, AI-powered buy/sell recommendations, and a unique premium dark luxury UI with custom cursor, 3D tilt cards, heat maps, and Bloomberg Terminal-inspired design. Built with React, Node.js, MongoDB, and Alpha Vantage API.",
      tech: ["React 18", "Node.js", "Express", "MongoDB", "Alpha Vantage API", "Railway", "Vercel", "Custom CSS"],
      link: "https://nexustrading.vercel.app",
      github: "https://github.com/Rubysage20/stock-analysis-tool",
      color: "from-yellow-400 to-emerald-400",
      
      problemStatement: "Individual investors lack access to professional-grade trading tools and AI-powered insights available to institutional traders. Most retail trading platforms have generic blue interfaces and limited technical analysis. Nexus Trading Platform democratizes access to advanced stock analysis by providing real-time data, intelligent recommendations, and a distinctive premium UI that stands apart from conventional financial applications.",
      
      keyFeatures: [
        {
          title: "AI-Powered Smart Recommendations",
          description: "Multi-factor recommendation engine analyzing RSI (Relative Strength Index), MACD (Moving Average Convergence Divergence), and trend analysis to generate BUY/SELL/HOLD signals. Algorithm calculates confidence scores by evaluating technical indicators: RSI < 30 (oversold, +2 points), RSI > 70 (overbought, -2 points), MACD crossovers (+2/-2 points), and price momentum (+1/-1 points). Final recommendations range from STRONG BUY (≥4 points) to STRONG SELL (≤-4 points) with detailed bullish/bearish signal explanations."
        },
        {
          title: "Real-Time Market Data Integration",
          description: "Alpha Vantage API integration providing live stock quotes (price, volume, daily change), 30-day historical charts with area gradients, technical indicators (RSI, MACD, SMA 50/200), and market statistics. Implements sequential loading strategy with 13-second delays between API calls to manage rate limits (5 calls/minute, 500/day) while maintaining responsive user experience through progressive data display."
        },
        {
          title: "Premium Dark Luxury UI",
          description: "Unique Bloomberg Terminal-inspired design featuring custom crosshair cursor, 3D tilt card effects with holographic shimmer, animated particle background (30 floating particles), confetti celebrations for buy signals, and distinctive Black/Gold/Emerald color palette. Over 800 lines of custom CSS including 3D perspective transforms, keyframe animations, and advanced gradient techniques - completely different from typical blue gradient portfolios."
        },
        {
          title: "Interactive Market Heat Map",
          description: "Visual market overview displaying 8+ stocks in color-coded grid. Dynamic cell colors indicate performance: bright green (>3% gain), light green (0-3% gain), light red (0-3% loss), bright red (>3% loss). Click any cell for instant detailed analysis. Updates in real-time as market data refreshes, providing at-a-glance portfolio monitoring."
        },
        {
          title: "Live Scrolling Ticker",
          description: "Bloomberg-style infinite scrolling ticker showing real-time prices, percentage changes, and mini sparkline charts for each stock. Smooth CSS animations create professional trading floor atmosphere. Duplicated stock array ensures seamless infinite scroll with no gaps or stuttering."
        },
        {
          title: "Split-Screen Stock Comparison",
          description: "Side-by-side analysis tool comparing two stocks simultaneously. Left panel (green gradient) displays primary stock, right panel (gold gradient) shows comparison stock. Both panels include real-time quotes, volume data, 30-day charts, and individual metrics. Enables direct performance comparison for investment decisions."
        },
        {
          title: "Demo & Live Modes",
          description: "Dual deployment strategy: Demo version (deployed to Vercel) uses realistic test data for unlimited portfolio showcase access with instant loading and zero API limits. Live version (App-LIVE.js) connects to Railway backend with real Alpha Vantage integration, demonstrating production API handling, rate limiting, and error management. Both versions maintain identical UI/UX."
        }
      ],
      
      technicalImplementation: {
        frontend: "React 18 with functional components and hooks (useState, useEffect, useCallback, useRef) for state management. Recharts library for responsive area charts with custom gradients. Lucide-react for consistent iconography. Custom CSS featuring 3D perspective transforms (perspective(1000px), rotateX/rotateY), keyframe animations for particles/ticker/confetti, custom cursor with ::before pseudo-element, and advanced gradient techniques. Axios HTTP client with interceptors for error handling. Progressive data loading showing quote immediately, then chart after 13s delay, then AI recommendation after another 13s.",
        
        backend: "Node.js with Express framework providing RESTful API. MongoDB Atlas integration via Mongoose ODM for watchlist and portfolio persistence. Alpha Vantage service layer handling five API endpoints: GLOBAL_QUOTE (real-time quotes), TIME_SERIES_DAILY (30-day history), RSI (Relative Strength Index), MACD (convergence/divergence), and SMA (Simple Moving Average). Custom recommendation engine aggregating technical indicators into actionable signals. Rate limit management with sequential API calls spaced 13 seconds apart to respect 5 calls/minute constraint.",
        
        api: "Three main routes: /api/stocks/quote/:symbol (current price/volume/change), /api/stocks/chart/:symbol (30-day historical data), /api/stocks/recommendation/:symbol (AI analysis with RSI/MACD/SMA). Error handling for invalid symbols, rate limit exceeded responses, and API downtime. CORS configuration allowing cross-origin requests from Vercel frontend to Railway backend.",
        
        database: "MongoDB Atlas cloud database with two collections: Watchlists (user's tracked stocks with target prices and notes) and Portfolios (held positions with quantity, purchase price, current value). Mongoose schemas with validation rules. Indexes on userId and symbol fields for query optimization.",
        
        deployment: "Frontend deployed to Vercel with automatic GitHub deployments, environment-based API URL configuration, and production build optimization. Backend deployed to Railway with environment variables (PORT, MONGODB_URI, ALPHA_VANTAGE_API_KEY), containerized Node.js runtime, and automatic scaling. MongoDB hosted on Atlas free tier (M0 cluster). CI/CD pipeline triggering on Git push to main branch."
      },
      
      challengesSolved: [
        {
          title: "Alpha Vantage Rate Limit Management",
          description: "Free tier restricts to 5 API calls per minute and 500 per day. Implemented sophisticated sequential loading: load quote immediately (1 call), wait 13 seconds, load chart (1 call), wait 13 seconds, load recommendation which makes 3 calls internally (RSI, MACD, SMA). Added cancellation logic using clearTimeout to stop pending background loads when user switches stocks, preventing wasted API calls. Displays progressive loading indicators ('Loading chart...', 'Analyzing with AI...') to maintain user engagement during delays."
        },
        {
          title: "MongoDB Connection String Security Breach",
          description: "Accidentally committed .env file with MongoDB credentials to GitHub, exposing database password publicly. GitGuardian detected and alerted immediately. Resolved by: (1) changing MongoDB password in Atlas, (2) removing .env from Git history using git filter-branch, (3) properly configuring .gitignore to exclude .env files, (4) updating environment variables in Railway deployment, and (5) verifying credentials removed from GitHub. Learned critical lesson about secrets management and .gitignore setup before initial commit."
        },
        {
          title: "Custom Cursor Z-Index Conflicts",
          description: "Custom crosshair cursor disappeared behind modal overlays and navigation bars. Fixed by setting cursor container to position: fixed with z-index: 9999, ensuring it renders above all other elements. Used pointer-events: none to prevent cursor element from blocking clicks on underlying UI components."
        },
        {
          title: "3D Tilt Card Performance",
          description: "Initial implementation caused layout reflow on every mousemove event, creating janky animations. Optimized by using transform: perspective() and transform: rotateX/rotateY which trigger GPU acceleration instead of CPU-based layout recalculation. Debounced mousemove events and used requestAnimationFrame for smooth 60fps animations even with multiple cards on screen."
        },
        {
          title: "Vercel Build Configuration",
          description: "Initial deployment failed with 'react-scripts: command not found' because Vercel tried building from project root instead of frontend folder. Fixed by setting Root Directory to 'frontend' in Vercel dashboard settings. Alternative solution using vercel.json with custom buildCommand and outputDirectory for more complex monorepo setups."
        },
        {
          title: "CORS Policy Errors",
          description: "Frontend on Vercel (https://nexustrading.vercel.app) couldn't communicate with backend on Railway due to cross-origin restrictions. Configured Express CORS middleware to allow specific origin, proper HTTP methods (GET, POST, PUT, DELETE), and credentials for JWT authentication. Set Access-Control-Allow-Origin, Methods, and Headers appropriately."
        }
      ],
      
      whatILearned: [
        "Advanced CSS Techniques: Mastered 3D transforms with perspective, creating tilt effects using rotateX/rotateY based on mouse position, GPU-accelerated animations, custom cursor implementation, particle systems using absolute positioning, and gradient techniques including radial/linear gradients with multiple color stops.",
        "Rate Limit Strategies: Implemented sequential API loading with setTimeout delays, request cancellation using clearTimeout to prevent wasted calls, progressive UI updates to maintain engagement during loading, and graceful degradation when limits exceeded.",
        "Secrets Management Best Practices: Never commit .env files to version control, always configure .gitignore before initial commit, use environment variables for all sensitive data, rotate credentials immediately if exposed, and use git filter-branch to remove secrets from Git history.",
        "Full-Stack Production Deployment: Separate frontend (Vercel) and backend (Railway) deployments, environment-specific configurations, CORS setup for cross-origin communication, MongoDB Atlas cloud database management, and CI/CD pipelines with automatic deployments on Git push.",
        "External API Integration: Handling rate limits gracefully, error handling for API downtime, parsing complex JSON responses, sequential vs. parallel API calls trade-offs, and managing asynchronous data flow with React hooks.",
        "NoSQL Schema Design for Finance: Modeling stock watchlists and portfolios in MongoDB, when to embed vs. reference documents, indexing strategies for query performance, and aggregation pipelines for calculating statistics.",
        "UI/UX for Financial Applications: Bloomberg Terminal design patterns, data-dense layouts without overwhelming users, color psychology in trading (green=profit, red=loss), progressive disclosure of information, and maintaining professional aesthetic while being visually distinctive.",
        "React State Management: Using useState for component state, useEffect for side effects (API calls, timers), useCallback for memoized functions, useRef for DOM access and storing mutable values, and lifting state up to parent components for data sharing.",
        "Production Debugging: Reading error logs from deployment platforms (Vercel, Railway), debugging CORS issues with browser DevTools, identifying rate limit vs. authentication vs. network errors, and systematic troubleshooting approach.",
        "Git Workflow: Feature branches, meaningful commit messages, handling merge conflicts, undoing commits with git reset, removing files from history with git filter-branch, and maintaining clean Git history."
      ]
    },
    {
      id: 'aws-serverless',
      title: "AWS Serverless Quiz Application",
      subtitle: "CS 470 Capstone - Cloud Architecture Migration",
      description: "Full-stack quiz application demonstrating cloud-native migration from containerized architecture to AWS serverless infrastructure. Features 6 Lambda functions, API Gateway integration, and DynamoDB for automatic scaling.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Angular", "S3", "IAM"],
      github: "https://github.com/Rubysage20/CS470-FullStackII",
      color: "from-cyan-400 to-blue-400",
      
      problemStatement: "Traditional web applications require managing servers, handling scaling manually, and paying for resources 24/7 regardless of usage. This project demonstrates migrating a full-stack application from containerized deployment to a serverless, cloud-native architecture that automatically scales, reduces operational overhead, and operates on a pay-per-use model.",
      
      keyFeatures: [
        {
          title: "Multi-Category Quiz System",
          description: "Organized question library across programming topics (Angular, TypeScript, Angular CLI) with slug-based routing for easy navigation."
        },
        {
          title: "Six Serverless Lambda Functions",
          description: "TableScan for retrieving all questions/answers, GetSingleRecord for fetching by ID, FindOneQuestion for search, UpsertQuestion and UpsertAnswer for create/update operations, and DeleteRecord for deletions."
        },
        {
          title: "RESTful API with API Gateway",
          description: "AWS API Gateway providing secure, scalable endpoint management with HTTP method mapping (GET, POST, PUT, DELETE) to Lambda functions."
        },
        {
          title: "NoSQL Cloud Database",
          description: "DynamoDB tables for Questions and Answers with automatic scaling, partition key optimization, and on-demand capacity mode."
        },
        {
          title: "Cross-Origin Security",
          description: "CORS configuration enabling secure communication between S3-hosted frontend and API Gateway backend."
        },
        {
          title: "Static Asset Delivery",
          description: "S3 bucket with static website hosting configuration for Single Page Application routing."
        }
      ],
      
      technicalImplementation: {
        frontend: "Angular 7.2 Single Page Application with TypeScript, component-based architecture with lazy loading, Angular Material for UI components, environment-based configuration for dev/production endpoints, and optimized production builds with AOT compilation.",
        
        backend: "Six AWS Lambda functions with Node.js runtime handling all CRUD operations: TableScan (Scan operations), GetSingleRecord (GetItem), FindOneQuestion (Query), UpsertQuestion/UpsertAnswer (PutItem), and DeleteRecord (DeleteItem). Event-driven execution with automatic horizontal scaling.",
        
        api: "AWS API Gateway with RESTful endpoint design, resource-based routing, request/response transformation, CORS headers configuration, API throttling and key management, and Lambda proxy integration for seamless invocation.",
        
        database: "Amazon DynamoDB with two NoSQL tables (Questions and Answers), partition key strategy using 'id' as primary identifier, on-demand capacity mode for automatic scaling, and point-in-time recovery enabled for data protection.",
        
        security: "IAM roles and policies for service-to-service authentication, least-privilege access control, S3 bucket policies for static hosting, and CORS policies restricting cross-origin requests."
      },
      
      challengesSolved: [
        {
          title: "Serverless Migration Complexity",
          description: "Decomposed monolithic Node.js backend into six discrete Lambda functions while maintaining functionality. Required rethinking the entire architecture to be stateless and event-driven."
        },
        {
          title: "NoSQL Schema Redesign",
          description: "Migrated from MongoDB's flexible document model to DynamoDB's key-value structure. Designed partition key strategy for optimal performance and converted all queries from MongoDB syntax to DynamoDB SDK calls."
        },
        {
          title: "CORS Configuration",
          description: "Debugged cross-origin request issues between S3 static hosting and API Gateway. Configured proper CORS headers including Access-Control-Allow-Origin, Methods, and Headers."
        },
        {
          title: "Production Build Issues",
          description: "Resolved Node.js OpenSSL compatibility issues with legacy provider flag. Fixed Angular environment configuration to use production API endpoints and ensured proper directory structure for S3 deployment."
        },
        {
          title: "API Integration",
          description: "Connected Angular HTTP client to API Gateway endpoints with proper error handling, implemented token interceptors, and managed asynchronous data flow between frontend and serverless backend."
        }
      ],
      
      whatILearned: [
        "Cloud-Native Architecture: Deep understanding of serverless computing principles, event-driven design, stateless functions, and managed services.",
        "AWS Service Integration: Hands-on experience connecting Lambda, API Gateway, DynamoDB, S3, and IAM into a cohesive application architecture.",
        "Infrastructure as Code Mindset: Learning to think in terms of services and configurations rather than servers and deployments.",
        "Cost Optimization: Understanding pay-per-use pricing models and how serverless reduces costs by ~70% through eliminating idle resources.",
        "NoSQL Data Modeling: Trade-offs between document databases (MongoDB) and key-value stores (DynamoDB), particularly partition key design strategies.",
        "Security Best Practices: IAM role creation, least-privilege policies, CORS configuration, and secure service-to-service communication.",
        "Real Migration Complexity: Experienced the challenges of refactoring existing applications to new architectures while maintaining functionality."
      ]
    },
    {
      id: 'homeflow',
      title: "HomeFlow - Smart Task Management",
      subtitle: "Full-Stack MERN Application with Gamification",
      description: "Full-stack household task management platform with intelligent auto-assignment algorithm, comprehensive gamification system (points, streaks, badges), and real-time dashboard built with Angular 18, Node.js, and MongoDB.",
      tech: ["Angular 18", "Node.js", "Express", "MongoDB", "JWT", "GitHub Actions"],
      link: "https://rubysage20.github.io/HomeFlow/",
      github: "https://github.com/Rubysage20/HomeFlow",
      color: "from-cyan-500 to-cyan-600",
      
      problemStatement: "Managing household tasks fairly among multiple people is challenging, leading to conflicts over perceived unfairness, forgotten responsibilities, and lack of motivation. HomeFlow solves this by combining intelligent task distribution with game-like rewards to make household management engaging and equitable.",
      
      keyFeatures: [
        {
          title: "Intelligent Auto-Assignment Algorithm",
          description: "Fair task distribution system that analyzes task complexity (1-10 scale), frequency (daily/weekly/monthly), and each member's recent workload to automatically distribute tasks. Prevents workload imbalance by calculating individual workload scores and assigning new tasks to members with the lowest current load."
        },
        {
          title: "Comprehensive Gamification System",
          description: "Points earned based on task complexity (Easy: 10pts, Medium: 25pts, Hard: 50pts). Streaks for consecutive days with completed tasks. Badges for milestones (First Task, 10/50/100 Tasks, Consistency Champion, Early Bird, Night Owl). Real-time leaderboard showing household rankings."
        },
        {
          title: "Real-Time Dashboard",
          description: "Live activity feed showing recent task completions, household contribution statistics, individual progress tracking, streak status and badge showcase, and task completion trends with analytics."
        },
        {
          title: "Task Lifecycle Management",
          description: "Create tasks with title, description, complexity rating, due dates, priority levels (Low/Medium/High), recurring schedules (Daily/Weekly/Monthly), and assignment options (auto-assign, specific member, or self-assign)."
        },
        {
          title: "Multi-User Household Coordination",
          description: "Create and join households with unique codes, invite members via shareable links, role-based permissions (Admin/Member), view all household members and statistics, and track household-wide performance metrics."
        },
        {
          title: "CI/CD Pipeline",
          description: "Automated testing and deployment using GitHub Actions. Frontend deployed to GitHub Pages, backend deployed to Render, with environment-based configuration management and production build optimization."
        }
      ],
      
      technicalImplementation: {
        frontend: "Angular 18 with TypeScript, component-based architecture with lazy loading for optimal performance, RxJS for reactive state management and real-time updates, Angular Material for consistent accessible UI components, custom services for API communication, and JWT token-based authentication with route guards.",
        
        backend: "Node.js with Express framework providing RESTful API design, MongoDB integration with Mongoose ODM for schema validation, custom middleware for authentication/error handling/request logging, fair distribution algorithm calculating optimal task assignments based on complexity and workload history, and reward calculation engine tracking points, streaks, and achievements using MongoDB aggregation pipelines.",
        
        database: "MongoDB with Mongoose ODM, four main collections (Users, Households, Tasks, Achievements), embedded documents for related data, indexes on frequently queried fields (userId, householdId, dueDate), and aggregation pipelines for calculating statistics and leaderboards.",
        
        deployment: "GitHub Actions CI/CD pipeline triggering on push to main branch, automated testing and build process, frontend deployed to GitHub Pages with custom domain support, backend deployed to Render with automatic deployments, CORS configuration for secure cross-origin requests between frontend and backend, MongoDB Atlas for cloud database hosting, and environment variable management for different deployment stages."
      },
      
      challengesSolved: [
        {
          title: "Fair Distribution Algorithm Design",
          description: "Developed algorithm balancing multiple factors: task complexity weights (1-10), task frequency (daily tasks weighted higher), member's recent completion history, and current workload scores. Prevents gaming the system by tracking historical patterns and ensuring equitable distribution over time."
        },
        {
          title: "Real-Time State Synchronization",
          description: "Implemented reactive patterns using RxJS observables to ensure task updates, point changes, and badge unlocks appear instantly across all components without page refresh. Used BehaviorSubjects to maintain current state and automatically update subscribed components."
        },
        {
          title: "CORS Configuration Issues",
          description: "Debugged cross-origin request problems between GitHub Pages frontend and Render backend. Configured Express CORS middleware to accept specific origins, proper HTTP methods, and credentials for JWT authentication."
        },
        {
          title: "Production Build Optimization",
          description: "Resolved Angular production build errors including environment configuration, asset path corrections, and base href settings for GitHub Pages deployment. Optimized bundle size using lazy loading and code splitting."
        },
        {
          title: "MongoDB Aggregation for Statistics",
          description: "Designed complex aggregation pipelines to calculate household statistics, member rankings, task completion rates, and point totals efficiently. Optimized queries to minimize database load and improve dashboard performance."
        }
      ],
      
      whatILearned: [
        "Advanced Angular Architecture: Component communication strategies, service-based state management, lazy loading modules, and reactive programming patterns with RxJS observables.",
        "Algorithm Design: Creating fair distribution logic that balances multiple competing factors while preventing exploitation and maintaining perceived fairness.",
        "Full-Stack Integration: Connecting Angular frontend with Node.js/Express backend, handling asynchronous operations, managing authentication flows, and maintaining security throughout the stack.",
        "DevOps Practices: Setting up CI/CD pipelines with GitHub Actions, automating deployments, managing environment configurations, and monitoring production applications.",
        "MongoDB Expertise: Schema design for NoSQL databases, using aggregation pipelines for analytics, optimizing queries with indexes, and understanding when to embed vs. reference documents.",
        "User Engagement Through Gamification: Designing reward systems that motivate continued use, balancing point values to feel rewarding, and creating achievements that celebrate progress.",
        "Production Debugging Skills: Identifying and fixing issues specific to production environments, understanding differences between development and production builds, and using browser developer tools effectively."
      ]
    },
    {
      id: 'hospital',
      title: "Hospital Management System",
      subtitle: "Enterprise Healthcare Application",
      description: "Enterprise-grade healthcare application with secure patient management, appointment scheduling, and integrated payroll system. Features JWT authentication, role-based access control (RBAC), and comprehensive CRUD operations.",
      tech: ["React", "Spring Boot", "MongoDB", "JWT", "AWS S3", "Maven"],
      link: "https://hospital-frontend-orcin.vercel.app/",
      github: "https://github.com/Rubysage20/ePortfolio",
      color: "from-cyan-400 to-blue-500",
      
      problemStatement: "Healthcare facilities need centralized systems to manage patient records, coordinate appointments, track staff, and process payroll efficiently while maintaining strict security and HIPAA-like privacy standards. This system provides a comprehensive solution for medical office administration with secure access controls and audit trails.",
      
      keyFeatures: [
        {
          title: "Patient Management Portal",
          description: "Complete CRUD operations for patient records including personal details (name, DOB, gender), contact information (email, phone, address), medical history tracking, insurance details, emergency contacts, and visit history with appointment logs."
        },
        {
          title: "Doctor Management System",
          description: "Physician profiles with specializations (Cardiology, Orthopedics, etc.), availability schedule management, office visit fee configuration, credentials and certifications tracking, patient assignment and load management, and performance metrics."
        },
        {
          title: "Intelligent Appointment Scheduling",
          description: "Real-time booking calendar with date/time selection, conflict detection preventing double-bookings, doctor availability validation, automated appointment reminders (planned), time slot suggestions for conflicts, and status tracking (Scheduled, Completed, Cancelled)."
        },
        {
          title: "Employee & Payroll Management",
          description: "Staff records with role assignments (Doctor, Nurse, Admin, Receptionist), department assignments, work hour tracking, hourly rate configuration, automatic payroll calculation based on hours worked, and monthly/annual earning reports."
        },
        {
          title: "Secure Authentication & Authorization",
          description: "JWT token-based authentication with BCrypt password hashing (12 rounds, one-way encryption), role-based access control (RBAC) with three levels (Patient, Doctor, Administrator), protected routes on frontend and backend, and session management with token expiration."
        },
        {
          title: "Cloud Deployment",
          description: "Frontend deployed on AWS S3 with static website hosting configuration, demonstrates cloud deployment skills, scalable architecture ready for production use, and environment-specific configurations for development vs. production."
        }
      ],
      
      technicalImplementation: {
        frontend: "React 18 with functional components and React Hooks for state management, Material-UI component library for professional interface design, Axios HTTP client with interceptors for token management, protected routes with role-based rendering, Formik for form management with Yup validation, and responsive design supporting mobile, tablet, and desktop devices.",
        
        backend: "Spring Boot 3.0 following MVC architecture (Model-View-Controller), Spring Security for authentication and authorization, Spring Data MongoDB for repository pattern and data access, RESTful API design with proper HTTP methods and status codes, Bean Validation annotations for request data validation, custom @ControllerAdvice for centralized exception handling, and JWT token generation/validation with configurable expiration.",
        
        database: "MongoDB 6.0 NoSQL document database with five main collections (Patients, Doctors, Appointments, Employees, Users), flexible schema allowing semi-structured healthcare data, embedded documents for related information (appointments within patient records), indexes on frequently queried fields (patientId, doctorId, date), and aggregation pipelines for generating reports and statistics.",
        
        security: "Spring Security configuration with JWT authentication, BCrypt password hashing (12 rounds, salted), role-based authorization using @PreAuthorize annotations, CORS configuration allowing specific origins, CSRF protection, prevention of common vulnerabilities (SQL injection handled by MongoDB, XSS prevented by input sanitization), and data validation on both frontend and backend layers."
      },
      
      challengesSolved: [
        {
          title: "Role-Based Access Control Implementation",
          description: "Designed three-tier authorization system where Patients can only access their own records, Doctors can view assigned patients and manage schedules, and Administrators have full system access. Implemented using Spring Security's @PreAuthorize annotations and custom authorization logic checking user roles and ownership."
        },
        {
          title: "Appointment Conflict Detection",
          description: "Created algorithm that queries database for all appointments on requested date for specific doctor, checks for time slot overlaps using date/time range comparisons, prevents double-booking, and suggests next available slots when conflicts exist. Handles edge cases like back-to-back appointments and buffer times."
        },
        {
          title: "Cross-Stack Data Validation",
          description: "Implemented dual-layer validation with Formik/Yup on React frontend for immediate user feedback and Bean Validation (@Valid, @NotNull, @Email, @Size) on Spring Boot backend as security layer. Prevents malicious data from reaching database while maintaining good user experience."
        },
        {
          title: "JWT Authentication Flow",
          description: "Designed complete authentication system: user login sends credentials to backend, Spring Security validates against BCrypt hashed passwords, backend generates signed JWT with user ID and role, frontend stores token in localStorage, token included in Authorization header for all protected requests, and backend validates token on every protected endpoint."
        },
        {
          title: "MongoDB Relationship Management",
          description: "Modeled complex relationships in NoSQL environment: one-to-many (one doctor has many appointments), many-to-one (many patients have one primary doctor), and embedded vs. referenced data decisions. Used ObjectId references for large collections and embedded documents for tightly coupled data."
        }
      ],
      
      whatILearned: [
        "Enterprise Java Development: Spring Boot framework architecture, dependency injection, auto-configuration, and building production-ready applications with industry-standard patterns.",
        "Spring Security Mastery: Implementing authentication flows, authorization rules, security filters, password encoding, and token-based authentication with JWT.",
        "Healthcare Domain Knowledge: Understanding requirements for medical record systems, HIPAA-like privacy considerations, audit trail importance, and sensitive data handling.",
        "Full-Stack Integration: Connecting React SPA with Spring Boot REST API, managing CORS policies, handling authentication tokens, and maintaining security across the stack.",
        "NoSQL Database Design: Trade-offs between SQL and NoSQL for healthcare data, when to embed vs. reference documents, and designing schemas for query performance.",
        "Professional API Design: RESTful principles, proper HTTP status codes (200, 201, 400, 401, 403, 404, 500), meaningful error messages, and API documentation best practices.",
        "Cloud Deployment Fundamentals: AWS S3 configuration for static hosting, bucket policies, CORS settings, and production deployment considerations.",
        "Testing & Debugging: Using Postman for API testing, debugging Spring Boot applications, reading stack traces, and systematic problem-solving approach."
      ]
    }
  ];

  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "Angular 18", "JavaScript/TypeScript", "HTML/CSS", "Angular Material", "Material-UI", "RxJS"], 
      icon: Code 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express", "Spring Boot", "Java", "RESTful APIs", "JWT Auth", "Spring Security"], 
      icon: Database 
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS (Lambda, API Gateway, DynamoDB, S3, IAM)", "Docker", "GitHub Actions", "CI/CD", "Git"], 
      icon: Cloud 
    },
    {
      category: "Databases",
      items: ["MongoDB (Mongoose)", "DynamoDB", "MySQL", "NoSQL Design", "Database Optimization"],
      icon: Database
    }
  ];

  const ProjectModal = ({ project }) => {
    if (!project) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={closeModal}
      >
        <div 
          className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-r ${project.color} p-6 rounded-t-2xl relative`}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-white text-opacity-90">{project.subtitle}</p>
          </div>

          <div className="p-8 max-h-[70vh] overflow-y-auto">
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Problem Statement</h3>
              <p className="text-gray-700 leading-relaxed">{project.problemStatement}</p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
              <div className="space-y-4">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-cyan-400">
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Implementation</h3>
              <div className="space-y-4">
                {Object.entries(project.technicalImplementation).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Challenges Solved</h3>
              <div className="space-y-4">
                {project.challengesSolved.map((challenge, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                    <h4 className="font-semibold text-gray-800 mb-2">{challenge.title}</h4>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What I Learned</h3>
              <ul className="space-y-3">
                {project.whatILearned.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="border-t pt-6">
              <div className="flex gap-4 justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-600 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">VD</h1>
            <div className="flex gap-6">
              {['home', 'about', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section ? 'text-cyan-500' : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 mx-auto">
              <img 
                src="/me.jpg" 
                alt="Valerie Dawson"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Valerie Dawson
          </h1>
          <p className="text-2xl text-gray-700 mb-3">Full-Stack Developer & Cloud Engineering Enthusiast</p>
          <p className="text-lg text-gray-600 mb-2">
            BS in Computer Science from SNHU • AWS Certified Cloud Practitioner
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable web applications and cloud-native architectures. 
            Specializing in React, Angular, Spring Boot, Node.js, and AWS serverless technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:Valeriedawson513@gmail.com" className="bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-all hover:scale-105">
              Get In Touch
            </a>
            <a href="https://github.com/Rubysage20" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all">
              View GitHub
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="mx-auto text-cyan-500" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">About Me</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 border border-gray-200">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                My path to software development began with a degree in Information Technology, where I quickly 
                realized my passion lay not in networking infrastructure, but in building software. While IT 
                provided valuable foundational knowledge, I craved deeper engagement with coding and software 
                development. This realization led me to pursue a BS in Computer Science at Southern New Hampshire 
                University, where I earned a place on the President's List every single semester—a testament to 
                my dedication and love for the craft.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What Drives Me</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                What excites me most about technology is its constant evolution—there's always something new to 
                learn, always a better way to solve a problem. I'm particularly drawn to cloud engineering because 
                I want to be part of the revolution happening in that space. From containerization and serverless 
                architectures to AI/ML integration and edge computing, the cloud is reshaping how we build and 
                deploy applications. I've completed AWS Foundations and earned my AWS Certified Cloud Practitioner 
                certification, with hands-on experience deploying serverless applications using Lambda, API Gateway, 
                DynamoDB, and S3. My goal is to become a Senior DevOps Engineer, combining my full-stack development 
                skills with deep cloud infrastructure expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What I'm Looking For</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm seeking a full-stack development or cloud engineering role where candor is valued—a workplace 
                culture that embraces honest communication, transparent feedback, and direct collaboration. I believe 
                the best teams are built on trust and open dialogue, where everyone feels empowered to share ideas, 
                challenge assumptions, and grow together. My background in customer service and executive administration 
                has taught me the importance of clear communication and understanding diverse perspectives, skills that 
                translate seamlessly into collaborative software development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beyond the Code</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                While I enjoy gaming, exploring different music genres, and taking nature walks to clear my mind, 
                coding has genuinely become my primary hobby. I'm constantly thinking about my next project or how 
                to enhance existing ones—whether it's refactoring for better performance, adding new features, or 
                experimenting with emerging technologies. This perpetual curiosity and drive for continuous 
                improvement isn't just part of my work; it's who I am. Every challenge is an opportunity to learn, 
                and every project is a chance to create something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Full-stack applications demonstrating cloud architecture, modern frameworks, and production deployment skills
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">+{project.tech.length - 3} more</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => openModal(project.id)}
                    className="w-full bg-cyan-500 text-white py-2 rounded-full font-medium hover:bg-cyan-600 transition-all hover:scale-105 mb-3"
                  >
                    View Full Details
                  </button>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border-2 border-gray-300 text-gray-700 py-2 rounded-full text-sm font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all"
                    >
                      Live Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border-2 border-gray-300 text-gray-700 py-2 rounded-full text-sm font-medium hover:border-gray-500 transition-all"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                  <Icon className="text-cyan-500 mb-4" size={36} />
                  <h3 className="text-lg font-bold mb-4 text-gray-800">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200">
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Bachelor of Science</h3>
                    <p className="text-lg text-cyan-600 font-semibold">Computer Science</p>
                  </div>
                  <span className="text-gray-500 font-medium">2025</span>
                </div>
                <p className="text-gray-700 mb-3">Southern New Hampshire University</p>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-cyan-400">
                  <p className="text-cyan-700 font-semibold flex items-center gap-2">
                    <Award size={18} />
                    Magna Cum Laude
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">AWS Certified</h3>
                    <p className="text-lg text-cyan-600 font-semibold">Cloud Practitioner</p>
                  </div>
                  <span className="text-gray-500 font-medium">2026</span>
                </div>
                <p className="text-gray-700 mb-2">Amazon Web Services</p>
                <p className="text-sm text-gray-600 mb-3">AWS Foundations - Arizona Global University</p>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-cyan-400">
                  <p className="text-cyan-700 font-semibold">Hands-on: Lambda, API Gateway, DynamoDB, S3, IAM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200">
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Associate of Applied Science</h3>
                    <p className="text-lg text-cyan-600 font-semibold">Information Technology</p>
                  </div>
                  <span className="text-gray-500 font-medium">2024</span>
                </div>
                <p className="text-gray-700">Community College of Baltimore County</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-200">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-700"></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Certificate</h3>
                    <p className="text-lg text-cyan-600 font-semibold">Programming</p>
                  </div>
                  <span className="text-gray-500 font-medium">2024</span>
                </div>
                <p className="text-gray-700">Community College of Baltimore County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Let's Connect</h2>
          <p className="text-xl text-gray-700 mb-8">
            I'm actively seeking full-stack developer and cloud engineering opportunities!
          </p>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a 
              href="mailto:Valeriedawson513@gmail.com"
              className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-all hover:scale-105">
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com/Rubysage20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/valerie-dawson-se"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">© 2025 Valerie Dawson. Built with React.</p>
      </footer>

      {/* Modal */}
      {activeModal && (
        <ProjectModal project={projects.find(p => p.id === activeModal)} />
      )}

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-bounce {
            animation: bounce 2s infinite;
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
}