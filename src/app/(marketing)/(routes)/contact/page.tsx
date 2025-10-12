
import { Separator } from "@/components/ui/separator";

import type { Metadata } from 'next'
import CTA from "../../components/slices/cta";

export const metadata: Metadata = {
  title: 'Contact us - Colibri',
  description: '...',
}

const Contact = () => {
  return (

    <main className="min-h-full flex flex-col">
      <section className="px-12 py-20">
        <div className="max-w-screen-2xl mx-auto space-y-20">
          <div className="flex gap-20">
            <div className="flex-1">
              <h1 className="text-7xl font-semibold mb-6 max-w-xl">Contact us</h1>
              <p className="text-xs uppercase mb-8 max-w-xl leading-relaxed text-muted-foreground">Address</p>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">Talrain 1, 6043<br />Adligenswil, Luzern<br />Switzerland</p>
            </div>
            <div><img src="https://colibri.partners/wp-content/uploads/2025/09/Colibri-Office-HQ-Paris-FR.jpg" /></div>
          </div>

        </div>
      </section>

      <CTA />
    </main>
  )
};

export default Contact;
