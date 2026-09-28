import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Recycle,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Process", to: "/process" },
  { label: "Export & Logistics", to: "/export" },
  { label: "Contact", to: "/contact" },
] as const;

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="PolyCycle Materials home">
      <span className={`grid size-10 place-items-center rounded-xl ${light ? "bg-accent text-primary" : "bg-primary text-primary-foreground"}`}>
        <Recycle className="size-5 transition-transform duration-500 group-hover:rotate-45" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.05rem] font-bold tracking-[-0.03em] ${light ? "text-primary-foreground" : "text-foreground"}`}>
          PolyCycle
        </span>
        <span className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.22em] ${light ? "text-primary-foreground/65" : "text-muted-foreground"}`}>
          Materials
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="container-shell flex h-[4.75rem] items-center justify-between gap-6">
        <BrandMark />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="text-[0.78rem] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <label className="sr-only" htmlFor="language-select">Language</label>
          <select id="language-select" className="select-clean" defaultValue="EN" aria-label="Language">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
            <option>AR</option>
          </select>
          <Button asChild size="sm">
            <Link to="/contact">Request a Quote <ArrowRight /></Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="container-shell flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-border/70 py-3 text-sm font-semibold text-foreground">
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Request a Quote <ArrowRight /></Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <BrandMark light />
          <p className="mt-6 max-w-xs text-sm leading-7 text-primary-foreground/65">
            Recycled PVC materials for industrial buyers who value clear communication, organized processing, and dependable supply conversations.
          </p>
          <div className="mt-6 flex gap-2">
            {[Linkedin, MessageCircle, Mail].map((Icon, index) => (
              <Button key={index} variant="ghost" size="icon" className="border border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label={index === 0 ? "LinkedIn" : index === 1 ? "WhatsApp" : "Email"}>
                <Icon />
              </Button>
            ))}
          </div>
        </div>
        <FooterColumn title="Company" links={[["About Us", "/about"], ["Manufacturing", "/process"], ["Quality Focus", "/about"]]} />
        <FooterColumn title="Products" links={[["PVC Flakes", "/products"], ["Processed Materials", "/products"], ["Product Inquiry", "/contact"]]} />
        <div>
          <p className="eyebrow text-accent">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <p className="flex items-start gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-accent" /> hello@polycycle.example</p>
            <p className="flex items-start gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-accent" /> +91 [phone to be confirmed]</p>
            <p className="flex items-start gap-3"><MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" /> WhatsApp available for inquiries</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PolyCycle Materials. All rights reserved.</span>
          <span>Company details and certifications available upon confirmation.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <p className="eyebrow text-accent">{title}</p>
      <div className="mt-5 space-y-3">
        {links.map(([label, to]) => <Link key={label} to={to} className="block text-sm text-primary-foreground/70 transition-colors hover:text-accent">{label}</Link>)}
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="display-title mt-4">{title}</h2>
      {description ? <p className="body-copy mt-5">{description}</p> : null}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description, current }: { eyebrow: string; title: string; description: string; current: string }) {
  return (
    <section className="page-intro">
      <div className="container-shell relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary-foreground/55"><Link to="/" className="hover:text-primary-foreground">Home</Link><span>/</span><span>{current}</span></div>
        <p className="eyebrow mt-12 text-accent">{eyebrow}</p>
        <h1 className="display-hero mt-5 max-w-3xl text-primary-foreground">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">{description}</p>
      </div>
    </section>
  );
}

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required><Input required placeholder="Your full name" /></Field>
        <Field label="Company Name" required><Input required placeholder="Company name" /></Field>
        <Field label="Business Email" required><Input required type="email" placeholder="name@company.com" /></Field>
        <Field label="Country" required><Input required placeholder="Country" /></Field>
        {!compact ? <Field label="Product Required" required><Input required placeholder="e.g. recycled PVC flakes" /></Field> : null}
        {!compact ? <Field label="Required Quantity"><Input placeholder="Quantity and unit" /></Field> : null}
      </div>
      {!compact ? <div className="grid gap-5 sm:grid-cols-2"><Field label="Application"><Input placeholder="What will the material be used for?" /></Field><Field label="Destination Port"><Input placeholder="Destination port or city" /></Field></div> : null}
      <Field label={compact ? "How can we help?" : "Additional Requirements"}><Textarea placeholder={compact ? "Tell us about your material requirement..." : "Packaging, specification, timing, or other details"} /></Field>
      {!compact ? <Field label="Upload Requirement / Specification"><Input type="file" className="file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-secondary-foreground" /></Field> : null}
      {submitted ? (
        <div className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-primary">
          <Check className="mt-0.5 size-5 shrink-0" />
          <p><strong>Inquiry noted.</strong> This demo form is frontend-only. Your message is ready for the company email connection to be added later.</p>
        </div>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted-foreground">Your information will only be used to respond to your inquiry.</p>
        <Button type="submit" size="lg">Send Inquiry <ArrowRight /></Button>
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return <label className="block text-sm font-semibold text-foreground"><span className="mb-2 block">{label}{required ? <span className="ml-1 text-destructive">*</span> : null}</span>{children}</label>;
}

export function FloatingWhatsApp() {
  return <Button asChild size="icon" className="fixed bottom-5 right-5 z-40 size-12 rounded-full bg-accent text-primary shadow-lg hover:bg-accent/90" aria-label="Contact on WhatsApp"><a href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle /></a></Button>;
}

export function MetaList({ items }: { items: string[] }) {
  return <ul className="mt-6 space-y-3">{items.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid size-5 place-items-center rounded-full bg-accent/15 text-primary"><Check className="size-3.5" /></span>{item}</li>)}</ul>;
}

export function SelectField({ label, options }: { label: string; options: string[] }) {
  return <label className="block text-sm font-semibold text-foreground"><span className="mb-2 block">{label}</span><span className="relative block"><select className="select-field" defaultValue=""><option value="" disabled>Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /></span></label>;
}