import Button from "@/components/button/Button";
import { useState } from "react";
import styles from "./ComentarCreater.module.scss";
import Makrdown from "@/components/other/Markdown";
import { AxiosClient } from "@/http/axios";
import { useSession } from "next-auth/react";

export default function ComentarCreator({
    courseId
}: { courseId: string }) {
    const { data: session } = useSession();
    const [content, setContent] = useState("# Напиши свій коментар!\n \nДозволено використовувати Markdown");

    function post() {
        AxiosClient.post(`/protected/course/comentar/${courseId}/create`, {
            authorId: session?.user.id,
            content: content
        });
    }

    const errorElem = <p className={styles.error}>Коментар не може бути пустим</p>;

    return <div className={styles.root}>
        {content.length == 0 ? errorElem : <></>}
        <textarea className={styles.md_editor} value={content} onChange={(e) => { setContent(e.target.value); }}></textarea>
        <Button onClick={post}>Залишити коментар</Button>
        <h1 className={styles.preview}>Прев&apos;ю</h1>
        <Makrdown>
            {content}
        </Makrdown>
    </div>;
}