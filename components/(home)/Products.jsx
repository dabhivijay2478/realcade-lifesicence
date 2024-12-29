'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import IVFluids from "@/Images/IVFluids.png"
export default function Vission() {
    const testimonials = [
        {
            quote:
                " These fluids are formulated and packed under the most sanitary conditions. In addition, I.V. Fluids are preserved under suitable temperature conditions at our storage facility. We offer our I.V. Fluids at feasible prices so that buyers can easily afford them.",
            name: "I.V. Fluids",
            designation: "Owing to our vast industrial experience and knowledge, we have been tagged as a credible Manufacturer and Supplier for presenting a wonderful range of I.V. Fluids from Gujarat, India",
            src: IVFluids,
        },

    ];
    return (
        <div className="px-4">
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    )
}
