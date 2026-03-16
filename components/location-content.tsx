"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import type { Location } from "@/lib/locations";
import { towns } from "@/lib/towns";

const ease = [0.16, 1, 0.3, 1] as const;

function OfficeDetails({ location }: { location: Location }): ReactNode {
  return (
    <section className="relative w-full bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl font-medium font-serif text-foreground leading-tight"
            >
              About Our {location.city} Office
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-foreground/70 leading-relaxed"
            >
              {location.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-4 text-foreground/70 leading-relaxed"
            >
              {location.areaDescription}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="bg-background border border-border rounded-xl p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {location.city}, {location.stateAbbr}
            </h3>
            {location.label && (
              <p className="text-xs font-medium text-primary mb-4">
                {location.label}
              </p>
            )}
            <div className="space-y-4 text-sm text-foreground/60 mt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                <span>
                  {location.address}
                  <br />
                  {location.city}, {location.stateAbbr} {location.zip}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground/40 shrink-0" />
                <a
                  href="tel:+16312340871"
                  className="hover:text-foreground transition-colors"
                >
                  {location.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-foreground/40 shrink-0" />
                <span>{location.fax}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-foreground/40 shrink-0" />
                <a
                  href="mailto:info@unitedfpg.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@unitedfpg.com
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${location.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
              >
                Get directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ location }: { location: Location }): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-medium font-serif text-foreground leading-tight"
        >
          Services Available in {location.city}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-4 text-foreground/60 max-w-2xl leading-relaxed"
        >
          Every service is delivered by an integrated team of CFP® professionals, CPAs, and
          Enrolled Agents, so your financial plan, investment strategy, and tax
          return all work together.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {location.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease }}
            >
              <Link
                href={service.href}
                className="group flex flex-col h-full p-6 bg-muted/50 border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServe({ location }: { location: Location }): ReactNode {
  return (
    <section className="relative w-full bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl sm:text-4xl font-medium font-serif text-foreground leading-tight"
            >
              Who We Serve in {location.city}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-6 text-foreground/70 leading-relaxed"
            >
              {location.clientProfile}
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="text-xl font-semibold text-foreground mb-4"
            >
              Local Tax &amp; Planning Insight
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-foreground/70 leading-relaxed"
            >
              {location.localInsight}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyIntegrated(): ReactNode {
  const reasons = [
    "Your CPA and financial planner are on the same team",
    "Tax implications are considered before investment decisions, not after",
    "One firm prepares your return and manages your portfolio",
    "No referrals, no coordination gaps, no surprises at tax time",
  ];

  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-medium font-serif text-foreground leading-tight"
        >
          Why an Integrated Firm Matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-4 text-foreground/60 max-w-2xl mx-auto leading-relaxed"
        >
          Most advisory firms manage your investments. We manage the
          relationship between your investments, your taxes, and your financial
          plan, because those decisions are inseparable.
        </motion.p>
        <div className="mt-10 flex flex-col items-start max-w-lg mx-auto gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease }}
              className="flex items-start gap-3 text-left"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/70">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NearbyAreas({ location }: { location: Location }): ReactNode {
  return (
    <section className="relative w-full bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-6"
        >
          Also Serving Nearby Areas
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex flex-wrap gap-3"
        >
          {location.nearbyAreas.map((area) => {
            const matchedTown = towns.find(
              (t) => t.name.toLowerCase() === area.toLowerCase()
            );
            const label = `${area}, ${location.stateAbbr}`;
            if (matchedTown) {
              return (
                <Link
                  key={area}
                  href={`/financial-advisor-${matchedTown.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground/70 hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              );
            }
            return (
              <span
                key={area}
                className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground/70"
              >
                {label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function OtherLocations({
  others,
}: {
  others: Location[];
}): ReactNode {
  return (
    <section className="relative w-full bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-2xl sm:text-3xl font-medium font-serif text-foreground mb-8"
        >
          Our Other Offices
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {others.map((loc, index) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease }}
            >
              <Link
                href={`/locations/${loc.slug}`}
                className="group block p-6 bg-muted/50 border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {loc.city}, {loc.stateAbbr}
                </h3>
                {loc.label && (
                  <p className="text-xs font-medium text-primary mt-1">
                    {loc.label}
                  </p>
                )}
                <p className="text-sm text-foreground/60 mt-2">
                  {loc.address}, {loc.city}, {loc.stateAbbr} {loc.zip}
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                  Visit page
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationContent({
  location,
  otherLocations,
}: {
  location: Location;
  otherLocations: Location[];
}): ReactNode {
  return (
    <>
      <OfficeDetails location={location} />
      <ServicesSection location={location} />
      <WhoWeServe location={location} />
      <WhyIntegrated />
      <NearbyAreas location={location} />
      <OtherLocations others={otherLocations} />
    </>
  );
}
