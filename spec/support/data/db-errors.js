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
            "length": 241,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (INVALID, 1, null, 2020-01-28 23:44:06.629315).",
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
            "detail": "Failing row contains (INVALID, d, /uri.png, 2020-01-28 23:44:06.629733).",
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
            "detail": "Failing row contains (INVALID, displayName, /uri.png, 2020-01-28 23:44:06.629949).",
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
            "length": 193,
            "severity": "ERROR",
            "code": "23505",
            "detail": "Key (size)=(5) already exists.",
            "schema": "public",
            "table": "tile_sizes",
            "constraint": "tile_sizes_pk",
            "file": "nbtinsert.c",
            "line": "563",
            "routine": "_bt_check_unique",
            "query": "INSERT INTO tile_sizes VALUES (5), (5), (5)"
        },
        {
            "name": "error",
            "length": 235,
            "severity": "ERROR",
            "code": "23505",
            "detail": "Key (display_name)=(Display Name) already exists.",
            "schema": "public",
            "table": "regions",
            "constraint": "region_display_name_unique",
            "file": "nbtinsert.c",
            "line": "563",
            "routine": "_bt_check_unique",
            "query": "INSERT INTO regions (region_id, display_name) VALUES ('first', 'Display Name'), ('second', 'Display Name')"
        },
        {
            "name": "error",
            "length": 214,
            "severity": "ERROR",
            "code": "23505",
            "detail": "Key (type_id)=(repeat) already exists.",
            "schema": "public",
            "table": "map_types",
            "constraint": "map_types_type_id_pk",
            "file": "nbtinsert.c",
            "line": "563",
            "routine": "_bt_check_unique",
            "query": "INSERT INTO map_types (type_id, display_name) VALUES ('repeat', 'Display Name'), ('repeat', 'Other Name')"
        }
    ],
    "EMPTY_STRING": [
        {
            "name": "error",
            "length": 261,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (empty_region, , null, 2020-01-28 23:44:06.631084).",
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
            "length": 278,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (empty_type, , null, 2020-01-28 23:44:06.63127).",
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
            "length": 213,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (-1).",
            "schema": "public",
            "table": "tile_sizes",
            "constraint": "tile_sizes_positive",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO tile_sizes VALUES (-1)"
        },
        {
            "name": "error",
            "length": 293,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (reg, typ, Test, 2020-01-28 23:44:06.631913, fffffg, null).",
            "schema": "public",
            "table": "key_items",
            "constraint": "key_items_color_or_icon_uri_valid",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO key_items (region_id, type_id, description, color) VALUES ('reg', 'typ', 'Test', 'fffffg')"
        }
    ],
    "UNKNOWN_ERROR": []
};