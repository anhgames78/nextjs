// pages/posts/[id].js

import Link from '../../src/Link';
import Copyright from '../../src/Copyright';

const api = "https://anhgames78.github.io/public/";
const DATA = api + "data.json";

function Post({ post }) {
  // Render post...
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await fetch(DATA);
  const posts = await res.json();
  const ids = Object.keys(posts); // get obj key from posts as ["0","1","2",...]
  // Get the paths we want to pre-render based on posts
  const paths = ids.map((key) => ({
    params: { id: key },
  }));
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(DATA);
  const posts = await response.json();
  const post = posts[name];
  return { props: { post } };
}

export default Post
