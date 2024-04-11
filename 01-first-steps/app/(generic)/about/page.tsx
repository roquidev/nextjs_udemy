import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["About Page", "Roy", "informacion"]
};


export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">About Page</span>
        </main>
    )
}