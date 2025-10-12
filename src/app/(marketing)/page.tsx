import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { Brain, BrainCircuit, BrainCog, ChartBarIncreasing } from "lucide-react";
import CTA from "./components/slices/cta";

const MarketingPage = () => {
    return (
        <main className="min-h-full flex flex-col">
            <section className="px-12 pb-40">
                <div className="max-w-screen-2xl mx-auto gap-8 flex items-center">
                    <div className="flex-1">
                        <h1 className="text-7xl font-semibold mb-6 max-w-xl">Leading the Human-Centric AI Revolution</h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">Colibri has created Culture-as-a-Service (CaaS), a new category that provides a proactive, systemic, real-time diagnostic of an organisation’s cultural health, making it resilient and AI-ready.</p>
                        <Button size="lg">Join the waitlist</Button>
                    </div>
                    <div className="flex-1"><img src="/assets/images/1.jpg" /></div>
                </div>

            </section>
            <Separator />
            <section className="px-12 space-y-20 py-40 flex flex-col items-center">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-5xl font-semibold mb-8">About Our Company</h2>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">Our No-Code model offers significant economic advantages, radically minimizing specialized personnel costs and accelerating time-to-market, which directly impacts revenue generation and investor value.</p>
                    <Button size="lg"><Link href="/about">Learn more</Link></Button>
                </div>
                <div className="mx-auto"><img src="/assets/images/5.jpg" /></div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex gap-20 items-center">
                    <div><img src="/assets/images/3.jpg" /></div>
                    <div>
                        <h2 className="text-5xl font-semibold mb-8 leading-tight max-w-xl">Our TEAL Organisational Structure</h2>
                        <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">Our internal structure is built around seven key teams or domains that mirror our strategic priorities and foster a culture of distributed responsibility and continuous learning.</p>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex gap-20">
                    <div className="basis-1/3">
                        <h2 className="text-5xl font-semibold leading-tight">An Unassailable Advantage</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <div className="mb-8 rounded-xl border size-16 flex items-center justify-center"><BrainCog /></div>
                            <h3 className="text-2xl font-semibold mb-4">Elite Consulting Rigor</h3>
                            <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">We provide deep, systemic analysis of organizational health, moving beyond simple metrics to understand root causes.</p>
                        </div>
                        <div>
                            <div className="mb-8 rounded-xl border size-16 flex items-center justify-center"><BrainCircuit /></div>
                            <h3 className="text-2xl font-semibold mb-4">Specialised ONA Power</h3>
                            <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">We productise the complex science of organisational network analysis to reveal hidden collaboration dynamics.</p>
                        </div>
                        <div>
                            <div className="mb-8 rounded-xl border size-16 flex items-center justify-center"><Brain /></div>
                            <h3 className="text-2xl font-semibold mb-4">Humane AI Governance</h3>
                            <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">We transform AI ethics and compliance into a core strategic asset.</p>
                        </div>
                        <div>
                            <div className="mb-8 rounded-xl border size-16 flex items-center justify-center"><ChartBarIncreasing /></div>
                            <h3 className="text-2xl font-semibold mb-4">Research Hub Flywheel</h3>
                            <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">Our Nest creates a self-reinforcing cycle of insight and innovation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />


        </main>
    );
};

export default MarketingPage;
