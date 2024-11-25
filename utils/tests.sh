#!/bin/bash
# Executes tests for commands (*/test_*.js).
set -euo pipefail

export COPYQ_SESSION=command-tests
export COPYQ_SESSION_COLOR=red
export COPYQ_SETTINGS_PATH=/tmp/copyq-command-tests-config
export COPYQ_LOG_FILE=/tmp/copyq-command-tests.log
export COPYQ_LOG_LEVEL=${COPYQ_LOG_LEVEL:-WARNING}
export COPYQ=${COPYQ:-copyq}

copyq_pid=""
failed_count=0

run_copyq() {
    echo "--- Test Command: $COPYQ $*" >> "$COPYQ_LOG_FILE"
    "$COPYQ" "$@" 2>> "$COPYQ_LOG_FILE"
}

stop_server() {
    if [[ -n "$copyq_pid" ]]; then
        if kill "$copyq_pid" 2> /dev/null; then
            wait "$copyq_pid"
        fi
        copyq_pid=""
    fi
    rm -rf "$COPYQ_SETTINGS_PATH"
}

start_server() {
    mkdir -p "$COPYQ_SETTINGS_PATH"
    "$COPYQ" 2>> "$COPYQ_LOG_FILE" &
    copyq_pid=$!
    run_copyq copy '' > /dev/null
    show_if_needed
}

run_script() {
    run_copyq source tests/test_functions.js test.importCommandsForTest "$js"

    restart_if_needed

    if ! run_copyq source tests/test_functions.js test.run "$js"; then
        cat "$COPYQ_LOG_FILE"
        echo "Failed! See whole log: $COPYQ_LOG_FILE"
        echo
        failed_count=$((failed_count + 1))
    fi
}

show_if_needed() {
    if ! grep -q '^// tests:.*noshow' "$js"; then
        run_copyq show
    fi
}

restart_if_needed() {
    if grep -q '^// tests:.*restart' "$js"; then
        run_copyq exit
        start_server
    fi
}

trap stop_server QUIT TERM INT HUP EXIT

if [[ $# == 0 ]]; then
    exec "$0" tests/*/*.js
fi

for js in "$@"; do
    echo "Test: $js"

    rm -f "$COPYQ_LOG_FILE"
    echo "*** Starting: $js" >> "$COPYQ_LOG_FILE"

    stop_server
    start_server

    run_script "$js"

    echo "*** Finished: $js" >> "$COPYQ_LOG_FILE"
done

if [[ $failed_count -gt 0 ]]; then
    echo
    echo "$failed_count test(s) failed"
    exit 1
else
    echo "All OK"
fi
