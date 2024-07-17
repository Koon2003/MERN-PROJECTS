import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const { slug } = useParams();
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/posts/'+slug).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }

  const { title, description } = postInfo;
  return (
    <div style={{ padding: 10 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
