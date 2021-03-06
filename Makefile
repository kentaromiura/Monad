
all: test build-src build

build-src:
	@./node_modules/wrapup/bin/wrup.js -r Monad ./Source/Monad.js > Output/Monad-src.js
	@echo "Browser version written to 'Output/Monad-src.js'"

build:
	@./node_modules/wrapup/bin/wrup.js -c -r Monad ./Source/Monad.js > Output/Monad.js
	@echo "Browser version written to 'Monad.js'"

test:
	@./node_modules/mocha/bin/mocha Tests/Monad.js