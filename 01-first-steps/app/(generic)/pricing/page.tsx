import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["Pricing Page", "Roy", "informacion"]
};

export default function PricingPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">Pricing Page</span>
        </main>
    )
}