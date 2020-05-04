import React from 'react'
import render from './render'

export function Tobe({ children }) {
    return render(children)
}

Tobe.$name = 'Tobe'

export function OrNot({ children }) {
    return render(children)
}

OrNot.$name = 'OrNot'

export function Choose({ condition, children }) {
    return (
        React.Children
            .toArray(children)
            //@ts-ignore
            .filter(c => (c.type !== OrNot) ^ !condition)
            .map(c => render(c))
    )
}

Choose.$name = 'Choose'