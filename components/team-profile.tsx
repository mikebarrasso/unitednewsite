"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

interface ProfileSection {
  title: string;
  content: string | string[];
}

interface ProfileTab {
  label: string;
  content: ReactNode;
}

interface TeamProfileProps {
  name: string;
  credentials?: string;
  title: string;
  initials: string;
  summary: string;
  sections: ProfileSection[];
  designations?: string[];
  education?: string[];
  location?: string;
  linkedIn?: string;
  extraTabs?: ProfileTab[];
  image?: string;
  hasBreadcrumb?: boolean;
}

export function TeamProfile({
  name,
  credentials,
  title,
  initials,
  summary,
  sections,
  designations,
  education,
  location,
  linkedIn,
  extraTabs,
  image,
  hasBreadcrumb = false,
}: TeamProfileProps): ReactNode {
  const [activeTab, setActiveTab] = useState("profile");
  const hasTabs = extraTabs && extraTabs.length > 0;

  const profileContent = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {sections.map((section) => (
        <div
          key={section.title}
          className="bg-muted/50 rounded-xl p-4 sm:p-5"
        >
          <h2 className="text-base font-semibold text-foreground mb-3">
            {section.title}
          </h2>
          {typeof section.content === "string" ? (
            <p className="text-sm text-foreground/60 leading-relaxed">
              {section.content}
            </p>
          ) : (
            <div className="space-y-3">
              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm text-foreground/60 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}

      {(designations || education) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {designations && (
            <div className="bg-muted/50 rounded-xl p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3">
                Designations
              </h2>
              <div className="flex flex-wrap gap-2">
                {designations.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 rounded-lg bg-background border border-border text-foreground/70 text-xs font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {education && (
            <div className="bg-muted/50 rounded-xl p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3">
                Education
              </h2>
              <ul className="space-y-2">
                {education.map((e) => (
                  <li
                    key={e}
                    className="text-sm text-foreground/60 leading-relaxed flex items-start gap-2"
                  >
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/20" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {location && (
        <div className="bg-muted/50 rounded-xl p-4 sm:p-5">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            Location
          </h2>
          <p className="text-sm text-foreground/60">{location}</p>
        </div>
      )}
    </motion.div>
  );

  return (
    <section className={`w-full flex items-start py-12 px-4 sm:px-6 lg:px-8 ${hasBreadcrumb ? "pt-6 sm:pt-8" : "pt-32 sm:pt-36"}`}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          {/* Back link */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>

          {/* Profile Card */}
          <div className="bg-background rounded-4xl shadow-2xl overflow-hidden border border-border p-2">
            {/* Header with Gradient Background */}
            <div className="relative h-32 sm:h-40 rounded-3xl bg-gradient-to-br from-[oklch(0.524_0.125_247.8)] via-[oklch(0.480_0.130_250)] to-[oklch(0.427_0.117_251.7)] overflow-hidden">
              {/* Decorative wave overlay */}
              <div className="absolute inset-0 opacity-30">
                <svg
                  viewBox="0 0 1000 200"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,0 L0,0 Z"
                    fill="white"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
            </div>

            {/* Profile Content Container */}
            <div className="relative px-4 pb-4">
              {/* Profile Picture & LinkedIn Row */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 sm:-mt-16 mb-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-foreground p-1.5 shadow-xl">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      {image ? (
                        <Image
                          src={image}
                          alt={name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl font-serif font-medium text-foreground/70 select-none">
                          {initials}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {linkedIn && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground/70 text-sm font-medium hover:bg-muted transition-colors"
                      aria-label={`${name} on LinkedIn`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {name}
                  </h1>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[oklch(0.524_0.125_247.8)]/10 text-[oklch(0.524_0.125_247.8)] dark:text-[oklch(0.618_0.120_244.3)] text-xs font-medium w-fit">
                    {title}
                  </span>
                </div>

                {credentials && (
                  <p className="text-sm text-foreground/40 mb-3">
                    {credentials}
                  </p>
                )}

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {summary}
                </p>

                {location && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/40 mt-3">
                    <span>{location}</span>
                  </div>
                )}
              </motion.div>

              {/* Tabs (if extra tabs exist) */}
              {hasTabs ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="border-b border-border mb-6 overflow-x-auto scrollbar-hide"
                  >
                    <div className="flex items-center gap-6 min-w-max">
                      <button
                        onClick={() => setActiveTab("profile")}
                        className={`pb-3 px-1 text-sm font-medium transition-colors duration-200 border-b-2 whitespace-nowrap ${
                          activeTab === "profile"
                            ? "border-[oklch(0.524_0.125_247.8)] text-foreground"
                            : "border-transparent text-foreground/40 hover:text-foreground/70"
                        }`}
                      >
                        Profile
                      </button>
                      {extraTabs.map((tab) => (
                        <button
                          key={tab.label}
                          onClick={() => setActiveTab(tab.label)}
                          className={`pb-3 px-1 text-sm font-medium transition-colors duration-200 border-b-2 whitespace-nowrap ${
                            activeTab === tab.label
                              ? "border-[oklch(0.524_0.125_247.8)] text-foreground"
                              : "border-transparent text-foreground/40 hover:text-foreground/70"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {activeTab === "profile" && profileContent}

                  {extraTabs.map(
                    (tab) =>
                      activeTab === tab.label && (
                        <motion.div
                          key={tab.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tab.content}
                        </motion.div>
                      ),
                  )}
                </>
              ) : (
                <>
                  <div className="border-b border-border mb-6" />
                  {profileContent}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
