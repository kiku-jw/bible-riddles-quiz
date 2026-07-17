import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";

const nunito = Nunito({
    subsets: ["latin", "cyrillic"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Біблійні загадки — інтерактивна вікторина",
    description: "27 ілюстрованих біблійних загадок українською, російською та англійською мовами.",
    openGraph: {
        title: "Біблійні загадки 📖✨",
        description: "Перевір знання Біблії та кмітливість у 27 ілюстрованих загадках.",
        url: "https://kiku-jw.github.io/bible-riddles-quiz/",
        siteName: "Bible Riddles Quiz",
        images: [
            {
                url: "https://kiku-jw.github.io/bible-riddles-quiz/og-preview.png",
                width: 1200,
                height: 630,
                alt: "Біблійні загадки — інтерактивна вікторина",
            },
        ],
        locale: "uk_UA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Біблійні загадки 📖✨",
        description: "27 ілюстрованих загадок для перевірки знань Біблії та кмітливості.",
        images: ["https://kiku-jw.github.io/bible-riddles-quiz/og-preview.png"],
    },
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
