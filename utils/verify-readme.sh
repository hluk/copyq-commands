#!/bin/bash
# Verify that all commands/*.ini are included in README.md and
# that the headers are unique and sorted.
set -euo pipefail

exit_code=0

simple_diff() {
    diff --unified=1 "$1" "$2" | grep --invert-match '^--- \|^+++ \|^@' | sed 's/^/  /' || true
}

headers=$(sed -n "s/^## \[\([^]]*\)\](.*\.ini)/\1/p" README.md)
sorted_headers=$(LC_ALL=C sort --human-numeric-sort <<<"$headers" | uniq)
# Verify that headers for commands are sorted
if [[ "$headers" != "$sorted_headers" ]]; then
    echo "❌ FAILED: Command headers in README.md are not sorted; proposed diff:"
    simple_diff <(echo "$headers") <(echo "$sorted_headers")
    exit_code=1
else
    echo "✅ PASSED: Command headers in README.md are sorted"
fi

included=$(sed -n "s/^## \[[^]]*\](\(.*\.ini\))/\1/p" README.md | LC_ALL=C sort -h)
commands=$(ls commands/*.ini | LC_ALL=C sort -h)
# Verify that all command files are included in README.md
if [[ "$included" != "$commands" ]]; then
    echo "❌ FAILED: Not all command files are included in README.md; proposed diff:"
    simple_diff <(echo "$included") <(echo "$commands")
    exit_code=1
else
    echo "✅ PASSED: All command files are included in README.md"
fi

exit $exit_code
