import { cn } from '@/lib/utils';
import React from 'react'
import {FilterCheckbox, Title} from './index'

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='В наличие' value='1'/>
                <FilterCheckbox text='Под заказ' value='2'/>
            </div>
        </div>
    );
  }
  