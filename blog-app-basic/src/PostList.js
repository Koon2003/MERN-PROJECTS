import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostLists() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/posts').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        });
    }, []);

    return (
        <div>
            {Object.entries(posts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        {" "}
                        <h3>{title}</h3>{" "}
                    </Link>
                </li>
            ))}
        </div>
    );
}
