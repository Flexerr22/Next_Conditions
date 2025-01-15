"use client";
import React from "react";
import {
  CheckboxFiltersGroups,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "./index";
import { Input } from "../ui/input";
import { useFilterAttributes } from "@/hooks/useFilterAttributes";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const {attributes} = useFilterAttributes()

  const items = attributes.map((item) => ({value: String(item.id), text: item.name}))

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="В наличие" value="1" />
        <FilterCheckbox text="Под заказ" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="40000"
            min={40000}
            max={100000}
            defaultValue={40000}
          />
        </div>

        <RangeSlider min={0} max={100000} step={500} value={[0, 100000]} />
      </div>

      <CheckboxFiltersGroups
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </div>
  );
};
