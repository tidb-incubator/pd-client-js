# pd-client-js

PD Client JS SDK.

## The Rules

**Please ensure that each commit is followed the setting of:**

- `.editorconfig`
- `.prettierrc`

### Test rules

All test files should be placed in `src/__tests__` dir.

## How to develop

Install dependencies and build:

```sh
$ yarn
$ yarn run build
```

### Run tests

Make sure the necessary unit tests passed.

```sh
$ yarn test
```

## How to use

Install pd-client-js in your project:

```sh
$ yarn add @pingcap/pd-client-js
```

Create an instance of PDClient and call its methods:

```js
import PDClient from 'pd-client-js'

const client = new PDClient({
  endpoint: 'API_BASE_URL'
})

client.getHeatmap()
```

## License

PD-Web is under the Apache 2.0 license.
