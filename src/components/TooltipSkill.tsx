import React, { ReactElement } from 'react'
import Tooltip from '@mui/material/Tooltip';

type Props = {
    title: string,
    skillElement: ReactElement
    placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}

export default function Skill({ title, skillElement, placement }: Props) {
    return (
        <Tooltip title={title} placement={placement ? placement : 'bottom'}>
            <span>{skillElement}</span>
        </Tooltip>
    )
}