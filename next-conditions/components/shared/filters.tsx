"use client";
import React, { useEffect, useState } from "react";
import {
  CheckboxFiltersGroups,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "./index";
import { Input } from "../ui/input";
import { useFilterAttributes } from "@/hooks/useFilterAttributes";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number
  priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {attributes, loading, onAddId, selectedAttributes} = useFilterAttributes()
  const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]))
  const [inventor, {toggle: toggleInvtentor}] = useSet(new Set<string>([]))
  
  const [prices, setPrice] = useState<PriceProps>(
    {
      priceFrom: 0,
      priceTo: 100000
    })



  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    })
  }

  const items = attributes.map((item) => ({value: String(item.id), text: item.name}))

  useEffect(() => {
    console.log({sizes, inventor, prices, selectedAttributes})
  }, [sizes, inventor, prices, selectedAttributes])

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroups
        name="sizes"
        className="mb-5"
        title="Размеры"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          {text: '7', value: '7'},
          {text: '9', value: '9'},
          {text: '12', value: '12'}
        ]}
      />

      <CheckboxFiltersGroups
        name="inventor"
        className="mb-5"
        title="Инвенторная технология"
        onClickCheckbox={toggleInvtentor}
        selected={inventor}
        items={[
          {text: 'Да', value: '1'},
          {text: 'Нет', value: '2'}
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="40000"
            min={40000}
            max={100000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider 
        min={0} 
        max={100000} 
        step={500} 
        value={[prices.priceFrom, prices.priceTo]} 
        onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
        />
      </div>

      <CheckboxFiltersGroups
        title="Атрибуты"
        name="attributes"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedAttributes}
      />
    </div>
  );
};
