Divergenti Core: Development Guidelines
===============

So if anyone want to try doing some development on Divergenti Core, this is the absolute easiest way to get started:

1. Download, install and run Divergenti Core. By running the official release of Divergenti Core, you also get the Divergenti FullNode daemon running locally. This will host the APIs that are used by Divergenti Core.

2. Clone the Divergenti Core source code, navigate to the root, run "npm install" and then "npm start". This will launch a web server with the angular app.

3. Hit F5 in Visual Studio Code to debug, select the "Electron: All" to debug both renderer and main processes.

This should be fairly simple to do, and it requires no knowledge of .NET Core or C# to get started.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Icons

Find icons to use here: [Material Icons](https://material.io/tools/icons/?style=outline)

## Package

To test the package locally before submitting pull request, you can run:

```
npm run build:linux
npm run build:mac
npm run build:win:x64
```

## FullNode daemon

To update with the latest Divergenti FullNode daemon, you must edit the build.yml and edit the parameter named "daemon". Make sure you set it
to a public released and tested version of the Divergenti FullNode daemon.

## Continuous integration (CI)

Continuous integration is handled using Visual Studio Team Services and YAML. CI build scripts are localted in the .vsts-ci.yml file and
the build.yml. These files are used for multi-platform builds, that runs on different OS agents on VSTS.

## Security

Security is always a very important concern, and Divergenti Core has more built-in features that most normal wallets. More features, 
means more exposure to potential security issues.

It is important that all contributors are well aware of security principles, and especially regarding Electron, 
more details here: [Electron Security](https://electronjs.org/docs/tutorial/security)

## VS Code Debugging

There are existing launch and tasks that handles debugging of the main.ts and launch that completes all Angular compilation from Visual Studio Code.

There are issues with CTRL-C signaling on Windows, so it is advised to avoid using "npm start" to launch the app.

## Requirements

Part of the post debug tasks, is a call to shut down the background daemon. This relies on curl, so make sure you have it installed and registered in 
the path environment variable so it can be called from VS Code tasks.

https://curl.haxx.se/download.html
