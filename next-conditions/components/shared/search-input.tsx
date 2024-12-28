import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Search } from "lucide-react";
import React from "react";
import { useClickAway } from "react-use";
import Link from "next/link";

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({className}) => {
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })
    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}
            <div 
            ref={ref}
            className={cn('flex rounded-2xl flex-1 justify-between justify-between relative h-11 z-30',className)}>
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                <Input 
                    className="rounded-2xl  border-none w-full bg-gray-100 outline-none pl-11" 
                    placeholder="Поиск рецептов..."
                    onFocus={() => setFocused(true)}
                />
                <div className={cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                    focused && 'visible opacity-100 top-12',
                    )}>
                    <Link href="/product/1" className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
                        <img 
                            className="rounded-sm h-8 w-8"
                            src="https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp" 
                            alt="Кондеционеры"/>
                        <span>Кондиционеры Ballu</span>
                    </Link>
                </div>
            </div>
        </>
    )
}