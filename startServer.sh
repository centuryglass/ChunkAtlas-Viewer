#!/bin/bash
PGUSER=postgres \
PGHOST=localhost \
PGPASSWORD= \
PGDATABASE=MapDB \
PGPORT=5432 \
PUBLIC_KEY_PATH="./webTestKeys/webPublic.pub" \
PRIVATE_KEY_PATH="./webTestKeys/webPrivate.key" \
GEN_PUBLIC_KEY_PATH="./webTestKeys/genPublic.pub" \
FULL_LOG="./FullServerLog" \
GENERAL_LOG="./ServerLog" \
IMPORTANT_LOG="./ImportantServerLog" \
node src/server.js
