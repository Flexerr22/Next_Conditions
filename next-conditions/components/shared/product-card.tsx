
import { Plus } from 'lucide-react';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui';
import Link from 'next/link';

interface Props {
    id: number;
    className?: string;
    name: string;
    price: string;
    imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({className, id, name, price, imageUrl}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center  bg-secondary rounded-lg h-[260px]'>
                    <img className='w-full h-[260px]' src={imageUrl} alt={name} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>

                <p className='text-sm text-gray-400'>
                    Инветорные, неинвенторные
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant="secondary" className='text-base font-bold'>
                        <Plus size={20} className='mr-1'/>
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
  }
  