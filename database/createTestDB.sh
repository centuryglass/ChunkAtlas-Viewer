#!/bin/bash
# Creates the test database, creates the PGReader user if needed, and grants
# PGReader test database read permissions.
DB_DIR=$( dirname "${BASH_SOURCE[0]}")
DB_SQL="$DB_DIR/MapDB-redesign.sql"
USER_INIT="$DB_DIR/createPGReader.sql"
DB_NAME="MapDB"

TEST_DB_SQL="$DB_DIR/TestMapDB.sql"
TEST_USER_INIT="$DB_DIR/testCreatePGReader.sql"
TEST_DB_NAME="TestMapDB"

DB_ADMIN="postgres"

# Copy and modify database init files to create a matching test database:
cp "$DB_SQL" "$TEST_DB_SQL"
cp "$USER_INIT" "$TEST_USER_INIT"
SET_TEST_NAME="s/\"$DB_NAME\"/\"$TEST_DB_NAME\"/g"
sed -i "$SET_TEST_NAME" "$TEST_DB_SQL"
sed -i "$SET_TEST_NAME" "$TEST_USER_INIT"


# (Re)create database from sql:
psql -c "DROP DATABASE IF EXISTS \"$TEST_DB_NAME\";" -U "$DB_ADMIN"
psql -c "CREATE DATABASE \"$TEST_DB_NAME\"" -U "$DB_ADMIN"
psql -f "$TEST_DB_SQL" -U "$DB_ADMIN" -d "$TEST_DB_NAME"

# Ensure the read-only user exists and has appropriate permissions:
psql -f "$TEST_USER_INIT" -U "$DB_ADMIN"

# Remove copied test database sql files:
rm "$TEST_DB_SQL"
rm "$TEST_USER_INIT"
