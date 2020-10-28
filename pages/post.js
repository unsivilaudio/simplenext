import axios from 'axios';

import classes from '../styles/post.module.scss';

const post = props => {
    return (
        <div className={classes.Post}>
            <header className={classes.Header}>
                Comments For Post # {props.id}
            </header>
            <div className={classes.Content}>
                {props.comments.map(el => {
                    return <Comment key={el.id} {...el} />;
                })}
            </div>
        </div>
    );
};

const Comment = ({ email, body }) => (
    <blockquote className={classes.Comment}>
        <p className={classes.Text}>{body}</p>
        <footer className={classes.Cite}>{email}</footer>
    </blockquote>
);

post.getInitialProps = async ({ query }) => {
    const { data } = await axios.get(
        `http://jsonplaceholder.typicode.com/comments?postId=${query.id}`
    );
    return { ...query, comments: data };
};

export default post;
