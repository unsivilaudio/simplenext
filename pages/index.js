import React from 'react';
import axios from 'axios';

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
            <div className='Container'>
                <h1>My New App Component</h1>
                <ul>
                    {posts.map(el => {
                        return <li key={el.id}>{el.title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
