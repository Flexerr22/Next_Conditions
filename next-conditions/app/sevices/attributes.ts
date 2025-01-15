import { Attribute } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"


export const getAll = async(): Promise<Attribute[]> => {
    return (await axiosInstance.get<Attribute[]>(ApiRoutes.ATTRIBUTES)).data
}