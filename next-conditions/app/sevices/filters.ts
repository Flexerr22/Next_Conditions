import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { Attributes } from "react"


export const getAll = async(): Promise<Attributes[]> => {
    return (await axiosInstance.get<Attributes[]>(ApiRoutes.ATTRIBUTES)).data
}