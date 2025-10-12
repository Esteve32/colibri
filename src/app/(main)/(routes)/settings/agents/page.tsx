import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Card, CardAction, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, Mail } from 'lucide-react';

export default async function Agents() {

    return (

        <div className='w-full max-w-screen-2xl mx-auto space-y-8'>
            <div>
                <h2 className='text-2xl font-semibold mb-1'>AI Agents</h2>
                <p className='text-gray-500'>Manage your billing and payment details.</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <Card>
                    <CardHeader className='flex justify-between items-end'>
                        <div>
                            <h3 className='text-foreground mb-1'>Basic plan</h3>
                            <p className='text-muted-foreground'>Our most popular plan for small teams.</p></div>
                        <div className='flex items-end gap-2'>
                            <p className='text-4xl font-semibold text-foreground'>$10</p>
                            <span className='text-muted-foreground'>per month</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className='mb-2 text-sm text-secondary-foreground'>14 of 20 users</p>
                        <Progress value={50} />                        
                    </CardContent>
                    <CardFooter className='border-t border-t-border flex justify-end p-4'>
                        <Button variant="link">Upgrade plan <ArrowUpRight/></Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <h3 className='text-foreground'>Payment method</h3>
                        <p className='text-muted-foreground'>Change how you pay for your plan.</p>
                    </CardHeader>
                    <CardContent>
                        <div className='border rounded-md p-4 flex justify-between'>
                            <div className="flex gap-3 items-start">
                                <img src="/assets/logos/stripe.svg"/>
                                <div>
                                <p>Visa ending in 1234</p>
                                <p className="text-muted-foreground text-sm">Expiry 06/2025</p>
                                <Link href="#" className='text-primary flex gap-2 items-center mt-4'>
                                    <Mail className='size-4 text-muted-foreground' /> billing@colibri.com
                                </Link>
                                </div>
                            </div>
                            <Button variant="outline">Edit</Button>
                        </div>
                    </CardContent>                    
                </Card>
            </div>            

        </div>


    );
}
