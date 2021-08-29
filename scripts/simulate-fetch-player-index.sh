jmeter -n \
-t jmeter-config/test-plans/node-example-api-test-plan.jmx \
-q jmeter-config/parameters/fetch-player-index/fetch-player-index.properties \
-q jmeter-config/parameters/shared/report-generator.properties \
-j logs/jmeter.log \
-f -l samples/fetch-player-index.csv \
-e -o reports/fetch-player-index