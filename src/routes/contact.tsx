import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import facilityImage from "@/assets/pvc-facility.jpg";
import { Footer, Header, InquiryForm, FloatingWhatsApp, PageIntro } from "@/components/site";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Request a Quote | PolyCycle Materials" },
  { name: "description", content: "Share your recycled PVC material requirement, quantity, application, packaging preference, and destination with PolyCycle Materials." },
  { property: "og:title", content: "Request a Quote | PolyCycle Materials" },
  { property: "og:description", content: "Tell us what recycled PVC material your business needs." },
] }), component: ContactPage });

function ContactPage() {
  return <div><Header /><main><PageIntro eyebrow="Request a quote" title="Tell us what you need." description="Share your material requirement, quantity, application, packaging preferences, and destination. This frontend form is ready for the company’s email connection later." current="Contact" />
    <section id="quote" className="section-space"><div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><aside><div className="image-frame aspect-[0.85] overflow-hidden rounded-lg"><img src={facilityImage} alt="PVC processing and packing facility" className="h-full w-full object-cover" width={1408} height={1008} loading="lazy" /></div><div className="mt-8"><p className="eyebrow text-primary">Contact channels</p><div className="mt-5 space-y-4 text-sm text-muted-foreground"><p className="flex gap-3"><Mail className="size-5 shrink-0 text-primary" /> hello@polycycle.example</p><p className="flex gap-3"><Phone className="size-5 shrink-0 text-primary" /> +91 [phone to be confirmed]</p><p className="flex gap-3"><MessageCircle className="size-5 shrink-0 text-primary" /> WhatsApp available for inquiries</p></div><p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">Company address, destination coverage, and confirmed response details can be added here when supplied.</p></div></aside><div className="rounded-lg border border-border bg-card p-6 sm:p-10"><div className="mb-10"><p className="eyebrow text-primary">Buyer inquiry</p><h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">Start the conversation.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Required fields are marked with an asterisk. Add as much context as you have.</p></div><InquiryForm /></div></div></section>
  </main><Footer /><FloatingWhatsApp /></div>;
}