#!/bin/bash
set -e
find . -type d -name "node_modules" -prune -exec rm -rf '{}' +
echo "node_modules removidos com sucesso. Rode npm install para reinstalar."
