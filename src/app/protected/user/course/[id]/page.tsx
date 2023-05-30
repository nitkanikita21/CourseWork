"use client";

import Makrdown from "@/components/other/Markdown";
import styles from "./styles.module.scss";
import { AxiosClient } from "@/http/axios";
import useSWR from "swr";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data);

export default function CoursePage({ params }: { params: { id: string } }) {
    console.log(`course id ${params.id}`);
    
    const course = useSWR(`/protected/course/get/${params.id}`, fetcher);


    if (course.isLoading || course.error || course.isValidating) {
        return <div className={styles.root}>
            <h1>Завантаження курсу</h1>
        </div>;
    }

    return <div className={styles.root}>
        <div className={styles.header}>
            {course.data.image != null ? <img width={128} className={styles.img} src={course.data.image} alt="Course image" /> : <></>}
            <h1>{course.data.name}</h1>
            <h3 className={styles.tags}>{JSON.parse(course.data.tags).join(" ")}</h3>
            <h4 className={styles.author}>{course.data.author.name}</h4>
        </div>

        <Makrdown>
            {[course.data.content].join("")}
        </Makrdown>
    </div>;
}