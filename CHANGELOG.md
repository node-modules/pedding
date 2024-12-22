# Changelog

## [2.0.0](https://github.com/node-modules/pedding/compare/v1.1.0...v2.0.0) (2024-12-22)


### ⚠ BREAKING CHANGES

* drop Node.js < 18.19.0 support

part of https://github.com/eggjs/egg/issues/3644

https://github.com/eggjs/egg/issues/5257

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->
## Summary by CodeRabbit

- **New Features**
- Introduced new workflows for continuous integration, package
publishing, and release management.
- Added TypeScript support with a new configuration file and strict
type-checking.
- New `pending` function implemented for managing callback execution
limits.
  
- **Bug Fixes**
- Corrected function name from `pedding` to `pending` in usage examples.

- **Documentation**
	- Updated `README.md` with new badges and improved usage examples.
	- Added MIT License to the project.

- **Chores**
- Removed outdated files and configurations, including `.jshintignore`,
`.travis.yml`, `AUTHORS`, and `component.json`.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

* support cjs and esm both by tshy ([#6](https://github.com/node-modules/pedding/issues/6)) ([d2352dc](https://github.com/node-modules/pedding/commit/d2352dc51ec678c113047d890336cb5a0e69c197))

1.1.0 / 2016-11-11
==================

  * feat: add call stack to error object (#5)
  * use npm scripts
  * add authors
  * remove 0.8

1.0.0 / 2014-07-05
==================

  * support pedding(done, 100) format
  * add npm image
  * add component deps
  * ensure build before test start
  * add component test on npm test
  * add travis

0.0.3 / 2013-07-02
==================

  * add component support

0.0.2 / 2013-06-22
==================

  * fixed #1 done more then giving should throw error
