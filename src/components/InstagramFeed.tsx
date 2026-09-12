import { useEffect, useState } from "react";
import "./InstagramFeed.css";

type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
};

function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch("/api/instagram");

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();

        setPosts(data.posts);
      } catch (error) {
        console.error("Instagram feed error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="instagram-feed">
      <div className="instagram-feed-header">
        <h2>Følg med på Instagram</h2>
        <a
          href="https://www.instagram.com/kathrineliving/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @kathrineliving
        </a>
      </div>

      <div className="instagram-grid">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-post"
          >
            <img
              src={post.media_url}
              alt={post.caption || "Kathrine Living på Instagram"}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default InstagramFeed;