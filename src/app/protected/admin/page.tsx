"use client";

import Button from "@/components/button/Button";
import Makrdown from "@/components/other/Markdown";
import { AxiosClient } from "@/http/axios";
import { Course } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";


export default function AdminPage() {

    const session = useSession();
    const router = useRouter();

    const [courseName, setCourseName] = useState<string>("COURSE NAME");
    const [tags, setTags] = useState<string[]>(["CSS", "HTML", "Web"]);
    const [image, setImage] = useState<string | null>(null);

    const [courseContent, setCourseContent] = useState<string>("# Hello world! \n Its test text, u can edit this text");

    function createCourse() {
        AxiosClient.post("/protected/course/create", {
            content: courseContent,
            authorId: session.data?.user.id,
            image: image,
            name: courseName,
            tags: JSON.stringify(tags)
        } as Course);
        router.push("/protected/user");

    }

    return <div className={styles.root}>
        <h1>Create new course</h1>
        <br />
        <h2>Course name</h2>
        <input type="text" value={courseName} onChange={(e) => { setCourseName(e.target.value); }} />

        <h2>Tags</h2>
        <p>{tags.join(", ")}</p>
        <input type="text" value={tags.join(",")} onChange={(e) => { setTags(e.target.value.split(",")); }} />
        <h2>Image url</h2>
        {image != null ? <img alt="Image" src={image} width={256} height={256}></img> : <></>}
        <input type="text" value={image != null ? image : ""} onChange={(e) => { setImage(e.target.value); }} />

        <br />
        <Button style="green" onClick={createCourse}>Create</Button>

        <textarea value={courseContent} className={styles.md_editor} onChange={(e) => { setCourseContent(e.target.value); }}>

        </textarea>
        <h2>Course content</h2>
        <Makrdown className={styles.md_container}>
            {courseContent}
        </Makrdown>


    </div>;
}