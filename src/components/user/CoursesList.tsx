import { AxiosClient } from "@/http/axios";
import { Course } from "@prisma/client";
import useSWR from "swr";
import CourseBlock from "./CourseBlock";
import styles from "./CoursesList.module.scss";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data);


export default function Courses() {
    type CoursesList = Course[];
    const allCourses = useSWR("/protected/course/get", fetcher);

    if (allCourses.isLoading) {
        return <><h1>Завантаження курсів</h1></>;
    }
    console.log(allCourses.data.courses);
    return <div className={styles.list}>
        {
            // eslint-disable-next-line react/jsx-key
            allCourses.data.courses.map((e: any, index: number) => <CourseBlock key={index} course={e} />)
        }
    </div>;
}