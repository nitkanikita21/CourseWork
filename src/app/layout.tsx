"use client";

import { Header } from "@/components/global/Header";
import globalStyles from "@/global.module.scss";
import Footer from "@/components/global/Footer";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import AuthProvider from "@/components/internal/AuthProvider";

export default async function RootLayout({
    children, // will be a page or nested layout,
}: {
    children: React.ReactNode
}) {
    return <html className={globalStyles.html} lang="en">
        <head>
        </head>
        <body>
            <AuthProvider>
                <div>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </AuthProvider>
        </body>
    </html>;
}