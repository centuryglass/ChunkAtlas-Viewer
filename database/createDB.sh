#!/bin/bash
# Creates the map database, creates the PGReader user if needed, and grants
# PGReader database read permissions.
DB_DIR=$( dirname "${BASH_SOURCE[0]}")
DB_SQL="$DB_DIR/MapDB-redesign.sql"
USER_INIT="$DB_DIR/createPGReader.sql"
DB_NAME="MapDB"

DB_ADMIN="postgres"

# (Re)create database from sql:
psql -c "DROP DATABASE IF EXISTS \"$DB_NAME\";" -U "$DB_ADMIN"
psql -c "CREATE DATABASE \"$DB_NAME\"" -U "$DB_ADMIN"
psql -f "$DB_SQL" -U "$DB_ADMIN" -d "$DB_NAME"

# Ensure the read-only user exists and has appropriate permissions:
psql -f "$USER_INIT" -U "$DB_ADMIN"
