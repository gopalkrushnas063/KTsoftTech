import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Remote",
    shortDescription: "Build responsive and accessible user interfaces.",
    fullDescription: `As a Frontend Developer, you'll work with our design and product teams to create pixel-perfect, high-performance UI experiences. You'll use React, TailwindCSS, and our design system to build scalable, maintainable components.

**Responsibilities:**
- Collaborate with UX/UI designers to implement stunning interfaces
- Write clean, reusable React components
- Optimize performance and accessibility
- Work closely with backend developers via REST/GraphQL APIs

**Requirements:**
- 2+ years of experience in frontend development
- Strong React & JavaScript knowledge
- Familiarity with TailwindCSS, Figma, Git, and responsive design`,
    tags: ["React", "JavaScript", "TailwindCSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Backend Engineer",
    type: "Full-Time",
    location: "Remote",
    shortDescription: "Build and maintain scalable backend services and APIs.",
    fullDescription: `We’re looking for a Backend Engineer to develop secure and scalable backend systems. You'll write APIs, manage databases, and ensure our infrastructure is robust and efficient.

**Responsibilities:**
- Build RESTful APIs and microservices
- Optimize databases and server performance
- Integrate third-party services (payments, auth, etc.)
- Write unit and integration tests

**Requirements:**
- 3+ years backend experience
- Proficient in Node.js, Express, MongoDB or PostgreSQL
- Familiarity with Docker, CI/CD pipelines, and AWS/GCP`,
    tags: ["Node.js", "MongoDB", "AWS"],
    link: "#",
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    type: "Contract",
    location: "Remote",
    shortDescription:
      "Create machine learning solutions for real-world problems.",
    fullDescription: `As an AI/ML Engineer, you will work on projects involving NLP, computer vision, and predictive analytics. We expect strong Python fundamentals and familiarity with ML tools.

**Responsibilities:**
- Design and train ML models using TensorFlow/PyTorch
- Analyze large datasets and engineer features
- Deploy models as APIs or integrate into apps
- Stay updated on latest ML research

**Requirements:**
- 2+ years experience in ML/AI
- Strong Python, Pandas, Scikit-learn
- Experience with TensorFlow, Flask, Docker
- Bachelor's/Master’s in CS, Data Science, or related`,
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
  },
];

const CareerPage = () => {
  const [openJobId, setOpenJobId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const toggleJob = (id) => {
    setOpenJobId((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = (job) => {
    navigate(`/careers/apply?job=${encodeURIComponent(job.title)}`);
  };

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our Company
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Help us build the future. Explore open roles and join our team of
            passionate, curious, and driven people.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-saas-darkGray border border-gray-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleJob(job.id)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800 transition"
              >
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-400">
                    {job.shortDescription}
                  </p>
                  <div className="text-xs text-saas-orange mt-2">
                    {job.type} · {job.location}
                  </div>
                </div>
                {openJobId === job.id ? (
                  <ChevronUp className="h-5 w-5 text-saas-orange" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openJobId === job.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-gray-700 space-y-4 text-gray-300">
                      <div className="prose prose-invert max-w-none">
                        {job.fullDescription.split("\n").map((line, idx) =>
                          line.startsWith("**") ? (
                            <strong key={idx} className="block mt-4 mb-1">
                              {line.replace(/\*\*/g, "")}
                            </strong>
                          ) : (
                            <p key={idx}>{line}</p>
                          )
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="inline-block bg-saas-orange hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition"
                      >
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't find your role?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            We’re always on the lookout for talented individuals. Reach out and
            let’s talk!
          </p>
          <a
            href="#"
            className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center"
          >
            Submit Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
