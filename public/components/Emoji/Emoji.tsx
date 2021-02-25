import React from 'react'

const Emoji = props => (
    <span
        className={props.classes ? props.classes : ''}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default Emoji;