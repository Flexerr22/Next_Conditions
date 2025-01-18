import {Title, Container, TopBar, Filters, ProductGroupList } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";


export default async function Home() {

  const manufactures = await prisma.manufacture.findMany({
    include: {
      product: {
        include: {
          attributes: true,
          cartItems: true
        }
      }
    }
  })

  return <>
    <Container className="mt-10">
      <Title text="Все кондиционеры" size="lg" className="font-extrabold"/>
    </Container>
    <TopBar manufactures={manufactures.filter((manufacture) => manufacture.product.length > 0)}/>

    <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">

        {/*Фильтрация*/}
        <div className="w-[250px]">
          <Filters />
        </div>

         {/*Список товаров*/}
         <div className="flex-1">
            <div className="flex flex-col gap-16">
              {manufactures.map((manufacture) => (
                manufacture.product.length > 0 && (
                  <ProductGroupList 
                  key={manufacture.id}
                    title={manufacture.name}
                    categoryId={manufacture.id}
                    items={manufacture.product}
                  />
                )
              ))}
            </div>
        </div>
      </div>
    </Container>
  </>
}
