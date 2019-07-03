import React from 'react'
import render from './render'

export const Tobe = ({ children }) => {
    return render(children)
}

export const OrNot = ({ children }) => {
    return render(children)
}

export const Choose = ({ condition, children }) => {
    return (
        React.Children
            .toArray(children)
            .filter(c => (c.type !== OrNot) ^ !condition)
            .map(c => render(c))
    )
}