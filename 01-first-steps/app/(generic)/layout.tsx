import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="text-center text-2xl">Hello World</h1>
                { children }
            </div>
        </>
    )
}
