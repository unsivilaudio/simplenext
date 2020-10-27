import Link from 'next/link';

const about = props => {
    return (
        <div className='Container'>
            <h1>All About That Ace</h1>
            <Link href='/'>
                <a>Go Home.</a>
            </Link>
        </div>
    );
};

export default about;
