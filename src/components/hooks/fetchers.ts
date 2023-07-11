import { AxiosClient } from "@/http/axios";

export const get = (url: string) => AxiosClient.get(url).then(res => res.data);
export const post = (url: string, data: any) => AxiosClient.post(url, data).then(res => res.data);