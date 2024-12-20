import {Title, Container, TopBar, Filters, ProductGroupList } from "@/components/shared";


export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все кондиционеры" size="lg" className="font-extrabold"/>
    </Container>
    <TopBar />

    <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">

        {/*Фильтрация*/}
        <div className="w-[250px]">
          <Filters />
        </div>

         {/*Список товаров*/}
         <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList 
              title="Electroluxe" 
              categoryId={1}
              items={[
                {
                id: 1,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 2,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 3,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 4,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 5,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
            ]} 
              />
              <ProductGroupList 
              title="Energoluxe" 
              categoryId={2}
              items={[
                {
                id: 1,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 2,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 3,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 4,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 5,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
            ]} 
              />
              <ProductGroupList 
              title="Haier" 
              categoryId={3}
              items={[
                {
                id: 1,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 2,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 3,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 4,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 5,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
            ]} 
              />
              <ProductGroupList 
              title="Ballu" 
              categoryId={4}
              items={[
                {
                id: 1,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 2,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 3,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 4,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 5,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
            ]} 
              />
              <ProductGroupList 
              title="Toshiba" 
              categoryId={5}
              items={[
                {
                id: 1,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 2,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 3,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 4,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
              {
                id: 5,
                name: 'Сплит-система Ballu Olympio BSW-07HN1/OL/15Y комплект',
                price: 27290,
                imageUrl: "https://www.rusklimat.ru/upload/resize_cache/iblock/981/1pe0zy7g11wupbnp8xqd2p71dzt1z1ap/700_700_1/ns_1065377_split_sistema_ballu_bsw_07hn1_ol_15y_komplekt_picture1_ru_new.jpg.webp",
                items: [{price: 27290}],
              },
            ]} 
              />
            </div>
        </div>
      </div>
    </Container>
  </>
}
