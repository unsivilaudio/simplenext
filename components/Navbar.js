import Link from 'next/link';

const navbar = props => {
    const styles = {
        background: '#333',
        color: '#eee',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
    };

    return (
        <div style={styles}>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <Link href='/contact'>
                <button>Contact Us.</button>
            </Link>
        </div>
    );
};

export default navbar;
