#!/bin/bash
PGUSER=postgres \
PGHOST=localhost \
PGPASSWORD= \
PGDATABASE=MapDB \
PGPORT=5432 \
node src/server.js
