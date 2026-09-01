"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "dharam@kartavyatech.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const company = form.get("company");
    const email = form.get("email");
    const phone = form.get("phone");
    const problem = form.get("problem");
    const budget = form.get("budget");

    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Work Email: ${email}`,
      `Phone: ${phone}`,
      budget ? `Budget / Project Size: ${budget}` : null,
      "",
      "What are you looking to solve?",
      String(problem ?? ""),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Enterprise AI enquiry from ${name ?? ""}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Work Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-text-primary">
          What are you looking to solve?
        </label>
        <textarea
          name="problem"
          rows={4}
          required
          className="w-full rounded-md border border-border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
        />
      </div>
      <Field label="Budget / project size (optional)" name="budget" required={false} />

      <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
        Talk to an AI Architect
      </button>

      {submitted && (
        <p className="text-sm text-accent">
          Your email client should have opened with your message. If it didn&apos;t, email us
          directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-accent"
      />
    </div>
  );
}
