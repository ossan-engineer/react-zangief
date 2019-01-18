# React Zangief

Stateful Zangief componet with React Hooks.

## Demo

[GitHub Pages](https://ossan-engineer.github.io/react-zangief/)

## Install

`yarn add react-zangief`

### Usage

You need to have React `16.8.0-alpha.1` or later installed to use Hooks API.

#### Static

```javascript
import useZangief from 'react-zangief';

const App = () => {
  const { Zangief } = useZangief();
  
  return (
    <Zangief />
  )
};
```

#### Stateful

```javascript
import useZangief from 'react-zangief';

const App = () => {
  const {
    action,
    setAction,
    size,
    setSize,
    Zangief,
  } = useZangief();
  
  return (
    <div>
      <select name="" id="" onChange={(e) => setAction(e.target.value)}>
        <option value="default">Default</option>
        <option value="stand">Stand</option>
        <option value="walk">Walk</option>
        <option value="jump">Jump</option>
        <option value="lightAttack">Light Attack</option>
        <option value="damaged">Damaged</option>
      </select>
      <input
        type="range"
        onChange={e => setSize(e.target.value)}
        value={size}
        min={16}
        max={2000}
      />
      <span>{size}</span>
      <div>
        <Zangief />
      </div>
    </div>
  )
};
```


