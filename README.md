# JMeter Node.js Example

## Overview

An example project that utilizes JMeter to simulate client requests for an Express.js server.

## Getting Started (macOS instructions)

**JMeter**

1. Install [JMeter](https://jmeter.apache.org/download_jmeter.cgi)
2. Symlink jmeter to your `/usr/local/bin/` directory

```shell
ln -s ~/Downloads/apache-jmeter-5.4.1/bin/jmeter /usr/local/bin/jmeter
```

**Node.js**

*Run the following from the node-example-api directory*

1. Install dependencies, `npm install`
2. To run a dev build, `npm run dev`
3. To create a production build, `npm run build`
4. To run a production build, `npm start`

## Load Testing

### Running Tests

1. To start a load test, ensure the Express server is running.
2. Run one of the shell scripts in the `scripts` directory. May require a `chmod` to change file permissions to execute the shell scripts.
3. Monitor and observe any of the following:
    * JMeter CSV report files in the `reports` directory
    * Output logs in `logs/jmeter.log`
    * Express server logs in its running terminal

### Example

https://user-images.githubusercontent.com/13091519/129402961-9036b179-b2be-41fc-a940-448e99567ef2.mov

## Useful Links

* [JMeter getting started](https://jmeter.apache.org/usermanual/get-started.html)
* [JMeter Parameterization - The Complete Guide by BlazeMeter](https://www.blazemeter.com/blog/jmeter-parameterization-the-complete-guide)
* [Visual Studio Code Data Preview extension](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview)