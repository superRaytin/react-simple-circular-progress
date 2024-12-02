# react-simple-circular-progress

A simple circular progress indicator component for React

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/react-simple-circular-progress
[downloads-image]: http://img.shields.io/npm/dm/react-simple-circular-progress.svg
[npm-image]: http://img.shields.io/npm/v/react-simple-circular-progress.svg

[React Native implementation of react-simple-circular-progress](https://github.com/superRaytin/react-native-simple-circular-progress)

## Screenshots

![](examples/images/screenshot.png)

## Installation

```
yarn add react-simple-circular-progress
```

or

```
npm i react-simple-circular-progress
```

## Examples

```jsx
<CircularProgress
  size={106}
  percent={75}
  progressBarColor={[[0, '#2C40F3'], [100, '#C2E1FF']]}
>
  <div className='circular-indicator-content'>
    <span>Scores</span>
    <span>5846</span>
  </div>
</CircularProgress>
```

![](examples/images/demo1.png)

```jsx
<CircularProgress
  size={106}
  percent={41}
  progressBarColor={[[0, '#1CC490'], [100, '#CEFFBD']]}
  scaleAngles={[0, -45, -90, -135, 180]}
  scaleOpacity={0.15}
  scaleColor='#888'
>
  <div className='circular-indicator-content'>
    <span>41%</span>
  </div>
</CircularProgress>
```

![](examples/images/demo2.png)

```jsx
<CircularProgress
  size={106}
  percent={75}
  progressBarColor={[[0, '#9C3AE9'], [100, '#CCBDFF']]}
  scaleAngles={[0, -45, -90, -135, 180]}
  scaleOpacity={0.15}
>
  <div className='circular-indicator-content'>
    <span>Status</span>
    <span>Good</span>
  </div>
</CircularProgress>
```

![](examples/images/demo3.png)

`circular-progress-content` styles:

```css
.circular-progress-content: {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

## API

| prop      | type  | default value |
| --------- | ------------- | ------------- |
| `size`    | `number` |     |
| `percent` | `number` | 1 |
| `gapAngle` | `number` | 90 |
| `backgroundBarColor` | `string` | '#F5F5F4' |
| `progressBarWidth` | `number` | 15 |
| `progressBarColor` | `string` `[number, string][]` | '#2C40F3' |
| `progressBarOpacity` | `number` | 1 |
| `progressFillColor` | `string` | 'none' |
| `scaleAngles` | `number[]` |  |
| `scaleWidth` | `number` | 2 |
| `scaleColor` | `string` | '#2a2a2a' |
| `scaleOpacity` | `number` | 0.1 |
| `svgExtraProps` | `Record<string, any>` | {} |
