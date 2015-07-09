"clean": "rm -r -f build",
"postclean": "mkdir build && ncp src/index.html build/index.html -s",
"open": "browser-sync start --config bs-config.js",
"prestyle:watch": "node-sass src/sass/ -o build/css/ --output-style compressed",
"style:watch": "node-sass src/sass/ -o build/css/ --output-style compressed -w",
"scripts:watch": "watchify src/scripts/main.js -d -p [minifyify --no-map] -o build/main.js",
"prestart": "npm run clean",
"start": "parallelshell 'npm run scripts:watch' 'npm run style:watch' 'npm run open'",
"test": "karma start --singleRun"

"browser-sync": "^2.7.1",
"browserify": "^10.2.3",
"hashmark": "^3.0.0",
"karma": "^0.12.35",
"karma-browserify": "^4.2.1",
"karma-chrome-launcher": "^0.1.12",
"karma-cli": "0.0.4",
"karma-mocha": "^0.1.10",
"karma-sinon-chai": "^0.3.0",
"minifyify": "^7.0.0",
"mocha": "^2.2.5",
"ncp": "^2.0.0",
"node-sass": "^3.1.0",
"onchange": "^1.1.0",
"parallelshell": "^1.1.1",
"watchify": "^3.2.1"
