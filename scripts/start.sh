#!/usr/bin/env bash

error_noapi() {
	echo API not running...
	exit 1
}

export PORT="6500"
API_PORT="$(scripts/api.sh port)"

# check that the API is running
curl -XGET localhost:$API_PORT/db || error_noapi

react-scripts start
