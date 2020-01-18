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
            "length": 103,
            "severity": "ERROR",
            "code": "42703",
            "position": "8",
            "file": "parse_relation.c",
            "line": "3349",
            "routine": "errorMissingColumn",
            "query": "SELECT asdf"
        }
    ],
    "MISSING_PRIVILEGE": [],
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
            "detail": "Failing row contains (INVALID, 1, null, 2020-01-18 11:21:54.035362).",
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
            "detail": "Failing row contains (INVALID, d, /uri.png, 2020-01-18 11:21:54.035895).",
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
            "length": 304,
            "severity": "ERROR",
            "code": "23514",
            "detail": "Failing row contains (INVALID, displayName, /uri.png, 2020-01-18 11:21:54.03618).",
            "schema": "public",
            "table": "location_categories",
            "constraint": "location_categories_valid_id",
            "file": "execMain.c",
            "line": "2018",
            "routine": "ExecConstraints",
            "query": "INSERT INTO location_categories VALUES ('INVALID', 'displayName', '/uri.png')"
        }
    ],
    "INVALID_FOREIGN_KEY": [
        {
            "name": "error",
            "length": 247,
            "severity": "ERROR",
            "code": "23505",
            "detail": "Key (region_id, type_id, description)=(missing_region, missing_type, d) already exists.",
            "schema": "public",
            "table": "key_items",
            "constraint": "key_items_pk",
            "file": "nbtinsert.c",
            "line": "563",
            "routine": "_bt_check_unique",
            "query": "INSERT INTO key_items (region_id, type_id, description, color) VALUES ('missing_region', 'missing_type', 'd', 'FFFFFF')"
        },
        {
            "name": "error",
            "length": 266,
            "severity": "ERROR",
            "code": "23505",
            "detail": "Key (region_id, type_id, size, block_x, block_z)=(missing_region, missing_type, 512, 0, 0) already exists.",
            "schema": "public",
            "table": "map_tiles",
            "constraint": "map_tiles_pk",
            "file": "nbtinsert.c",
            "line": "563",
            "routine": "_bt_check_unique",
            "query": "INSERT INTO map_tiles VALUES ('missing_region', 'missing_type', 512, 0, 0, '/uri.png')"
        }
    ],
    "DUPLICATE_ENTRY": [],
    "EMPTY_STRING": [],
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
    "STR_TOO_LONG": [],
    "UNKNOWN_ERROR": []
};