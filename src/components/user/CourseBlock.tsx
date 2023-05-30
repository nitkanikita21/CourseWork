import { useRouter } from "next/navigation";
import styles from "./Course.module.scss";

export default function CourseBlock({
    course
}: {course: any}) {
    const router = useRouter();
    console.log(`course id: ${course.id}`);
    function redirect() {
        router.push(`/protected/user/course/${course.id}`);
    }

    return <>
        <div onClick={redirect} className={styles.root}>
            {course.image != null ? <img width={128} className={styles.img} src={course.image} alt="Course image"/> : <></>}
            <div className={styles.texts}>
                <h2 className={styles.texts__name}>{course.name}</h2>
                <p className={styles.texts__tags}>{JSON.parse(course.tags).join(" ")}</p>
                <h3 className={styles.texts__author}>{course.author.name}</h3>
            </div>
        </div>
    </>;
}