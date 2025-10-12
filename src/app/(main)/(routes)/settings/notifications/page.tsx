
const notificationTypes = [
    {
        name: "Comments",
        description: "These are notifications for comments on your posts and replies to your comments.",
        push: true,
        email: false
    },
    {
        name: "Tags",
        description: "These are notifications for when someone tags you in a comment, post or story.",
        push: false,
        email: false
    },
    {
        name: "Reminders",
        description: "These are notifications to remind you of updates you might have missed.",
        push: false,
        email: true
    },
    {
        name: "More activity about you",
        description: "These are notifications for posts on your profile, likes and other reactions to your posts, and more.",
        push: true,
        email: false,
    },
];

import { Switch } from '@/components/ui/switch';
import { Label } from "@/components/ui/label";

export default async function NotificationSettings() {

    // const categories = Array.from(
    //     new Set(platforms.map((p) => p.category))
    // );

    return (

        <div className='flex flex-col space-y-8'>
            <div>
                <h2 className='text-2xl font-semibold mb-1'>Notification settings</h2>
                <p className='text-gray-500'>We may still send you important notifications about your account outside of your notification settings.</p>
            </div>

            <div className='divide-y divide-zinc-200 space-y-4'>
            {notificationTypes.map((notification) => (
                <section key={notification.name} className='flex items-center gap-10 bg-card border rounded-xl p-8 shadow'>
                    <div className="basis-1/3">
                        <h2 className="font-medium mb-1">{notification.name}</h2>
                        <p className="text-gray-500 text-sm">{notification.description}</p>
                    </div>
                    <div className="flex flex-col space-y-4">

                        <Label>
                            {notification.push ?  <Switch checked  />  :  <Switch  /> }                            
                            Push
                        </Label>
                        <Label>
                            {notification.email ?  <Switch checked  />  :  <Switch  /> }                            
                            Email
                        </Label>
                    </div>
                </section>
            ))}
            </div>

        </div>
    );
}
