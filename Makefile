TESTS = $(shell ls -S `find test -type f -name "*.js" -print`)
TIMEOUT = 1000
MOCHA_OPTS =
REPORTER = tap

test:
	@NODE_ENV=test node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) --timeout $(TIMEOUT) $(MOCHA_OPTS) $(TESTS)

.PHONY: test

