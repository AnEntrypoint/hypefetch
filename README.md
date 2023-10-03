# hypefetch

http calls for hypeflow

## Description

hypefetch is a project that provides webhooks for hypeflow. It is used to make HTTP calls and manage the flow of data in your applications.

## Prerequisites

Before you begin, ensure you have the following environment variables set:

- SERVERKEY
- CALLKEY

## Installation

To install hypefetch, follow these steps:

1. Clone the repository
2. Run `npm install` in the project directory

## Usage

To use hypefetch, call the `runCall` function with an input object that includes a url and body. Here is an example:

```javascript
runCall({ url: "http://example.com", body: { key: "value" } });
```

## Contributing

To contribute to hypefetch, please submit a pull request. Before submitting the pull request, ensure that you have tested your changes thoroughly and they are working as expected.
