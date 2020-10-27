import Link from 'next/link';

const contact = props => {
    return (
        <div className='Container'>
            <h1>Contact Page</h1>
            <p>Do not contact us ever!</p>
            <Link href='/'>
                <a>Go Home.</a>
            </Link>
        </div>
    );
};

export default contact;
