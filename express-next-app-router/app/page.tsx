"use client";
import axios from "axios";

export default function Home() {
  const test = axios("http://localhost:3000/api/book/1");

  return <div>Hello World</div>;
}
