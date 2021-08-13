jmeter -n \
-t jmeter-config/test-plans/node-example-api-test-plan.jmx \
-p jmeter-config/parameters/fetch-player-index/fetch-player-index.properties \
-f -l reports/simulate-fetch-player-index.csv \
-j logs/jmeter.log