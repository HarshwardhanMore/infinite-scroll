import Image from "next/image";
import CardGroup from "./_components/CardGroup";
import Card from "./_components/Card";

export default async function Home() {

  const getMoreData = async (page: number, limit: number) => {
    'use server';

    const skip = (page - 1) * limit;
    const response = await fetch(`https://dummyjson.com/products?select=title,description&limit=${limit}&skip=${skip}`);

    // if (!response.ok) {
    //   throw new Error(`Error: Status Code: ${response.status}`);
    // }

    const data = await response.json();

    return data.products;
  }

  const products = await getMoreData(1, 10);

  return (
    <div>
      <CardGroup initialData={products} getMoreData={getMoreData} />
    </div>
  );
}
