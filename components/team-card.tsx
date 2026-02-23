"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

interface TeamMember {
  name: string;
  credentials?: string;
  title: string;
  bio: string;
  initials: string;
  accentColor: string;
  href?: string;
  image?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export function TeamCard({ member }: { member: TeamMember }): ReactNode {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <div className="group relative bg-background rounded-3xl shadow-lg overflow-hidden border border-border">
        {/* Expanded Background on Hover */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 1.1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 30%, ${member.accentColor}, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-background/90 via-background/95 to-background" />
        </motion.div>

        {/* Card Content */}
        <div className="relative z-10 p-2">
          {/* Profile Avatar */}
          <div className="mb-4">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${member.accentColor}22, ${member.accentColor}08)`,
                  }}
                >
                  <motion.span
                    className="text-6xl sm:text-7xl font-serif font-medium select-none"
                    style={{ color: member.accentColor }}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4, ease }}
                  >
                    {member.initials}
                  </motion.span>
                </div>
              )}
              {/* Bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="mb-4 px-4">
            <h3 className="text-xl font-bold text-foreground mb-0.5">
              {member.name}
            </h3>
            {member.credentials && (
              <p className="text-xs font-medium text-foreground/40 mb-2">
                {member.credentials}
              </p>
            )}
            <p
              className="text-sm font-medium mb-3"
              style={{ color: member.accentColor }}
            >
              {member.title}
            </p>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Bottom section */}
          <div className="px-4 pb-4">
            {member.href ? (
              <div className="flex items-center justify-between">
                <motion.div
                  className="h-0.5 rounded-full flex-1 mr-4"
                  style={{ backgroundColor: member.accentColor }}
                  animate={{
                    scaleX: isHovered ? 1 : 0.3,
                    opacity: isHovered ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4, ease }}
                />
                <motion.span
                  className="text-xs font-medium flex items-center gap-1"
                  style={{ color: member.accentColor }}
                  animate={{ opacity: isHovered ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  View Profile
                  <ArrowRight className="w-3 h-3" />
                </motion.span>
              </div>
            ) : (
              <motion.div
                className="h-0.5 rounded-full"
                style={{ backgroundColor: member.accentColor }}
                animate={{
                  scaleX: isHovered ? 1 : 0.3,
                  opacity: isHovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.4, ease }}
              />
            )}
          </div>
        </div>
      </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full"
    >
      {member.href ? (
        <Link href={member.href} className="block">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
