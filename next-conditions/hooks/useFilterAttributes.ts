import { Api } from "@/app/sevices/api-client"
import { Attribute } from "@prisma/client"
import { useEffect, useState } from "react"


interface ReturnProps {
    attributes: Attribute[]
}
 
export const useFilterAttributes = (): ReturnProps => {

    const [attributes, setAttributes] = useState<Attribute[]>([])

    useEffect(() => {
        async function fetchAttributes() {
            try{
                const attributes = await Api.attributes.getAll()
                setAttributes(attributes)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchAttributes()
    }, [])

    return {attributes}
}