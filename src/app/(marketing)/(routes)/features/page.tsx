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
                            <h1 className="text-7xl font-semibold mb-6 max-w-xl">Culture, Finally Understood.</h1>
                            <p className="text-2xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">Culture isn’t about who fits in or who doesn’t. It’s about how people connect, collaborate, and create value together. Colibri helps you see and strengthen those dynamics — turning understanding into progress.</p>
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
                        <p className="text-xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">The Colibri Platform gives you a clear view of your organisation’s culture. It tracks trust, teamwork, and resilience across teams, highlighting the areas that matter most.</p>
                        <p className="text-muted-foreground mb-4 max-w-xl leading-relaxed">The Platform goes beyond measurement. It provides insights and guidance so leaders and employees can take meaningful action. Colibri turns culture from something abstract into something visible, understandable, and actionable.</p>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="px-12 py-40">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-5xl font-semibold max-w-xl leading-tight mb-8">Turn Invisible Culture Into Visible Results</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12">The Colibri Platform helps organisations see how their culture really works and take action to strengthen it. By embedding responsible AI practices and guiding thoughtful governance, it enables teams to perform better while building a resilient, future-ready culture. With Colibri, culture becomes a true competitive advantage.</p>
                    <Button size="lg">Learn more</Button>
                </div>
            </section>

            <CTA />

        </main>

    );
};

export default Features;
