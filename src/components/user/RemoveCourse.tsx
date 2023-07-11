"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../hooks/user";
import Button from "../button/Button";
import { AxiosClient } from "@/http/axios";

export default function RemoveCourse({
    courseId, afterDelete
}: {
    courseId: string, afterDelete?: () => void | null
}) {
    const { data: session } = useSession();
    const { user, isLoading, error } = useUser(session?.user.id);

    function remove() {
        AxiosClient.post(`/protected/course/delete/${courseId}`);
        if (afterDelete != null) afterDelete();
    }

    if (isLoading) {
        return <>...</>;
    }
    if (error) {
        return <></>;
    }
    return <Button style="red" onClick={remove}>Видалити цей курс</Button>;
}