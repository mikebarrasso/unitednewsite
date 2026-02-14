"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ReactNode } from "react";

const inquiryTypes = [
  "Retirement Planning",
  "Tax Planning",
  "Investment Management",
  "Equity Compensation",
  "General Inquiry",
];

export function ContactForm(): ReactNode {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="First name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Last name" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" type="tel" placeholder="(555) 000-0000" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry">How can we help?</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem
                key={type}
                value={type.toLowerCase().replace(/\s+/g, "-")}
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your situation..."
          rows={5}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto rounded-full"
      >
        Let&apos;s Talk
      </Button>
    </form>
  );
}
