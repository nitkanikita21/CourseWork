"use client";

import { Header } from "@/components/global/Header";
import globalStyles from "../global.scss";
import Footer from "@/components/global/Footer";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import AuthProvider from "@/components/internal/AuthProvider";

export default async function RootLayout({
    children, // will be a page or nested layout,
}: {
    children: React.ReactNode
}) {
    return <html lang="en">
        <head>
        </head>
        <body>
            <AuthProvider>
                <div className={globalStyles.root}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </AuthProvider>
        </body>
    </html>;
}