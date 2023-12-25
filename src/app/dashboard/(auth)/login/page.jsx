"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status == "loading"){
    return <p>Loading</p>
  }
  if (session.status == "authenticated"){
    router?.replace("/dashboard")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>

      <button className={styles.button2} onClick={() => signIn("google")}>Login with Google</button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/registr">Register</Link>
    </div>
  );
};

export default Login;