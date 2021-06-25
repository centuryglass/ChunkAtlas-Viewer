-- Create a read-only user role to use for non-privileged access to the
-- PostgreSQL database.
CREATE ROLE DB_READER WITH LOGIN PASSWORD null
NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION VALID UNTIL 'infinity';
GRANT CONNECT ON DATABASE "TestMapDB" TO DB_READER;
GRANT USAGE ON SCHEMA public TO DB_READER;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO DB_READER;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO DB_READER;
