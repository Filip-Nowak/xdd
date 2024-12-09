import React, { useEffect, useState } from "react";
import styles from "./blogList.module.css";
import { useParams } from "react-router";

export default function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    date: "",
    content: "",
  });
  useEffect(() => {
    fetch("http://localhost:8080/post/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);
  const { title, date, content } = post;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.date}>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
