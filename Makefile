
test: node_modules
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec \
		--bail

node_modules: package.json
	@npm install

.PHONY: test