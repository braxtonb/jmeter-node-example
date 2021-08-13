jmeter -n \
-t jmeter-config/test-plans/node-example-api-test-plan.jmx \
-p jmeter-config/parameters/fetch-player-by-id/fetch-player-by-id.properties \
-f -l reports/simulate-fetch-player-by-id.csv \
-j logs/jmeter.log