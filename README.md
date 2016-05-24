# Progress

progress Component for [react](https://facebook.github.io/react/).

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/progress/)

## Install

    npm install rc-nprogress -S

## Usage

```
<Prgress percent={0.5} color="#333"/>
```

## Props

name    | type   | default    | description
------- | ------ | ---------- | ------------
percent | number | null       | Set progress percent, if >=1, hide progress
color   | string | '#29d'     | Set background color and boxShadow color
inc     | number | 0          | Increase percent per second, should be 0 - 1

# License

MIT
