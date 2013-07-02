TESTS = test/*.test.js
TIMEOUT = 1000
MOCHA_OPTS =
REPORTER = spec

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	@rm -rf build components

test:
	@NODE_ENV=test node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) --timeout $(TIMEOUT) --bail $(MOCHA_OPTS) $(TESTS)

test-component:
	@mocha-phantomjs test/index.html

.PHONY: build components clean test test-component
