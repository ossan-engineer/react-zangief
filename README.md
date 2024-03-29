# React Zangief

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/react-zangief.svg)](https://www.npmjs.com/package/react-zangief)
[![npm downloads](https://img.shields.io/npm/dm/react-zangief)](https://www.npmjs.com/package/react-zangief)

Animated Zangief component for React.

## Storybook

https://ossan-engineer.github.io/react-zangief

## Installation

`yarn add react-zangief`

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import Zangief from 'react-zangief';

const App = () => {
  return <Zangief action="stand" size={16} flip />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Props

| Name   | Type                                                              | Default   | Description             |
| ------ | ----------------------------------------------------------------- | --------- | ----------------------- |
| action | 'default' \| 'stand' \| 'walk' \| 'jump' \| 'attack' \| 'damaged' | 'default' | Animation type.         |
| size   | number                                                            | 32        | The size of Zangief.    |
| flip   | boolean                                                           | false     | Flip Zangief direction. |
