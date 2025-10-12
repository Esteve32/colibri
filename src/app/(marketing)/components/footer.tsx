import Link from "next/link";
import { mainRoutes } from "../_data/routes";


export default function Footer() {
    return (
        <div className="py-20 flex flex-col space-y-20 max-w-screen-2xl mx-auto">

            <div className="lg:grid grid-cols-12 gap-20">
                <div className="lg:col-span-3">
                    <p className="text-muted-foreground">Colibri empowers organizations to measure, manage, and optimize culture as a living ecosystem.</p>
                </div>

                <div className="space-y-4 col-span-4">
                    <h3 className="font-semibold">Colibri</h3>
                    <div className="space-y-2 flex flex-col">
                        {
                            mainRoutes.map((route, idx) => (
                                <Link href={route.url} key={idx}>{route.title}</Link>
                            ))
                        }
                    </div>
                </div>

                <div className="lg:col-span-3 lg:col-start-8">
                    <h3 className="font-semibold mb-4">Get In Touch</h3>
                    <p className="leading-loose">Talrain 1<br/>
                    6043 Adligenswil<br/>
                    Luzern, Switzerland</p>
                </div>
            </div>
            <div className="text-sm text-muted-foreground py-8 border-t">
                © 2025 All Rights Reserved.
            </div>
        </div>

    )
}
