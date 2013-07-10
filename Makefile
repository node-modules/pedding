TESTS = test/*.test.js
TIMEOUT = 1000
MOCHA_OPTS =
REPORTER = spec
COMPONENT = node_modules/component/bin/component

build: components index.js
	@$(COMPONENT) build --dev

components: component.json
	@$(COMPONENT) install --dev

clean:
	@rm -rf build components

test: build
	@NODE_ENV=test node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) --timeout $(TIMEOUT) --bail $(MOCHA_OPTS) $(TESTS)

test-component:
	@node_modules/mocha-phantomjs/bin/mocha-phantomjs test/index.html

test-all: test test-component

.PHONY: test clean
