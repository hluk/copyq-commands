#!/bin/bash
# Executes tests for commands (*/test_*.js).
set -euo pipefail

export COPYQ_SESSION=command-tests
export COPYQ_SESSION_COLOR=red
export COPYQ_DEFAULT_ICON=1
export COPYQ_SETTINGS_PATH=/tmp/copyq-command-tests-config
export COPYQ_LOG_FILE=/tmp/copyq-command-tests.log
export COPYQ_LOG_LEVEL=${COPYQ_LOG_LEVEL:-DEBUG}
export COPYQ=${COPYQ:-copyq}

# Try to find itemtests plugin required by tests
if [[ -z "${COPYQ_PLUGINS:-}" ]]; then
    plugin=$(dirname "$(which "$COPYQ")")/src/libitemtests.so
    export COPYQ_PLUGINS=$plugin
fi

if [[ ! -f "$COPYQ_PLUGINS" ]]; then
    echo "Set COPYQ_PLUGINS env variable to itemtests plugin path"
    exit 1
fi

copyq_pid=""
failed_count=0

log_file_prefix() {
    echo "${COPYQ_LOG_FILE/.log}"
}

run_copyq() {
    echo "--- Test Command: $COPYQ $*" >> "$COPYQ_LOG_FILE"
    "$COPYQ" "$@" 2>> "$COPYQ_LOG_FILE"
}

stop_server() {
    COPYQ_WAIT_FOR_SERVER_MS=0 run_copyq exit || true
}

start_server() {
    rm -rf "$COPYQ_SETTINGS_PATH"
    mkdir -p "$COPYQ_SETTINGS_PATH"
    "$COPYQ" 2>> "$COPYQ_LOG_FILE" &
    copyq_pid=$!
    run_copyq copy '' > /dev/null
    run_copyq show
    run_copyq plugins.itemtests.keys 'focus:^ClipboardBrowser'
    run_copyq 'for (i=0; i<10 && !isClipboardMonitorRunning(); ++i) {sleep(100);}'
    if ! run_copyq 'isClipboardMonitorRunning || fail' > /dev/null; then
        echo "Failed to start clipboard monitor"
        exit 1
    fi
}

run_script() {
    run_copyq source tests/test_functions.js test.importCommandsForTest "$js"

    if ! run_copyq source tests/test_functions.js test.run "$js"; then
        cat "$COPYQ_LOG_FILE"
        sort "$(log_file_prefix)-"*.log*
        failed_count=$((failed_count + 1))
    fi
}

trap stop_server QUIT TERM INT EXIT

if [[ $# == 0 ]]; then
    # Run more recently modified tests first
    ls -t tests/*/*.js | xargs "$0"
    exit 0
fi

for js in "$@"; do
    rm -f "$(log_file_prefix)"*.log*
    echo "*** Starting: $js"

    start_server
    run_script "$js"
    stop_server

    echo "*** Finished: $js"
done

if [[ $failed_count -gt 0 ]]; then
    echo
    echo "$failed_count test(s) failed"
    exit 1
else
    echo "All OK"
fi
