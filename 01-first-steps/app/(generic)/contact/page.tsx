import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["Contact Page", "Roy", "informacion"]
};


export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">Contact Page</span>
        </main>
    )
}