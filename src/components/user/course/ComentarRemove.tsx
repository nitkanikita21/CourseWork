import Button from "@/components/button/Button";
import { useUser } from "@/components/hooks/user";
import { AxiosClient } from "@/http/axios";
import { useSession } from "next-auth/react";

export default function ComentarRemove({ course, comentarId }: { course: any, comentarId: string }) {
    const {data: session} = useSession();
    const { user } = useUser(session?.user.id);

    function remove() {
        AxiosClient.post(`/protected/course/comentar/${course.id}/${comentarId}/delete`);
    }

    if(user == null)return <></>;

    if (user.admin || course.authorId == user.id) return <Button style="red" onClick={remove}>Видалити цей коментар</Button>;

    return <></>;
}