import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import type { Metadata } from 'next'
import CTA from "../../components/slices/cta";

export const metadata: Metadata = {
    title: 'Our Platform | Colibri',
    description: '...',
}


const Features = () => {
    return (

        <main className="min-h-full flex flex-col">
            <section className="px-12 py-20">
                <div className="max-w-screen-2xl mx-auto space-y-20">
                    <div className="flex gap-20">
                        <div className="flex-1">
                            <h1 className="text-7xl font-semibold mb-6 max-w-xl">Culture, Finally Made Measurable.</h1>
                            <p className="text-2xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">Culture was the blind spot of business. Now, with Colibri’s Platform, you can see it, measure it, and improve it, turning culture into your most reliable driver of performance.</p>
                        </div>
                        <div>
                            <img src="https://colibri.partners/wp-content/uploads/2025/09/Colibri-Office-HQ-Paris-FR.jpg" className="w-full aspect-square" />
                        </div>
                    </div>

                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex gap-20">
                    <div>
                        <img src="/assets/images/4.jpg" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-semibold mb-8">The Colibri Platform</h2>
                        <p className="text-xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">The Platform is the world’s first Culture-as-a-Service (CaaS) system, your real-time window into the health of your organisation.</p>
                        <p className="text-muted-foreground mb-4 max-w-xl leading-relaxed">At its core is our Cultural Health Index (CHI®), a “cultural thermometer” that measures trust, teamwork, and resilience across your teams. With dashboards for organisations, teams, and individuals, the Platform maps your cultural DNA and shows where attention is needed most.</p>
                        <p className="text-muted-foreground mb-4 max-w-xl leading-relaxed">But it doesn’t stop at measurement. The Platform delivers actionable insights and personalised nudges, helping leaders and employees take the right steps at the right time. It transforms culture from something intangible into something visible, measurable, and manageable.</p>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-5xl font-semibold max-w-xl leading-tight mb-8">Turn Invisible Culture Into Visible Results.</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">By embedding humane governance and ethical AI practices, the Platform ensures that organisations not only improve performance, but also build cultures ready for the challenges of the AI age.With the Colibri Platform, culture becomes your competitive advantage.</p>
                    <Button size="lg">Learn more</Button>
                </div>
            </section>

            <CTA />

        </main>

    );
};

export default Features;
