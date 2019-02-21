# vue-distributed
Demonstrates how different Vue teams can work independently while building on the same app.

## Problem Statement
Most webpack tutorials describe how to bundle web apps into smaller 'chunks', lazy-loaded. In a complex ('Agile') organization multiple teams may be involved, building various parts of the app. Coming together for a unified build-and-chunk may not be efficient.

## Solution
The assumption is that the engineering setup consists of the following (or a mix of):
- 1 Core team maintaining shared library build. Framework and Page teams consume this library.
- 1 Framework team designing the overall app UI layout and high-level framework. Loads code from Page teams on-demand.
- 1 or more Page teams owning various parts of the app (eg. Management, Reporting, Preferences).

## Demo Scope
This code uses Vue and Webpack to demonstrate how code can be written by above teams.

## Installation
1. Download code: <code>git clone https://github.com/jhfoo/vue-distributed.git</code>
2. Open ./app-main/dist/index.html on a browser (tested in Chrome)

Expectation: code from various bundles are rendered on the browser.

## TODO
- Simplify/ dumbify index.html 
- Dynamic route registration
- ~~Integration with Vuetify~~
- ~~Hot loading~~

## Notes
- HMR works only on the codes Webpack is actively monitoring and rebuilding. How can HMR work for teams working on page bundles?
- index.html explicitly loads core-bundle.js because webpack-dev-server auto-injects the 'active' bundle (whichever Webpack is monitoring) at the end of the <BODY> tag. Room for more simplification here.

## References
- [A Beginner’s Guide to Webpack 4 and Module Bundling](https://www.sitepoint.com/beginners-guide-webpack-module-bundling/)
- [Webpack 4 Tutorial: from 0 Conf to Production Mode](https://www.valentinog.com/blog/webpack-tutorial/)
- [Vue.js and Webpack 4 From Scratch, Part 1](https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a)
