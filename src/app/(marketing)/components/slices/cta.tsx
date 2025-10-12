import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="px-12 py-40 bg-accent">
            <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-5xl font-semibold mb-6 max-w-2xl leading-tight">Empowering People. Transforming Organizations.</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">Join the waitlist for early access to Colibri’s platform and lead the shift from UX to AIX®.</p>
                <div className="flex items-center gap-3">
                    <Input placeholder="Enter your E-mail address…" className="bg-card h-12 rounded-full px-6 w-[300px]" />
                    <Button size="lg" className="px-12 flex items-center gap-8"><span>Join today</span> <ArrowRight/></Button>
                </div>
            </div>
        </section>
    )
}