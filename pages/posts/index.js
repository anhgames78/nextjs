import React from 'react';

import Link from '../../src/Link';
import Nav from '../../src/Nav';
import Copyright from '../../src/Copyright';
import Header from '../../components/Header';
import Minipost from '../../components/Minipost';

const api = "https://anhgames78.github.io/public/";
const DATA = api + "data.json";

export default function Posts({ posts }) {
    return (
        <React.Fragment>
          	<Nav />  
          	<Header title = "Trang Danh Sách Tin" />
          	<div className="container">
  				<div className="row mt-3">
  					{posts.map((post) => <Minipost {...post} />)}
  				</div>
  			</div>
            <Copyright />    
        </React.Fragment>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(DATA);
    const posts = await res.json();

    // By returning { props: posts }, the Posts component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}