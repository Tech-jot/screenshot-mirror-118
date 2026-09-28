import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Check, Globe2, PackageCheck, ShipWheel, Truck } from "lucide-react";

import facilityImage from "@/assets/pvc-facility.jpg";
import heroImage from "@/assets/pvc-recycling-hero.jpg";
import { Button } from "@/components/ui/button";
import { Footer, Header, PageIntro, SectionHeading, FloatingWhatsApp } from "@/components/site";

export const Route = createFileRoute("/export")({ head: () => ({ meta: [
  { title: "Export & Logistics | Recycled PVC Supply | PolyCycle" },
  { name: "description", content: "Discuss packaging, bulk order handling, shipment coordination, and international buyer communication for recycled PVC materials." },
  { property: "og:title", content: "Export & Logistics | Recycled PVC Supply | PolyCycle" },
  { property: "og:description", content: "Export-focused conversations for recycled PVC material buyers." },
] }), component: ExportPage });

import { createFileRoute } from "@tanstack/react-router";

function ExportPage() {
  const points = [[PackageCheck, "Professional packaging", "Discuss the packaging format and handling detail required for your order."], [Boxes, "Bulk order handling", "Structure quantities and material categories around the buyer’s requirement."], [Truck, "Shipment coordination", "Align dispatch details, documentation needs, and destination information."], [Globe2, "International communication", "Keep the inquiry clear from first material question to shipment discussion."]];
  return <div><Header /><main><PageIntro eyebrow="Export & logistics" title="From factory to global buyer." description="Supporting international buyers with organized material processing, professional packaging, and export-focused order handling." current="Export & Logistics" />
    <section className="section-space"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div><SectionHeading eyebrow="An organized handoff" title="Built around the information a shipment needs." description="Good export conversations begin with clear material, quantity, packaging, and destination details. This page is ready for the company’s confirmed logistics information." /><div className="mt-10 grid gap-5 sm:grid-cols-2">{points.map(([Icon, title, text]) => <div key={title as string} className="border-t border-border pt-5"><Icon className="size-5 text-primary" /><h3 className="mt-5 text-base font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></div>)}</div></div><div className="image-frame aspect-[0.9] overflow-hidden rounded-lg"><img src={heroImage} alt="Bulk recycled PVC material moving through an industrial recycling line" className="h-full w-full object-cover" width={1600} height={1104} loading="lazy" /></div></div></section>
    <section className="section-space bg-secondary/45"><div className="container-shell"><SectionHeading eyebrow="The handoff" title="Factory → quality check → packaging → shipment." align="center" /><div className="mt-12 grid gap-3 md:grid-cols-5">{[[Boxes, "Factory"], [Check, "Quality check"], [PackageCheck, "Packaging"], [ShipWheel, "Container loading"], [Globe2, "International shipment"]].map(([Icon, label], index) => <div key={label as string} className="relative border border-border bg-background p-6 text-center"><Icon className="mx-auto size-7 text-primary" /><p className="mt-5 text-sm font-bold">{label as string}</p>{index < 4 ? <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary md:block" /> : null}</div>)}</div></div></section>
    <section className="section-space"><div className="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="image-frame aspect-[1.08] overflow-hidden rounded-lg"><img src={facilityImage} alt="Bulk bags prepared inside a recycling facility" className="h-full w-full object-cover" width={1408} height={1008} loading="lazy" /></div><div><p className="eyebrow text-primary">Discuss your order</p><h2 className="display-title mt-4">Share what your destination requires.</h2><p className="body-copy mt-5">Destination port, packaging preference, material requirement, and expected order details can be reviewed together. Specific port distances and shipping timelines are not claimed here and should be confirmed directly.</p><Button asChild className="mt-8"><Link to="/contact">Discuss export requirements <ArrowRight /></Link></Button></div></div></section>
  </main><Footer /><FloatingWhatsApp /></div>;
}