# Working with the JavaScript Cache API

## Introduction
> The Cache API provides a mechanism for storing network requests and retrieving their corresponding responses during run-time. It can be used in the absence of an internet connection (or presence of a flaky one) and this makes it integral to the creation of [Progressive Web Applications](https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/) (web applications that work optimally offline like native applications).

Because it is impossible to predetermine your userbase at development time, it is important to build your web services so that they can be accessed by a broad spectrum of users who may not have the best hardware or are plagued with slow internet connections.

## Usage

The Cache API is great at caching URL-addressable resources, that is, you should use the Cache API when you work with network resources that are necessary to load your application. These network resources may include file-based content, assets, API responses and web pages.

For the storage of significant amounts of structured data (including files/blobs) you ideally want to use the [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) API. 

This repository contains several code snippets that show us how to use the Cache API in our code.



