
type PlatformCategory =
    | "Scheduling"
    | "Communication"
    | "AI Note-takers"
    | "Email"
    | "Project Management";

interface Platform {
    name: string;
    category: PlatformCategory;
    website: string;
    description: string;
    icon: string;
    status: boolean;
}

const platforms: Platform[] = [
    
    // Scheduling
    {
        name: "Google Calendar",
        category: "Scheduling",
        website: "https://calendar.google.com",
        description: "Google’s calendar app for scheduling and time management.",
        icon: "google_calendar.jpg",
        status: true,
    },
    {
        name: "Calendly",
        category: "Scheduling",
        website: "https://calendly.com",
        description: "Automated scheduling tool that integrates with calendars.",
        icon: "calendly.jpg",
        status: false,
    },    
    

    // Communication
    {
        name: "Google Meet",
        category: "Communication",
        website: "https://meet.google.com",
        description: "Connect, collaborate, and celebrate from anywhere with Google Meet.",
        icon: "meet.jpg",
        status: true,
    },
    {
        name: "Slack",
        category: "Communication",
        website: "https://slack.com",
        description: "Team communication and collaboration platform with channels.",
        icon: "slack.jpg",
        status: true,
    },
    {
        name: "Microsoft Teams",
        category: "Communication",
        website: "https://www.microsoft.com/microsoft-teams",
        description: "Chat, meetings, and file collaboration for organizations.",
        icon: "teams.jpg",
        status: false,
    },
    {
        name: "Zoom",
        category: "Communication",
        website: "https://zoom.us",
        description: "Video conferencing and communication tool.",
        icon: "zoom.jpg",
        status: false,
    },

    // AI Note-takers
    {
        name: "Otter.ai",
        category: "AI Note-takers",
        website: "https://otter.ai",
        description: "AI-powered transcription and meeting note-taking tool.",
        icon: "otter.png",
        status: false,
    },
    {
        name: "Fireflies.ai",
        category: "AI Note-takers",
        website: "https://fireflies.ai",
        description: "AI meeting assistant for recording and transcribing calls.",
        icon: "fireflies.jpg",
        status: false,
    },
    {
        name: "Fathom",
        category: "AI Note-takers",
        website: "https://fathom.video",
        description: "Free AI notetaker for Zoom, Google Meet, and MS Teams.",
        icon: "fathom.webp",
        status: true,
    },

    // Email
    {
        name: "Gmail",
        category: "Email",
        website: "https://mail.google.com",
        description: "Google’s widely used email service with strong integrations.",
        icon: "gmail.jpg",
        status: true,
    },
    {
        name: "Outlook",
        category: "Email",
        website: "https://outlook.com",
        description: "Microsoft’s email service with calendar and task management.",
        icon: "outlook.jpg",
        status: false,
    },
    {
        name: "Proton Mail",
        category: "Email",
        website: "https://proton.me",
        description: "Privacy-focused encrypted email service.",
        icon: "proton.jpg",
        status: false,
    },

    // Project Management
    {
        name: "Trello",
        category: "Project Management",
        website: "https://trello.com",
        description: "Kanban-style project management tool.",
        icon: "trello.jpg",
        status: false,
    },
    {
        name: "Asana",
        category: "Project Management",
        website: "https://asana.com",
        description: "Task and workflow management platform for teams.",
        icon: "asana.jpg",
        status: false,
    },
    {
        name: "Jira",
        category: "Project Management",
        website: "https://www.atlassian.com/software/jira",
        description: "Agile project management tool popular among software teams.",
        icon: "jira.jpg",
        status: true,
    },
     {
        name: "ClickUp",
        category: "Project Management",
        website: "https://notion.so",
        description: "All-in-one workspace for notes, tasks, docs, and projects.",
        icon: "clickup.jpg",
        status: false,
    },
    {
        name: "Notion",
        category: "Project Management",
        website: "https://notion.so",
        description: "All-in-one workspace for notes, tasks, docs, and projects.",
        icon: "notion.jpg",
        status: true,
    }
];


import { Switch } from '@/components/ui/switch';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Settings',
    description: '...',
}

export default async function Integrations() {

    const categories = Array.from(
        new Set(platforms.map((p) => p.category))
    );

    return (

        <div className='w-full max-w-screen-2xl mx-auto space-y-8'>
            <div>
                <h2 className='text-2xl font-semibold mb-1'>Connected apps</h2>
                <p className='text-gray-500'>Supercharge your workflow and connect the tool you use every day.</p>
            </div>
            <div className='space-y-6'>

                {categories.map((category) => (
                    <section key={category} className='grid grid-cols-[320px_1fr] p-8 bg-card rounded-xl border border-border shadow'>
                        <h2 className="font-semibold">{category}</h2>
                        <div className="flex flex-col divide-y divide-gray-200">
                            {platforms
                                .filter((p) => p.category === category)
                                .map((platform) => (
                                    <div
                                        key={platform.name}
                                        className="flex justify-between items-center py-4"
                                    >   

                                        <div className='w-full flex gap-8'>
                                            <img src={`/assets/logos/${platform.icon}`} className='size-12 rounded-xl bg-card border border-border'/>
                                            <div>
                                            <h3 className="font-semibold">{platform.name}</h3>
                                            <p className="text-gray-500 text-sm">{platform.description}</p>
                                            <Link className='text-primary text-sm underline' href={platform.website} target='_blank'>Learn more</Link>
                                            </div>
                                        </div>
                                        { platform.status ? <Switch checked /> : <Switch />}
                                    </div>

                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>


    );
}
