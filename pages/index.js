import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import classes from '../styles/index.module.scss';

class App extends React.Component {
    static async getInitialProps() {
        const { data } = await axios.get(
            'http://jsonplaceholder.typicode.com/posts'
        );
        return { posts: data };
    }

    render() {
        const { posts } = this.props;

        return (
            <div className={classes.Index}>
                <header className={classes.Header}>List of Random Posts</header>
                <ul className={classes.List}>
                    {posts.map(el => {
                        return (
                            <Link href={`/post?id=${el.id}`} key={el.id}>
                                <li>{el.title}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
