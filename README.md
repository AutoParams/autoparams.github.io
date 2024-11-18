# AutoParams Documentation Site

This is the repository for the AutoParams Documentation site.
- [AutoParams Repository](https://github.com/AutoParams/AutoParams)
- [AutoParams Documentation Site](https://autoparamssample.github.io)

## Structure
- `docs` : Docs markdown files
- `src/components` : React components used in homepage, docs mdx
- `src/pages` : Homepage files

## Files
- `docs/**/_category_.yml` : Category metadata
- `docusaurus.config.ts` : Configuration file
- `yarn.lock` : Used for deploy

## Environment Setup

### Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Testing Build Locally

```
$ yarn build
$ yarn serve
```

This command generates static content into the `build` directory and test your build locally.

