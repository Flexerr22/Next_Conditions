import { useEffect } from "react"
import { Filters } from "./use-filters"
import qs from "qs"
import { useRouter } from "next/navigation"

export const useQueryFilters = (filters: Filters) => {

    const router = useRouter()

    useEffect(() => {
        const params = {
          ...filters.prices,
          sizes: Array.from(filters.sizes),
          inventor: Array.from(filters.inventor),
          attributes: Array.from(filters.selectedAttributes)
        }
        const query = qs.stringify(params, {
          arrayFormat: 'comma'
        })
    
        router.push(`?${query}`, 
          {scroll: false})
      }, [filters, router])
}