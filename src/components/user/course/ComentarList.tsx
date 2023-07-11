import { AxiosClient } from "@/http/axios";
import styles from "./ComentarList.module.scss";
import useSWR from "swr";
import Makrdown from "@/components/other/Markdown";
import ComentarRemove from "./ComentarRemove";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data);


export default function ComentarList({
    course
}: { course: any }) {
    const { data, isLoading, error } = useSWR(`/protected/course/comentar/${course.id}`, fetcher);

    if (isLoading) return <></>;

    console.log(data);


    return <>
        
        <div className={styles.root}>
        {
            data.map((comentar: any, index: number) => <div key={index} className={styles.block}>
                <p className={styles.block__author}>{comentar.author.name}</p>
                <Makrdown>{comentar.content}</Makrdown>
                <ComentarRemove course={course} comentarId={comentar.id}/>
            </div>)
        }
    </div>
    </>;
}