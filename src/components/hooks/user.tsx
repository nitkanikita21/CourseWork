import useSWR from "swr";
import { get } from "./fetchers";
import { useSession } from "next-auth/react";

export function useUser(id: string) {
    const { data, error, isLoading } = useSWR(`/protected/user/${id}`, get);

    return {
        user: data,
        error, isLoading
    };
}