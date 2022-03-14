import React from 'react';
import {Inner} from "../logon/styles/logon";

export default function Logon({children, ...restProps}) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>
    )
}
