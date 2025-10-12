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
}

const platforms: Platform[] = [
    // Scheduling
    {
        name: "Calendly",
        category: "Scheduling",
        website: "https://calendly.com",
        description: "Automated scheduling tool that integrates with calendars."
    },
    {
        name: "Doodle",
        category: "Scheduling",
        website: "https://doodle.com",
        description: "Simplifies group scheduling by finding common available times."
    },
    {
        name: "Google Calendar",
        category: "Scheduling",
        website: "https://calendar.google.com",
        description: "Google’s calendar app for scheduling and time management."
    },

    // Communication
    {
        name: "Slack",
        category: "Communication",
        website: "https://slack.com",
        description: "Team communication and collaboration platform with channels."
    },
    {
        name: "Microsoft Teams",
        category: "Communication",
        website: "https://www.microsoft.com/microsoft-teams",
        description: "Chat, meetings, and file collaboration for organizations."
    },
    {
        name: "Zoom",
        category: "Communication",
        website: "https://zoom.us",
        description: "Video conferencing and communication tool."
    },

    // AI Note-takers
    {
        name: "Otter.ai",
        category: "AI Note-takers",
        website: "https://otter.ai",
        description: "AI-powered transcription and meeting note-taking tool."
    },
    {
        name: "Fireflies.ai",
        category: "AI Note-takers",
        website: "https://fireflies.ai",
        description: "AI meeting assistant for recording and transcribing calls."
    },
    {
        name: "Fathom",
        category: "AI Note-takers",
        website: "https://fathom.video",
        description: "Free AI notetaker for Zoom, Google Meet, and MS Teams."
    },

    // Email
    {
        name: "Gmail",
        category: "Email",
        website: "https://mail.google.com",
        description: "Google’s widely used email service with strong integrations."
    },
    {
        name: "Outlook",
        category: "Email",
        website: "https://outlook.com",
        description: "Microsoft’s email service with calendar and task management."
    },
    {
        name: "Proton Mail",
        category: "Email",
        website: "https://proton.me",
        description: "Privacy-focused encrypted email service."
    },

    // Project Management
    {
        name: "Trello",
        category: "Project Management",
        website: "https://trello.com",
        description: "Kanban-style project management tool."
    },
    {
        name: "Asana",
        category: "Project Management",
        website: "https://asana.com",
        description: "Task and workflow management platform for teams."
    },
    {
        name: "Jira",
        category: "Project Management",
        website: "https://www.atlassian.com/software/jira",
        description: "Agile project management tool popular among software teams."
    },
    {
        name: "Notion",
        category: "Project Management",
        website: "https://notion.so",
        description: "All-in-one workspace for notes, tasks, docs, and projects."
    }
];



import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Circle, Monitor } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default async function Password() {

    const categories = Array.from(
        new Set(platforms.map((p) => p.category))
    );

    return (
        <div className='w-full max-w-screen-2xl mx-auto space-y-6'>

            <div className='text-sm bg-white border rounded-xl space-y-6 divide-y'>
                <div className='p-5'>
                    <h2 className='text-2xl font-semibold mb-1'>Password</h2>
                    <p className='text-gray-500'>Please enter your current password to change your password.</p>
                </div>
                <div className='flex gap-10 items-center text-nowrap px-5 pb-5'>
                    <div className='min-w-[200px] font-medium'>Current password</div>
                    <div>
                        <Input placeholder='Enter current password' />
                    </div>
                </div>
                <div className='flex gap-10 items-center text-nowrap px-5 pb-5'>
                    <div className='min-w-[200px] font-medium'>New password</div>
                    <div>
                        <Input placeholder='Enter new password' />
                        <p className='text-xs text-muted-foreground mt-2'>Your new password must be more than 8 characters.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center px-5 pb-5'>
                    <div className='min-w-[200px] font-medium'>Confirm new password</div>
                    <div><Input placeholder='Confirm new password' /></div>
                </div>

                <div className='flex justify-end gap-3 px-5 pb-5'>
                    <Button variant="outline">Cancel</Button>
                    <Button>Update password</Button>
                </div>
            </div>

            <div className='text-sm bg-white border rounded-xl'>
                <div className="p-5">
                    <h3 className='font-semibold text-xl'>Where you’re logged in</h3>
                    <p className='text-gray-500'>We’ll alert you via email if there is any unusual activity on your account.</p>
                </div>
                <div className='flex items-center gap-4 p-5'>
                    <Monitor className='text-muted-foreground' />
                    <div>
                        <div className='font-medium'>2024 MacBook Pro 14-inch <Badge variant="outline"><Circle className='size-1 fill-green-600 stroke-0' /> Active now</Badge></div>
                        <p className='text-muted-foreground'>Melbourne, Australia • 22 Jan at 10:40am</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-5'>
                    <Monitor className='text-muted-foreground' />
                    <div>
                        <div className='font-medium'>2024 MacBook Pro 14-inch</div>
                        <p className='text-muted-foreground'>Melbourne, Australia • 22 Jan at 10:40am</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
