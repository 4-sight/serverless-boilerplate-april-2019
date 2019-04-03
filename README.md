# Serverless Node.js Starter

A Serverless starter that adds ES7 syntax, serverless-offline, environment variables, and unit test support.

It supports:

- **ES7 syntax in your handler functions**
  - Use `import` and `export`
- **Package your functions using Webpack**
- **Run API Gateway locally**
  - Use `npm start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`
- **Add environment variables for your stages**

---

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

```bash
$ serverless install --url https://github.com/4-sight/serverless-boilerplate-april-2019 --name my-project
```

Enter the new directory

```bash
$ cd my-project
```

Install the Node.js packages

```bash
$ npm install
```

### Usage

To run unit tests on your local

```bash
$ npm test
```

To run a function on your local

```bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

```bash
$ npm start
```

Run your tests

```bash
$ npm test
```

We use Mocha to run our tests.

Deploy your project

```bash
$ serverless deploy
```

Deploy a single function

```bash
$ serverless deploy function --function hello
```
