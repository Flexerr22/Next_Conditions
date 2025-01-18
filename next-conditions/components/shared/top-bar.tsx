import { cn } from '@/lib/utils';
import React from 'react'
import {Container, Categories, SortPopup} from './index'
import { Manufacture } from '@prisma/client';

interface Props {
    manufactures: Manufacture[]
    className?: string;
}

export const TopBar: React.FC<Props> = ({manufactures, className}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between">
                <Categories items={manufactures}/>
                <SortPopup />
            </Container>
        </div>
    );
  }
  