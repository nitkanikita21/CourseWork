"use client";

import Makrdown from "@/components/other/Markdown";
import styles from "./styles.module.scss";
import { AxiosClient } from "@/http/axios";
import useSWR from "swr";
import { useUser } from "@/components/hooks/user";
import { useSession } from "next-auth/react";
import Button from "@/components/button/Button";
import RemoveCourse from "@/components/user/RemoveCourse";
import { useRouter } from "next/navigation";
import ComentarCreator from "@/components/user/course/ComentarCreator";
import ComentarList from "@/components/user/course/ComentarList";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data);

export default function CoursePage({ params }: { params: { id: string } }) {
    console.log(`course id ${params.id}`);
    
    const course = useSWR(`/protected/course/get/${params.id}`, fetcher);
    const router = useRouter();


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
            <RemoveCourse courseId={course.data.id} afterDelete={()=>{
                router.push("/protected/user");
            }}/>
        </div>

        <Makrdown>
            {[course.data.content].join("")}
        </Makrdown>

        <h1 className={styles.comentar__header}>Коментарі до курсу</h1>
        
        <ComentarCreator courseId={course.data.id}/>
        <ComentarList course={course.data}/>
    </div>;
}