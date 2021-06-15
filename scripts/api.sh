#!/usr/bin/env bash

## NOT USING THIS :/

## DEPENDENCIES
# https://stackoverflow.com/questions/33297857/how-to-check-dependency-in-bash-script
if command -v jq >/dev/null 2>&1 ; then
	# jq found
	:
else
	echo "please install jq"
	exit 255
fi

## VARIABLES
INITFILE="api/example-db.json"
DBFILE="api/db.json"
# for react-scripts/start.js
export PORT="6500"
API_PORT="6501"
REQUIRED_TABLES="Users Comments Posts PostType"

## FUNCTIONS
confirm() {
	#$2 is an optional description
	if [[ -n $2 ]]; then
		echo "About to $2"
	else
		echo "About to do: $1"
	fi

	read -p "Are you sure? y or [n] => " -n 1 -r
	echo
	# REPLY is the default variable for read
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		eval "$1"
	fi
}

# this is supposed to detect if the correct collections are being served but it doesnt
check() {
	local response_tables="$(curl -sX GET localhost:$API_PORT/db | jq 'keys')"
	for table in $REQUIRED_TABLES; do
	# https://linuxize.com/post/how-to-check-if-string-contains-substring-in-bash/
		if [[ "$table" == *"$response_tables"* ]]; then
			:
		else
			return 0
		fi
	done
	return 1
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

while [[ "$#" -gt 0 ]]; do
	case $1 in
		init*)
			init=$true
			;;
		*) 
			echo "Unknown argument: $1" 
			exit 1 
			;;
	esac
	shift
done

if check; then
	if (( init )); then
		initialize
	else
		echo API already running
		confirm start "start your React App"
		exit 1
	fi
else
	(( init )) && initialize
	start 
fi