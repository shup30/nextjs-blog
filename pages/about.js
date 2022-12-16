import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/about")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;

  return (
    <div>
      <h1>My name is: {data.name}</h1>
    </div>
  );
}
