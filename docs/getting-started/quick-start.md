# Quick Start

If you've previously installed gulp globally, run `npm rm --global gulp` before following these instructions. For more information, read this [Sip](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467).

## Check for node, npm, and npx

```bash
$ node --version
```

![Output: v8.11.1](/imgs/docs-node-version-command.webp)

```bash
$ npm --version
```

![Output: 5.6.0](/imgs/docs-npm-version-command.webp)

```bash
$ npx --version
```

![Output: 9.7.1](/imgs/docs-npx-version-command.webp)

If they are not installed, follow the instructions [here](https://nodejs.org/en/).

## Install the gulp command line utility

```bash
$ npm install --global gulp-cli
```

## Create a project directory and navigate into it

```bash
$ npx mkdirp my-project
```

```bash
$ cd my-project
```

## Create a package.json file in your project directory

```bash
$ npm init
```

This will guide you through giving your project a name, version, description, etc.

## Install the gulp package in your devDependencies

```bash
$ npm install --save-dev gulp
```

## Verify your gulp versions

```bash
$ gulp --version
```

Ensure the output matches the screenshot below or you might need to restart the steps in this guide.

![Output: CLI version 2.0.1 & Local version 4.0.0](/imgs/docs-gulp-version-command.webp)

## Create a gulpfile

Using your text editor, create a file named gulpfile.js in your project root with these contents:

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
```

## Test it

Run the gulp command in your project directory:

```bash
$ gulp
```

To run multiple tasks, you can use `gulp <task> <othertask>`.

## Result

The default task will run and do nothing. ![Output: Starting default & Finished default](/imgs/docs-gulp-command.webp)
