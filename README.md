# React-Tobe
To be or not to be, that is the question !

## Declarative condition in jsx

## The Past

```javascript
export default ({ loading }) => {
    return loading ? <span>is loading</span> : <span> done </span>
}
```

## The Feature

With `react-tobe`, things are more react.

```javascript
import { Choose, Tobe, OrNot } from 'react-tobe'
export default ({ loading }) => {
    return (
        <Choose condition={loading}>
            <Tobe>is loading</Tobe>
            <OrNot>done</OrNot>
        </Choose>
    )
}
```

And it's easier to debug on the react devtools for conditional rendering!

## Lazy Rendering

With functional child component, element create can be deferred to specific branch rendering!

```javascript
import { Choose, Tobe, OrNot } from 'react-tobe'
export default ({ loading }) => {
    return (
        <Choose condition={loading}>
            <Tobe>is loading</Tobe>
            <OrNot>
            {
                () => <span> done </span>
            }
            </OrNot>
        </Choose>
    )
}
```

