
interface Admin {
    name: string;
    email: string;
    dateAdded: string;
    lastActive: string;
}

const admins: Admin[] = [
    {
        name: "Steven Bayer",
        email: "steve@colibri.partners",
        dateAdded: "January 7, 2025",
        lastActive: "May 8, 2025 08:23"
    },
    {
        name: "Kersten Bepler",
        email: "kersten@colibri.partners",
        dateAdded: "May 8, 2025",
        lastActive: "July 14, 2025 19:47"
    },
    {
        name: "Estève Pannetier",
        email: "esteve@colibri.partners",
        dateAdded: "June 14 2, 2025",
        lastActive: "July 2, 2025 13:05"
    },

    {
        name: "Maria Gaci",
        email: "maria@colibri.partners",
        dateAdded: "April 13, 2025",
        lastActive: "September 30, 2025 22:11"
    },
];




import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default async function TeamAccess() {

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-xl font-semibold mb-1'>Team access</h2>
                    <p className='text-gray-500'>Manage your team members and their account permissions here.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant="outline">Create new team</Button>
                    <Button><Plus />Add team member</Button>

                </div>
            </div>
            <Separator />
            <div className='flex gap-10'>
                <div className='max-w-sm'>
                    <p className='font-medium text-sm mb-1'>Admin users</p>
                    <p className='text-sm text-muted-foreground'>Admins can add and remove users and manage organization-level settings.</p>
                </div>
                <Table className='border'>
                    <TableHeader>
                        <TableRow className='bg-muted'>
                            <TableHead>Name</TableHead>
                            <TableHead>Date added</TableHead>
                            <TableHead>Last active</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            admins.map((user, id) => (
                                <TableRow key={id}>
                                    <TableCell className="flex gap-4 items-center">
                                        <Avatar>
                                            <AvatarImage src="/assets/miki.jpeg" className="size-12 rounded-full" />
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">{user.name}</p>
                                            <p className="text-muted-foreground">{user.email}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{user.dateAdded}</TableCell>
                                    <TableCell>{user.lastActive}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </div>


    );
}
