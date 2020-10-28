import React from 'react';

import classes from '../../styles/button.module.scss';

const Button = props => {
    const styles = [classes.Button];

    if (props.variant === 'Primary') styles.push(classes.Primary);
    if (props.variant === 'Secondary') styles.push(classes.Secondary);
    if (props.variant === 'Success') styles.push(classes.Success);
    if (props.variant === 'Danger') styles.push(classes.Danger);
    if (props.disabled) styles.push(classes.disabled);

    return (
        <button
            onClick={props.clicked}
            className={styles.join(' ')}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;
