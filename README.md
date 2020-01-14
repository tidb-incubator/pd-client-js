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
$ yarn build
```

### Run tests

Make sure the necessary unit tests passed.

```sh
$ yarn test
```

## How to use

### Install

Currently we only publish this package to the GitHub Packages, we need to follow its instruction - [Installing a package](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package).

According to the instruction, we need to authenticate to the GitHub Packages with a personal access token.

1. Create a personal access token

   Follow personal ["Settings" -> "Developer settings" -> "Personal access tokens" -> "Generate new token"](https://github.com/settings/tokens/new) path, the "Select scopes" must select "repo" and "read:packages" at least.

1. Edit `~/.npmrc`, add a new line by the following content

   ```
   //npm.pkg.github.com/:_authToken=[YOUR_PERSONAL_ACCESS_TOKEN]
   ```

1. For project owner: Create or edit `.npmrc` **inside your project folder**, in the same directory as the `package.json`, to include the following line specifying GitHub Packages and the account owner

   ```
   registry=https://npm.pkg.github.com/pingcap-incubator
   ```

   If you use yarn, create `.yarnrc` instead of the `.npmrc`, fill with following content:

   ```
   "@pingcap-incubator:registry" "https://npm.pkg.github.com"
   ```

1. For project owner: Install the `@pingcap-incubator/pd-client-js` for your project

   ```sh
   $ npm install @pingcap-incubator/pd-client-js
   ```

   If you use yarn, add the `"@pingcap-incubator/pd-client-js": "^0.1.5"` into the package.json, then run `yarn install --update-checksums`. Related issue about yarn: [Integrity checked failed error](https://github.com/yarnpkg/yarn/issues/7552).

### Use

Create an instance of PDClient and call its methods:

```js
import PDClient from '@pingcap-incubator/pd-client-js'

const client = new PDClient({
  endpoint: 'API_BASE_URL'
})

client.getHeatmap()
```

## License

pd-client-js is under the Apache 2.0 license.
