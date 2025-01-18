"use client";
import React, { useEffect } from "react";
import {
  CheckboxFiltersGroups,
  RangeSlider,
  Title,
} from "./index";
import { Input } from "../ui/input";
import { useAttributes } from "@/hooks/use-attributes";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const {attributes, loading} = useAttributes()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = attributes.map((item) => ({value: String(item.id), text: item.name}))

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }
   
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroups
        name="sizes"
        className="mb-5"
        title="Размеры"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
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
        onClickCheckbox={filters.setInventor}
        selected={filters.inventor}
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
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="40000"
            min={40000}
            max={100000}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider 
        min={0} 
        max={100000} 
        step={500} 
        value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 100000]} 
        onValueChange={updatePrices}
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
        onClickCheckbox={filters.setSelectedAttributes}
        selected={filters.selectedAttributes}
      />
    </div>
  );
};
