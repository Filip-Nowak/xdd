import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./blogList.module.css";

export default function BlogList() {
  const navigate = useNavigate();

  const handleNavigation = (post) => {
    navigate(`/blog/${post.id}`, { state: { ...post } });
  };
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlogPosts(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog Firmowy</h1>
      <div className={styles.postsContainer}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDate}>{post.date}</p>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <button
              className={styles.readMore}
              onClick={() => handleNavigation(post)}
            >
              Czytaj więcej
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
