"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Image
        src={session.user?.image ?? "/mememan.webp"}
        width={32}
        height={32}
        alt="user"
      />
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <button onClick={() => signOut()}>Sign Out</button>;
  }
  return;
}
