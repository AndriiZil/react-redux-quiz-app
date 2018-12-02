import React from 'react'
import classes from './MunuToggle.css'

const MunuToggle = props => {
    const cls = [
        classes.MunuToggle,
        'fa',
    ];

    if (props.isOpen) {
        cls.push('fa-times');
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
};

export default MunuToggle
