#!/bin/bash
# Set necessary environment variables before starting the server.
#### Environment variables: ###
# PGHOST:               The network address where the PostgreSQL database is
#                       hosted.
#
# PGDATABASE:           The name of the ChunkAtlas map database.
#
# PGPORT:               The network port used by the database to accept new
#                       connections.
#
# PGREADER:             A database user account name that has permission to
#                       read, but not write, to the database.
#
# PGREADER_PASSWORD:    The PGREADER account's password.
#
# PGWRITER:             A database user account name that has permission to
#                       read and write to the database.
#
# PGWRITER_PASSWORD:    The PGWRITER account's password.
#
# PUBLIC_KEY_PATH:      The path to this server's public RSA encryption key.
#
# PRIVATE_KEY_PATH:     The path to the server's private RSA encryption key.
#
# GEN_PUBLIC_KEY_PATH:  The path to the map generator's public RSA encryption
#                       key.
#
# FULL_LOG:             Stores server log messages with level 'debug' or
#                       higher.
#
# GENERAL_LOG:          Stores server log messages with level 'info' or higher.
#
# IMPORTANT_LOG:        Stores server log messages with level 'warn' or higher.

PGHOST=localhost \
PGDATABASE=MapDB \
PGPORT=5432 \
PGREADER=db_reader \
PGREADER_PASSWORD= \
PGWRITER=postgres \
PGWRITER_PASSWORD= \
PUBLIC_KEY_PATH="./webTestKeys/webPublic.pub" \
PRIVATE_KEY_PATH="./webTestKeys/webPrivate.key" \
GEN_PUBLIC_KEY_PATH="./webTestKeys/genPublic.pub" \
FULL_LOG="./FullServerLog" \
GENERAL_LOG="./ServerLog" \
IMPORTANT_LOG="./ImportantServerLog" \
node inspect src/server.js
