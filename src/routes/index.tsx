import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  ClipboardCheck,
  Globe2,
  PackageCheck,
  Play,
  Recycle,
  ScanSearch,
  Settings2,
  Truck,
} from "lucide-react";

import heroImage from "@/assets/pvc-recycling-hero.jpg";
import flakesImage from "@/assets/pvc-flakes.jpg";
import facilityImage from "@/assets/pvc-facility.jpg";
import { Button } from "@/components/ui/button";
import { FloatingWhatsApp, Footer, Header, MetaList, SectionHeading } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PolyCycle Materials | Recycled PVC for Global Industry" },
      { name: "description", content: "A focused recycled PVC materials supplier for international industrial buyers seeking organized processing and export-ready supply conversations." },
      { property: "og:title", content: "PolyCycle Materials | Recycled PVC for Global Industry" },
      { property: "og:description", content: "Recycled PVC materials, organized processing, and clear conversations for international B2B buyers." },
    ],
  }),
  component: HomePage,
});

function createFileRoute(path: "/") {
  return route(path);
}

import { createFileRoute as route } from "@tanstack/react-router";

function HomePage() {
  const trustItems = [
    [ClipboardCheck, "Quality Focused", "A clear path from incoming material to final dispatch."],
    [Boxes, "Bulk Supply", "Material conversations structured around buyer requirements."],
    [PackageCheck, "Export Ready", "Professional packaging discussions for international orders."],
    [Globe2, "Global Inquiries", "One responsive point of contact for buyer questions."],
  ];
  const products = [
    { name: "Recycled PVC Flakes", text: "Sorted and processed PVC material for buyers reviewing recycled feedstock options.", image: flakesImage, tag: "Material / flakes" },
    { name: "Processed PVC Material", text: "A conversation-ready category for processed recycled material requirements.", image: facilityImage, tag: "Processed material" },
    { name: "Custom Requirements", text: "Share your application, desired form, packaging, and destination for review.", image: heroImage, tag: "Buyer-specific" },
  ];
  const process = [
    [Recycle, "01", "Collection & Receiving", "Incoming PVC scrap is received and prepared for review."],
    [ScanSearch, "02", "Sorting", "Material is sorted to organize the next processing stage."],
    [Settings2, "03", "Crushing & Processing", "Processing operations convert scrap into usable material forms."],
    [ClipboardCheck, "04", "Quality Inspection", "Material is reviewed before it moves toward packing."],
    [Truck, "05", "Packaging & Dispatch", "Packaging and shipment details are aligned with the buyer."],
  ];
  return (
    <div>
      <Header />
      <main>
        <section className="hero-section">
          <img src={heroImage} alt="PVC flakes moving through a modern recycling facility" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1104} />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="container-shell relative z-10 grid min-h-[calc(100svh-4.75rem)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">Recycled PVC Materials <span className="mx-2 text-primary-foreground/35">•</span> Global B2B Supply</p>
              <h1 className="display-hero mt-6 text-primary-foreground">Reliable recycled PVC materials for global industries.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/72">We process PVC scrap into quality-focused recycled materials for industrial applications, with a clear path toward consistent supply, responsible recycling, and export-ready packaging.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><Link to="/contact">Request a Quote <ArrowRight /></Link></Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"><Link to="/products">Explore Products <ArrowDownRight /></Link></Button>
              </div>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-primary-foreground/20 pt-6">
                {["Quality Focused", "Bulk Supply", "Export Ready"].map((item) => <div key={item} className="text-xs font-semibold text-primary-foreground/70"><Check className="mb-2 size-4 text-accent" />{item}</div>)}
              </div>
            </div>
            <div className="hidden justify-end lg:flex"><div className="hero-stamp"><span className="font-display text-5xl font-bold text-primary-foreground">PVC</span><span className="mt-3 block max-w-[9rem] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-primary-foreground/60">Scrap to useful material</span><ArrowDownRight className="mt-10 size-7 text-accent" /></div></div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="container-shell grid divide-y divide-border py-7 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustItems.map(([Icon, title, text]) => <div key={title as string} className="flex gap-4 px-5 py-4 first:pl-0 last:pr-0"><div className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/15 text-primary"><Icon /></div><div><h2 className="text-sm font-bold text-foreground">{title as string}</h2><p className="mt-1 text-xs leading-5 text-muted-foreground">{text as string}</p></div></div>)}
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell"><SectionHeading eyebrow="Material categories" title="Recycled PVC materials, framed around your requirement." description="Start with a material category, then share the detail that matters to your application, packaging, and destination." /><div className="mt-12 grid gap-6 md:grid-cols-3">{products.map((product, index) => <article key={product.name} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"><div className="image-frame aspect-[1.18] overflow-hidden"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" width={index === 0 ? 1200 : 1408} height={index === 0 ? 912 : 1008} loading="lazy" /></div><div className="p-6"><p className="eyebrow text-primary">{product.tag}</p><h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-foreground">{product.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{product.text}</p><div className="mt-6 flex items-center justify-between border-t border-border pt-4"><Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-primary">View details <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link><Link to="/contact" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Request quote</Link></div></div></article>)}</div></div>
        </section>

        <section className="section-space bg-secondary/45">
          <div className="container-shell"><SectionHeading eyebrow="Our approach" title="From PVC scrap to recycled material." description="A simple, visible process helps international buyers understand where their requirement sits and what information is needed next." /><div className="mt-14 grid gap-5 md:grid-cols-5">{process.map(([Icon, number, title, text], index) => <div key={number as string} className="relative"><div className="process-step"><div className="flex items-center justify-between"><span className="font-display text-3xl font-bold text-primary/25">{number as string}</span><Icon className="size-5 text-primary" /></div><h3 className="mt-8 text-base font-bold text-foreground">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></div>{index < process.length - 1 ? <span className="process-line" /> : null}</div>)}</div><div className="mt-10"><Button asChild variant="outline"><Link to="/process">Explore the full process <ArrowRight /></Link></Button></div></div>
        </section>

        <section className="section-space"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]"><div className="image-frame aspect-[1.08] overflow-hidden rounded-lg"><img src={facilityImage} alt="Operators and machinery inside a PVC processing facility" className="h-full w-full object-cover" width={1408} height={1008} loading="lazy" /></div><div><p className="eyebrow text-primary">The facility</p><h2 className="display-title mt-4">A clear view of how material moves.</h2><p className="body-copy mt-5">From incoming PVC scrap to processed recycled material, our facility story is organized around efficient processing, quality-focused operations, and professional buyer communication.</p><MetaList items={["Responsible recycling operations", "Quality-focused material review", "B2B conversations built around your requirement"]} /><div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link to="/process">Explore our process <ArrowRight /></Link></Button><Button asChild variant="ghost"><Link to="/about">About the company</Link></Button></div></div></div></section>

        <section className="section-space bg-primary text-primary-foreground"><div className="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow text-accent">Global buyer conversations</p><h2 className="display-title mt-4 text-primary-foreground">Ready for a better material conversation?</h2><p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/70">Share the material, quantity, application, packaging preference, and destination that matter to you. We’ll structure the next discussion around what is known and what still needs confirmation.</p><Button asChild className="mt-8"><Link to="/contact">Discuss your requirement <ArrowRight /></Link></Button></div><div className="relative min-h-64 overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.04] p-7"><div className="map-lines" /><div className="relative z-10 grid h-full grid-cols-2 gap-3 sm:grid-cols-4">{[[Globe2, "International buyer inquiries"], [Boxes, "Bulk orders"], [PackageCheck, "Export packaging"], [Truck, "Shipment coordination"]].map(([Icon, label]) => <div key={label as string} className="flex flex-col justify-end border-l border-primary-foreground/15 pl-4"><Icon className="mb-4 size-5 text-accent" /><span className="text-xs font-semibold leading-5 text-primary-foreground/70">{label as string}</span></div>)}</div></div></div></section>

        <section className="video-section"><img src={facilityImage} alt="Recycling operations inside an industrial facility" className="absolute inset-0 h-full w-full object-cover" width={1408} height={1008} loading="lazy" /><div className="absolute inset-0 bg-video-overlay" /><div className="container-shell relative z-10 flex min-h-[32rem] flex-col items-center justify-center text-center"><Button variant="outline" size="icon" className="size-16 rounded-full border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground" aria-label="Play facility video placeholder"><Play className="ml-1 fill-current" /></Button><p className="eyebrow mt-8 text-accent">Inside the facility</p><h2 className="display-title mt-4 text-primary-foreground">See how recycled material takes shape.</h2><p className="mt-4 text-sm text-primary-foreground/65">Factory video placeholder — ready to replace with the company’s own footage.</p></div></section>

        <section className="section-space"><div className="container-shell"><div className="cta-panel"><div><p className="eyebrow text-accent">Start a conversation</p><h2 className="display-title mt-4 text-primary-foreground">Looking for recycled PVC materials?</h2><p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/70">Tell us your material requirement, quantity, application, and packaging preferences.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild><Link to="/contact">Request a Quote <ArrowRight /></Link></Button><Button asChild variant="outline" className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Contact Us</Link></Button></div></div></div></section>
      </main>
      <Footer /><FloatingWhatsApp />
    </div>
  );
}