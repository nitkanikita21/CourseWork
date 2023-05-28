"use client";

import Button from "@/components/button/Button"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss";
import hljs from "highlight.js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



export default function AdminPage() {

    const [courseName, setCourseName] = useState<string>("")
    const [courseContent, setCourseContent] = useState<string>("# Hello world! \n Its test text, u can edit this text")

    useEffect(() => {
        hljs.highlightAll()
    })

    return <div className={styles.root}>
        <h1>Create new course</h1>
        <br />
        <h2>Course name</h2>
        <input type="text" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} />

        <h2>Course content</h2>

        <ReactMarkdown className={styles.md_container} remarkPlugins={[remarkGfm]} >
            {courseContent}
        </ReactMarkdown>

        <textarea value={courseContent} className={styles.md_editor} onChange={(e) => { setCourseContent(e.target.value) }}>
            
        </textarea>


        <br />
        <Button style="green">Add group</Button>
    </div>
}