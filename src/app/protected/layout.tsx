"use client";

import { Header } from "@/components/global/Header";
import styles from "./styles.module.scss";
import Footer from "@/components/global/Footer";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export default async function CabinetLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            {children}
        </>
    );
}