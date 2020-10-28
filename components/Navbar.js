import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import Button from '../components/ui/Button';
import classes from '../styles/navbar.module.scss';

const navbar = props => {
    const router = useRouter();

    const handleNavigate = path => {
        router.push(path);
    };

    return (
        <div className={classes.Navbar}>
            <div className={classes.Brand}>
                <Link href='/'>
                    <a>SimpleNext</a>
                </Link>
            </div>
            <div className={classes.Links}>
                <Button
                    variant='Primary'
                    clicked={() => handleNavigate('/about')}>
                    About
                </Button>
                <Button
                    variant='Primary'
                    clicked={() => handleNavigate('/contact')}>
                    Contact Us
                </Button>
            </div>
        </div>
    );
};

export default navbar;
