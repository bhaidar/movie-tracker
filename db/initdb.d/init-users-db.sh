#!/usr/bin/env bash
 
set -e
 
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER movietracker;
	CREATE DATABASE movietracker ENCODING UTF8;
	GRANT ALL PRIVILEGES ON DATABASE movietracker TO movietracker;
 
	ALTER USER movietracker WITH PASSWORD 'password123';
	ALTER USER movietracker WITH SUPERUSER;
EOSQL
