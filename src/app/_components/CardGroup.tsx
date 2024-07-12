"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from './Loader';

type Props = {
  initialData: any[];
  getMoreData: any;
}

const CardGroup = ({ initialData, getMoreData }: Props) => {

  const [data, setData] = useState(initialData || []);
  // const [total, setTotal] = useState(5);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // console.log("scroll height", document.documentElement.scrollHeight);
  // console.log("scroll top", document.documentElement.scrollTop);

  // // console.log("window inner height", window.innerHeight);

  const getData = async () => {
    try {
      setLoading(true);
      const newData = await getMoreData(page, 10);
      // console.log(" I AM CLIENT COMPONENT ");
      // setTotal(prestate => prestate + newData);
      // setPage(prestate => prestate + 1);
      setData(prestate => [...prestate, ...newData]);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleInfiniteScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage(prestate => prestate + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  }, []);

  useEffect(() => {
    if (page !== 1) {
      getData();
    }
  }, [page]);

  return (
    <div className=' text-3xl px-12 sm:px-24 lg:px-48 py-8 space-y-5'>
      {data.map((item: any) => <Card title={item.title} description={item.description} />)}
      {loading && <Loader />}
      <br />
    </div>
  )
}

export default CardGroup