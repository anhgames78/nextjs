// pages/posts/[id].js
import React from 'react';

import Link from '../../src/Link';
import Nav from '../../src/Nav';
import Copyright from '../../src/Copyright';

const api = "https://anhgames78.github.io/public/";
const DATA = api + "data.json";

function Post({ post }) {
  // Render post...
   return (
    <React.Fragment>
     <Nav />
     <Header title = "Trang Chi Tiết Tin" />
     <h1 style={{ textAlign: "center" }}>{post.title}</h1>
     <Copyright />
    </React.Fragment>
   );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await fetch(DATA);
  const posts = await response.json();
    // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }));
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(context) {
  const { slug } = context.params;
  const response = await fetch(DATA);
  const posts = await response.json();
  const post = posts.find((post) => post.id.toString() === slug);
  return { props: { post } };
}

export default Post
