"use client";

import classNames from "classnames";
import hljs from "highlight.js";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Markdown.module.scss";

export default function Makrdown({ children, className = "" }: {
    children: string,
    className?: string
}) {
    console.log(`${children.toString()}`);

    return <>
        <ReactMarkdown className={classNames(className, styles.root)} remarkPlugins={[remarkGfm]} >
            {children}
        </ReactMarkdown>
    </>;
}