# LoadingClick

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/loading-click)

> LoadingClick is a directive by vue. Let button can show loading icon(or some dom).

## Quick start

1. install package

``` shell
npm i loading-click
```

2. initialize LoadingClick

``` javascript
import LoadingClick from 'loading-click'

Vue.use(LoadingClick, /** options **/)
```

## Usage

``` html
<template>
  <button v-loading-click="test"></button>
</template>

<script>
export default {
  methods: {
    clickTest() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 5000)
      })
    }
  }
}
</script>
```

## API

#### [Options]
`template` set template.
> The template will show after click dom.
 

## License
MIT