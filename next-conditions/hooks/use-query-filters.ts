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
        attributes: Array.from(filters.selectedAttributes),
      };
      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });
    
      router.push(`?${query}`, { scroll: false });
    }, [
      Array.from(filters.sizes).join(','),
      Array.from(filters.inventor).join(','),
      Array.from(filters.selectedAttributes).join(','),
      filters.prices.priceFrom,
      filters.prices.priceTo,
      router,
    ]);
    
}