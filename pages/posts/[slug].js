// pages/posts/[id].js
import React from 'react';

import Link from '../../src/Link';
import Nav from '../../src/Nav';
import Copyright from '../../src/Copyright';
import Header from '../../components/Header';
import Minipost from '../../components/Minipost';

const api = "https://anhgames78.github.io/public/";
const DATA = api + "data.json";

function Post({ slug,posts }) {
  const post = posts.find((post) => post.id.toString() === slug);
  const master = post.link.data.master;
  const slave = post.link.data.slave;
  const relations = master.concat(slave);
  // Render post...
   return (
    <React.Fragment>
     <Nav />
     <Header title = "Trang Chi Tiết Tin" />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
    <img src="http://placehold.it/1900x700" alt="" className="img-fluid" />
    <p className="lead">{post.title}</p>
    <hr className="my-2" />
    {post.article}
    <p className="lead">
      <a className="btn btn-primary btn-lg" href={post.link.web} role="button">Learn more</a>
    </p>
        </div>
      </div>
      <div className="container">
        <h4 className="card-title text-center">Tin liên quan</h4>
        <div className="row mt-3">
          {relations.map(function(relation){
            const post = this.find((post) => post.id === relation);
            return <Minipost key={post.id.toString()} {...post} />;},posts)}
        </div>
      </div>
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
  
  return { props: { slug,posts } };
}

export default Post
