import { Api } from "@/app/sevices/api-client"
import { Attribute } from "@prisma/client"
import { useEffect, useState } from "react"

export const useAttributes = () => {
    const [attributes, setAttributes] = useState<Attribute[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchAttributes() {
            try{
                const attributes = await Api.attributes.getAll()
                console.log(attributes)
                setAttributes(attributes)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchAttributes()
    }, [])

    return {attributes, loading}
}