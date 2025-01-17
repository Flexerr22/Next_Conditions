import { Api } from "@/app/sevices/api-client"
import { Attribute } from "@prisma/client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"


interface ReturnProps {
    attributes: Attribute[]
    loading: boolean
    selectedAttributes: Set<string>
    onAddId: (id: string) => void
}
 
export const useFilterAttributes = (values: string[] = []): ReturnProps => {

    const [attributes, setAttributes] = useState<Attribute[]>([])
    const [loading, setLoading] = useState(true)

    const [selectedIds, {toggle}] = useSet(new Set<string>(values))

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

    const setSelectedAttributes = (ids: string[]) => {
        ids.forEach(selectedIds.add)
    }

    return {attributes, loading, onAddId: toggle, selectedAttributes: selectedIds, setSelectedAttributes}
}