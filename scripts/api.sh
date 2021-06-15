#!/usr/bin/env bash

## VARIABLES
INITFILE="api/example-db.json"
DBFILE="api/db.json"
API_PORT="6501"
REQUIRED_TABLES="Users Comments Posts PostType"


# this is supposed to detect if the correct collections are being served but it doesnt
check() {
	curl -sX GET localhost:$API_PORT/db
}

initialize() {
	cp $INITFILE $DBFILE
}

start() {
	echo "Starting json-server on port $API_PORT"
	echo "press CTRL+C to exit"
	json-server --port $API_PORT -w $DBFILE &
	wait
}

## EXEC

false=0
true=1

init=$false
port=$false

while [[ "$#" -gt 0 ]]; do
	case $1 in
		init*)
			init=$true
			;;
		port)
			port=$true
			;;
		*) 
			echo "Unknown argument: $1" 
			exit 1 
			;;
	esac
	shift
done

if (( port )); then
	echo $API_PORT
	exit 0
elif check; then
	if (( init )); then
		initialize
	else
		echo API already running
		exit 1
	fi
else
	(( init )) && initialize
	start 
fi