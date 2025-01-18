import { useSearchParams } from "next/navigation"
import { useSet } from "react-use"
import { useState } from "react"

interface PriceProps {
    priceFrom?: number
    priceTo?: number
  }
  
interface QueryFilters  extends  PriceProps{
    attributes: string,
    sizes: string,
    inventor: string
  }

export interface Filters {
    sizes: Set<string>
    inventor: Set<string>
    selectedAttributes: Set<string>
    prices: PriceProps
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void
    setInventor: (value: string) => void,
    setSizes: (value: string) => void
    setSelectedAttributes: (value: string) => void

}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    const [selectedAttributes, {toggle: toggleAttributes}] = useSet(
        new Set<string>(searchParams.get('attributes')?.split(','))
    )

    const [sizes, {toggle: toggleSizes}] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
    )

    const [inventor, {toggle: toggleInvtentor}] = useSet(
        new Set<string>(searchParams.has('inventor') ? searchParams.get('inventor')?.split(',') : [])
    )
      
    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    })

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    

    return {
        sizes,
        inventor,
        selectedAttributes,
        prices,
        setPrices: updatePrice,
        setInventor: toggleInvtentor,
        setSizes: toggleSizes,
        setSelectedAttributes: toggleAttributes

    }
}