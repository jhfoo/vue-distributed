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



