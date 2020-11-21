<div align="center">
    <img src="logo-hq.png?raw=true" alt="mta-typescript-sdk" width="256" />
    <h1>
        <p>TypeScript.lua</p>
        <a href="https://github.com/projectlua/mta-typescript-sdk/actions"><img alt="CI status" src="https://github.com/projectlua/mta-typescript-sdk/workflows/CI/badge.svg" /></a>
        <a href="https://discord.gg/G8bT5MJp8f"><img alt="Chat with us!" src="https://img.shields.io/discord/779485978393968661.svg?colorB=7581dc&logo=discord&logoColor=white"></a>
    </h1>
    <a href="#" target="_blank">Documentation</a>
</div>

---

A generic TypeScript to Lua transpiler. Write your code in TypeScript and publish Lua!

Large projects written in Lua can become hard to maintain and make it easy to make mistakes. Writing code in TypeScript instead improves maintainability, readability and robustness, with the added bonus of good [tooling] support (including [ESLint], [Prettier], [Visual Studio Code] and [WebStorm]). This project is useful in any environment where Lua code is accepted, with the powerful option of simply declaring any existing API using TypeScript declaration files.

[tooling]: https://mta-typescript-sdk.github.io/docs/editor-support
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[visual studio code]: https://code.visualstudio.com/
[webstorm]: https://www.jetbrains.com/webstorm/

## Getting Started

To install mta-typescript-sdk add the `mta-typescript-sdk` npm package:

```bash
$ npm install -D mta-typescript-sdk
```

This package includes the `tstl` command line application, which can be used similarly to `tsc`:

```
$ npx tstl
```

For more information, check out [Wiki](#) in our documentation.
