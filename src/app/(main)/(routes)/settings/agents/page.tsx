import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Card, CardAction, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, Mail } from 'lucide-react';
import AICompanionList from "./AICompanionList";

export default async function Agents() {

    return (

        <div className='w-full max-w-screen-2xl mx-auto space-y-8'>
            <div>
                <h2 className='text-2xl font-semibold mb-1'>AI Agents</h2>
                <p className='text-gray-500'>Choose your team’s dedicated AI companion. Each one is tuned for specific expertise areas.</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
               <AICompanionList />
            </div>            

        </div>


    );
}
