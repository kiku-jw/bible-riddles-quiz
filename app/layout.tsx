import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";

const nunito = Nunito({
    subsets: ["latin", "cyrillic"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Bible Quiz for Kids",
    description: "A beautiful journey through biblical times.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk" className={`${nunito.variable} font-sans`}>
            <body>{children}</body>
        </html>
    );
}
