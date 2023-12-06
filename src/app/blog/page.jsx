import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './page.module.css'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='blog/test' className={styles.container} key='1'>
        <div className={styles.imageContainer}>
          <Image src=""
              alt=""
              width={400}
              height={250}
              className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href='blog/test2' className={styles.container} key='2'>
        <div className={styles.imageContainer}>
          <Image src=""
              alt=""
              width={400}
              height={250}
              className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog