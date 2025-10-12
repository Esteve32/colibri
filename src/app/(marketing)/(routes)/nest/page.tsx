import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import type { Metadata } from 'next'
import CTA from "../../components/slices/cta";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Research Hub | Colibri',
    description: '...',
}


const Nest = () => {
    return (

        <main className="min-h-full flex flex-col">
            <section className="px-12 py-20">
                <div className="max-w-screen-2xl mx-auto space-y-20">
                    <div className="flex gap-20">
                        <div className="flex-1">
                            <h1 className="text-7xl font-semibold mb-6 max-w-xl">The Colibri Nest</h1>
                            <p className="text-2xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">From Research to Results: The Engine Behind Colibri.</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">Colibri has created Culture-as-a-Service (CaaS), a new category that provides a proactive, systemic, real-time diagnostic of an organisation’s cultural health, making it resilient and AI-ready.</p>
                            <Button size="lg">Join the waitlist</Button>
                        </div>
                    </div>
                    <div>
                        <img src="https://colibri.partners/wp-content/uploads/2025/09/Colibri-Office-HQ-Paris-FR.jpg" className="w-full aspect-square" />
                    </div>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-5xl font-semibold mb-8">About Our Company</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">Our No-Code model offers significant economic advantages, radically minimizing specialized personnel costs and accelerating time-to-market, which directly impacts revenue generation and investor value.</p>
                    <Button size="lg"><Link href="/about">Learn more</Link></Button>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex gap-20">
                    <div>
                        <img src="https://colibri.partners/wp-content/uploads/2025/09/Colibri-rooftop-demo-in-USA-LA.jpg" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-semibold mb-8 leading-tight">Turning Insight into Advantage.</h2>
                        <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">The Nest is our human-centred research and thought leadership hub—a living social lab where culture, technology, and ethics meet.</p>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-20">
                    <div className="text-center">
                        <h2 className="text-5xl font-semibold mb-8">The Nest produces</h2>
                        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Here, we continuously explore the emerging field of AI-Human Experience (AIX®), co-creating with leaders, academics, and practitioners to shape the future of culture in the age of AI.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-20 max-w-screen-xl mx-auto text-lg">
                        <div>
                            <p className="text-secondary-foreground mb-4 max-w-xl leading-relaxed">Case studies, podcasts, and interviews with pioneering voices in business and sport.</p>
                        </div>
                        <div>
                            <p className="text-secondary-foreground mb-4 max-w-xl leading-relaxed">Publishing and heuristics that translate complex insights into practical tools.</p>
                        </div>
                        <div>
                            <p className="text-secondary-foreground mb-4 max-w-xl leading-relaxed">Premium research content and cultural playbooks that help organisations navigate trust, teamwork, and transformation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Separator />

            <CTA />

        </main>

    );
};

export default Nest;
