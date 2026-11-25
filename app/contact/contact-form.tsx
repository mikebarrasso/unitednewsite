"use client";

import { useState, type ReactNode } from "react";
import { useWealthReachForm } from "@wealthreach/site-kit/forms";
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

const inquiryTypes = [
  "Retirement Planning",
  "Tax Planning",
  "Investment Management",
  "Equity Compensation",
  "General Inquiry",
];

export function ContactForm(): ReactNode {
  const [inquiry, setInquiry] = useState("");
  const {
    formProps,
    Honeypot,
    getFieldProps,
    getErrorProps,
    status,
    errors,
    serverError,
    reset,
  } = useWealthReachForm({
    formId: "contact",
    formKind: "consultation",
  });

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-muted/40 p-6 space-y-3"
      >
        <p className="text-base font-medium text-foreground">
          Thank you for reaching out.
        </p>
        <p className="text-sm text-foreground/70">
          We received your message and will follow up shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            setInquiry("");
            reset();
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const firstNameProps = getFieldProps("firstName");
  const lastNameProps = getFieldProps("lastName");
  const emailProps = getFieldProps("email");
  const phoneProps = getFieldProps("phone");
  const messageProps = getFieldProps("message");
  const nameErrorProps = getErrorProps("name");
  const emailErrorProps = getErrorProps("email");

  return (
    <form {...formProps} className="space-y-6">
      <Honeypot />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={firstNameProps.id}>First Name</Label>
          <Input
            {...firstNameProps}
            required
            placeholder="First name"
            autoComplete="given-name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={lastNameProps.id}>Last Name</Label>
          <Input
            {...lastNameProps}
            required
            placeholder="Last name"
            autoComplete="family-name"
          />
        </div>
      </div>
      {nameErrorProps && (
        <p {...nameErrorProps} className="text-sm text-destructive">
          {errors.name}
        </p>
      )}
      <div className="space-y-2">
        <Label htmlFor={emailProps.id}>Email</Label>
        <Input
          {...emailProps}
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
        {emailErrorProps && (
          <p {...emailErrorProps} className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor={phoneProps.id}>Phone (optional)</Label>
        <Input
          {...phoneProps}
          type="tel"
          placeholder="(555) 000-0000"
          autoComplete="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry">How can we help?</Label>
        <input type="hidden" name="inquiry" value={inquiry} />
        <Select value={inquiry} onValueChange={setInquiry}>
          <SelectTrigger id="inquiry">
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
        <Label htmlFor={messageProps.id}>Message</Label>
        <Textarea
          {...messageProps}
          placeholder="Tell us about your situation..."
          rows={5}
        />
      </div>
      {serverError && (
        <p role="alert" className="text-sm text-destructive">
          {serverError}
        </p>
      )}
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-full"
      >
        {status === "submitting" ? "Sending..." : "Let's Talk"}
      </Button>
    </form>
  );
}
