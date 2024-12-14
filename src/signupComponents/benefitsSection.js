import React, { useEffect, useRef } from "react";

function BenefitsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("BenefitsSection has reached the end of the viewport");
                }
            });
        }, {
            threshold: 1.0 // Trigger when 100% of the section is visible
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="h-[400px] bg-green-300">
            11111
        </div>
    );
}

export default BenefitsSection;