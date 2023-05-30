"use client";

export default async function CabinetLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            {children}
        </>
    );
}