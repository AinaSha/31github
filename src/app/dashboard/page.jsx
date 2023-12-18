"use client"
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const getData = async() => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{ cache: 'force-cache' })

  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   };
  //   getData();
  // },[]);

  // console.log(data);

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data);

  if (session.status == "loading"){
    return <p>Loading...</p>
  }
  if (session.status == "unauthenticated"){
    router?.push("/dashboard/login")
  }


  if (session.status == "authenticated"){
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? "Loading": data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt={post.title} width={200} height={100} />
              </div>
              <h2 className={StyleSheet.postTitle}>{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    )
  }
 
}

export default Dashboard