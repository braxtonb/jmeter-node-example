jmeter -n \
-t jmeter-config/test-plans/node-example-api-test-plan.jmx \
-q jmeter-config/parameters/fetch-player-by-id/fetch-player-by-id.properties \
-q jmeter-config/parameters/shared/report-generator.properties \
-j logs/jmeter.log \
-f -l samples/fetch-player-by-id.csv \
-e -o reports/fetch-player-by-id