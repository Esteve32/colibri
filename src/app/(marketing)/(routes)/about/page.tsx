import { Separator } from "@/components/ui/separator";

import type { Metadata } from 'next'
import CTA from "../../components/slices/cta";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: 'About us | Colibri',
    description: '...',
}

const teamMembers = [
    {
        name: "Steve",
        title: "Olympic Leadership",
        image: "steve.png",
        linkedIn: "",
    },
    {
        name: "Estève",
        title: "Collective Intelligence",
        image: "esteve.png",
        linkedIn: "",
    },
    {
        name: "Kersten",
        title: "Business Ethics",
        image: "kersten.png",
        linkedIn: "",
    },
    {
        name: "Hash",
        title: "Brand & Marketing",
        image: "hash.png",
        linkedIn: "",
    },
    {
        name: "Maria",
        title: "AIX Research",
        image: "maria.png",
        linkedIn: "",
    },
    {
        name: "Miki",
        title: "AIX Design",
        image: "miki.png",
        linkedIn: "",
    },
];

const AboutUs = () => {
    return (

        <main className="min-h-full flex flex-col">
            <section className="px-12 py-20">
                <div className="max-w-screen-2xl mx-auto space-y-20">
                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <h1 className="text-7xl font-semibold mb-6 max-w-xl">Our Team</h1>
                        </div>
                        <div>
                            <p className="text-2xl text-secondary-foreground mb-8 leading-relaxed">We bring together decades of experience in high-performance sport and global business transformation to design cultures that are resilient, ethical, and ready for the age of AI.</p>
                            <p className="text-xl text-muted-foreground leading-relaxed">At Colibri, we are more than a team, we are a collective of Olympic coaches, entrepreneurs, researchers, and culture builders united by one mission, to help organisations thrive through trust, teamwork, and conscious leadership.</p>
                        </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-3 gap-20 text-center max-w-screen-lg mx-auto">
                        {
                            teamMembers.map((member, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <img src={`/assets/avatars/${member.image}`} className="size-40 rounded-full mb-4" />
                                    <p className="text-2xl font-semibold">{member.name}</p>
                                    <p className="text-muted-foreground mb-4">{member.title}</p>
                                    <div><Button variant="secondary"><Link href={member.linkedIn} className="flex gap-2 items-center"><Linkedin className="fill-primary stroke-0" /></Link></Button></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <CTA />

        </main>
    )
};

export default AboutUs;
