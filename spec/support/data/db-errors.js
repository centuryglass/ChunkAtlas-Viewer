module.exports = {
    "INVALID_SQL": [
        {
            "name": "error",
            "length": 92,
            "severity": "ERROR",
            "code": "42601",
            "position": "1",
            "file": "scan.l",
            "line": "1146",
            "routine": "scanner_yyerror",
            "query": "this is absolutely not a valid sql query"
        },
        {
            "name": "error",
            "length": 91,
            "severity": "ERROR",
            "code": "42601",
            "position": "14",
            "file": "scan.l",
            "line": "1138",
            "routine": "scanner_yyerror",
            "query": "SELECT * FROM"
        }
    ],
    "MISSING_PRIVILEGE": [
        {
            "name": "error",
            "length": 93,
            "severity": "ERROR",
            "code": "42501",
            "file": "dbcommands.c",
            "line": "310",
            "routine": "createdb",
            "query": "CREATE DATABASE ILLEGAL"
        },
        {
            "name": "error",
            "length": 97,
            "severity": "ERROR",
            "code": "42501",
            "file": "aclchk.c",
            "line": "3487",
            "routine": "aclcheck_error",
            "query": "DELETE FROM map_tiles"
        }
    ],
    "INVALID_TABLE": [
        {
            "name": "error",
            "length": 112,
            "severity": "ERROR",
            "code": "42P01",
            "position": "15",
            "file": "parse_relation.c",
            "line": "1191",
            "routine": "parserOpenTable",
            "query": "SELECT * FROM invalid_table"
        },
        {
            "name": "error",
            "length": 109,
            "severity": "ERROR",
            "code": "42P01",
            "position": "13",
            "file": "parse_relation.c",
            "line": "1191",
            "routine": "parserOpenTable",
            "query": "INSERT INTO fake_table VALUES ('irrelevant', 'data')"
        }
    ],
    "INVALID_COLUMN": [
        {
            "name": "error",
            "length": 113,
            "severity": "ERROR",
            "code": "42703",
            "position": "8",
            "file": "parse_relation.c",
            "line": "3349",
            "routine": "errorMissingColumn",
            "query": "SELECT invalid_column FROM map_tiles"
        },
        {
            "name": "error",
            "length": 132,
            "severity": "ERROR",
            "code": "42703",
            "position": "91",
            "file": "parse_target.c",
            "line": "1029",
            "routine": "checkInsertTargets",
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z, tile_uri, last_update, bad_column) VALUES ('overworld', 'biome', 512, 0, 0, '/0_0.png', 'bad column value')"
        }
    ],
    "INVALID_ID": [
        {
            "name": "error",
            "length": 240,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (INVALID, 1, null, 2020-01-19 17:55:18.14029).",
            "schema": "public",
            "table": "regions",
            "constraint": "region_valid_id",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO regions VALUES ('INVALID', 1)"
        },
        {
            "name": "error",
            "length": 255,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (INVALID, d, /uri.png, 2020-01-19 17:55:18.140721).",
            "schema": "public",
            "table": "map_types",
            "constraint": "map_types_valid_id",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO map_types VALUES ('INVALID', 'd', '/uri.png')"
        },
        {
            "name": "error",
            "length": 305,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (INVALID, displayName, /uri.png, 2020-01-19 17:55:18.140964).",
            "schema": "public",
            "table": "location_categories",
            "constraint": "location_categories_valid_id",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO location_categories VALUES ('INVALID', 'displayName', '/uri.png')"
        }
    ],
    "INVALID_FOREIGN_KEY": [],
    "DUPLICATE_ENTRY": [
        {
            "name": "error",
            "length": 90,
            "severity": "ERROR",
            "code": "42601",
            "position": "31",
            "file": "scan.l",
            "line": "1146",
            "routine": "scanner_yyerror",
            "query": "INSERT INTO tile_sizes VALUES 5, 5, 5"
        },
        {
            "name": "error",
            "length": 90,
            "severity": "ERROR",
            "code": "42601",
            "position": "80",
            "file": "scan.l",
            "line": "1146",
            "routine": "scanner_yyerror",
            "query": "INSERT INTO regions (region_id, display_name) VALUES ('first', 'Display Name') ('second', 'Display Name')"
        },
        {
            "name": "error",
            "length": 90,
            "severity": "ERROR",
            "code": "42601",
            "position": "81",
            "file": "scan.l",
            "line": "1146",
            "routine": "scanner_yyerror",
            "query": "INSERT INTO map_types (type_id, display_name) VALUES ('repeat', 'Display Name') ('repeat', 'Other Name')"
        }
    ],
    "EMPTY_STRING": [
        {
            "name": "error",
            "length": 261,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (empty_region, , null, 2020-01-19 17:55:18.141615).",
            "schema": "public",
            "table": "regions",
            "constraint": "region_nonempty_strings",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO regions (region_id, display_name) VALUES ('empty_region', '')"
        },
        {
            "name": "error",
            "length": 279,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (empty_type, , null, 2020-01-19 17:55:18.141821).",
            "schema": "public",
            "table": "map_types",
            "constraint": "map_types_nonempty_display_name",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO map_types (type_id, display_name) VALUES ('empty_type', '')"
        }
    ],
    "STR_TOO_LONG": [
        {
            "name": "error",
            "length": 98,
            "severity": "ERROR",
            "code": "22001",
            "file": "varchar.c",
            "line": "633",
            "routine": "varchar",
            "query": "INSERT INTO regions (region_id, display_name) VALUES ('id','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')"
        },
        {
            "name": "error",
            "length": 98,
            "severity": "ERROR",
            "code": "22001",
            "file": "varchar.c",
            "line": "633",
            "routine": "varchar",
            "query": "INSERT INTO map_types (type_id, display_name, icon_uri) VALUES ('another_test_type', 'Test again', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')"
        }
    ],
    "OTHER_CONSTRAINT": [
        {
            "name": "error",
            "length": 219,
            "severity": "ERROR",
            "code": "42804",
            "hint": "You will need to rewrite or cast the expression.",
            "position": "55",
            "file": "parse_target.c",
            "line": "584",
            "routine": "transformAssignedExpr",
            "query": "INSERT INTO regions VALUES ('region', 'Region', null, -1)"
        },
        {
            "name": "error",
            "length": 115,
            "severity": "ERROR",
            "code": "42601",
            "position": "62",
            "file": "analyze.c",
            "line": "912",
            "routine": "transformInsertRow",
            "query": "INSERT INTO map_types VALUES ('type', 'Type', 'desc', 'now', 'ffffff')"
        }
    ],
    "UNKNOWN_ERROR": []
};