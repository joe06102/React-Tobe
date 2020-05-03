const Render = (children) => {
    if (!children) return null
    return typeof children === 'function' ? children() : children
}

export default Render