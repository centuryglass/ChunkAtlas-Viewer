module.exports = {
    "selectQuery": [
        {
            "query": "SELECT * FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT * FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT * FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT * FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items"
        },
        {
            "query": "SELECT (region_id) FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, description, type_id) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, description, last_update, color) FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT * FROM location_categories",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT * FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "location_categories"
        },
        {
            "query": "SELECT (category_id) FROM location_categories",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (category_id) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "location_categories",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (category_id, icon_uri, display_name) FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT * FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT * FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations"
        },
        {
            "query": "SELECT (region_id) FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, block_x, category_id) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, category_id, block_x, block_z, display_name) FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT * FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT * FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT * FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT * FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "SELECT (region_id) FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, size, type_id) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT (region_id, type_id, size, block_x, block_z) FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ]
        },
        {
            "query": "SELECT * FROM map_types",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT * FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_types"
        },
        {
            "query": "SELECT (type_id) FROM map_types",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (type_id) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_types",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (type_id, icon_uri, display_name) FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT * FROM regions",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT * FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "regions"
        },
        {
            "query": "SELECT (region_id) FROM regions",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (region_id) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "regions",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT (region_id, icon_uri, display_name) FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ]
        },
        {
            "query": "SELECT * FROM tile_sizes",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes"
        },
        {
            "query": "SELECT * FROM tile_sizes WHERE (size = 'str')",
            "condition": "size = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes"
        },
        {
            "query": "SELECT * FROM tile_sizes WHERE (size = $1)",
            "condition": "size = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "tile_sizes"
        },
        {
            "query": "SELECT (size) FROM tile_sizes",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (size) FROM tile_sizes WHERE (size = 'str')",
            "condition": "size = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes",
            "columns": [ 1 ]
        },
        {
            "query": "SELECT (size) FROM tile_sizes WHERE (size = $1)",
            "condition": "size = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "tile_sizes",
            "columns": [ 1 ]
        }
    ],
    "updateQuery": [
        {
            "query": "UPDATE key_items_staging SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $1, description = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $1, description = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $2, description = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $1, description = $2 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $2, description = $3 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $3, description = $4 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $1, description = $2 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $2, description = $3 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $3, description = $4 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $4, description = $5 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $1, description = $2 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $2, description = $3 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $3, description = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $4, description = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $5, description = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET type_id = $6, description = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, true, "str" ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4, type_id = $5, description = $6 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4, type_id = $5, description = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $5, type_id = $6, description = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $6, type_id = $7, description = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", 5, true ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4, type_id = $5, description = $6, last_update = $7, color = $8 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $4, type_id = $5, description = $6, last_update = $7, color = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $5, type_id = $6, description = $7, last_update = $8, color = $9 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items_staging SET region_id = $6, type_id = $7, description = $8, last_update = $9, color = $10 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $1, description = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $1, description = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $2, description = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $1, description = $2 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $2, description = $3 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $3, description = $4 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $1, description = $2 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $2, description = $3 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $3, description = $4 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $4, description = $5 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $1, description = $2 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $2, description = $3 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $3, description = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $4, description = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $5, description = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET type_id = $6, description = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, true, "str" ],
            "tableEnum": "key_items",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4, type_id = $5, description = $6 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4, type_id = $5, description = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $5, type_id = $6, description = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $6, type_id = $7, description = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", 5, true ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4, type_id = $5, description = $6, last_update = $7, color = $8 WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $1, type_id = $2, description = $3, last_update = $4, color = $5 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $2, type_id = $3, description = $4, last_update = $5, color = $6 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $3, type_id = $4, description = $5, last_update = $6, color = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $4, type_id = $5, description = $6, last_update = $7, color = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $5, type_id = $6, description = $7, last_update = $8, color = $9 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE key_items SET region_id = $6, type_id = $7, description = $8, last_update = $9, color = $10 WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", true, 5, 0, null ],
            "tableEnum": "key_items",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1 WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2 WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $3 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1 WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2 WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $3 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $4 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $1, icon_uri = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $1, icon_uri = $2 WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $2, icon_uri = $3 WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $1, icon_uri = $2 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $2, icon_uri = $3 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $1, icon_uri = $2 WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $2, icon_uri = $3 WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $3, icon_uri = $4 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET display_name = $4, icon_uri = $5 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "location_categories",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1, display_name = $2, icon_uri = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1, display_name = $2, icon_uri = $3 WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2, display_name = $3, icon_uri = $4 WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1, display_name = $2, icon_uri = $3 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2, display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $3, display_name = $4, icon_uri = $5 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $1, display_name = $2, icon_uri = $3 WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $2, display_name = $3, icon_uri = $4 WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $3, display_name = $4, icon_uri = $5 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE location_categories SET category_id = $4, display_name = $5, icon_uri = $6 WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "location_categories",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1 WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2 WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3 WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1 WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2 WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1 WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2 WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $5 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $6 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $1, block_x = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $1, block_x = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $2, block_x = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $1, block_x = $2 WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $2, block_x = $3 WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $3, block_x = $4 WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $1, block_x = $2 WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $2, block_x = $3 WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $3, block_x = $4 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $4, block_x = $5 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $1, block_x = $2 WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $2, block_x = $3 WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $3, block_x = $4 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $4, block_x = $5 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $5, block_x = $6 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET category_id = $6, block_x = $7 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, true, "str" ],
            "tableEnum": "locations",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3 WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4 WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5 WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3 WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4 WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4, category_id = $5, block_x = $6 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3 WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4 WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4, category_id = $5, block_x = $6 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $5, category_id = $6, block_x = $7 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $6, category_id = $7, block_x = $8 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", 5, true ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3, block_z = $4, display_name = $5",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3, block_z = $4, display_name = $5 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4, block_z = $5, display_name = $6 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3, block_z = $4, display_name = $5 WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4, block_z = $5, display_name = $6 WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5, block_z = $6, display_name = $7 WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3, block_z = $4, display_name = $5 WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4, block_z = $5, display_name = $6 WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5, block_z = $6, display_name = $7 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4, category_id = $5, block_x = $6, block_z = $7, display_name = $8 WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $1, category_id = $2, block_x = $3, block_z = $4, display_name = $5 WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $2, category_id = $3, block_x = $4, block_z = $5, display_name = $6 WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $3, category_id = $4, block_x = $5, block_z = $6, display_name = $7 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $4, category_id = $5, block_x = $6, block_z = $7, display_name = $8 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $5, category_id = $6, block_x = $7, block_z = $8, display_name = $9 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE locations SET region_id = $6, category_id = $7, block_x = $8, block_z = $9, display_name = $10 WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", true, 5, 0, null ],
            "tableEnum": "locations",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $1, size = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $1, size = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $2, size = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $1, size = $2 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $2, size = $3 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $3, size = $4 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $1, size = $2 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $2, size = $3 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $3, size = $4 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $4, size = $5 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $1, size = $2 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $2, size = $3 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $3, size = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $4, size = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $5, size = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET type_id = $6, size = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, true, "str" ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4, type_id = $5, size = $6 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4, type_id = $5, size = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $5, type_id = $6, size = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $6, type_id = $7, size = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", 5, true ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4, type_id = $5, size = $6, block_x = $7, block_z = $8 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $4, type_id = $5, size = $6, block_x = $7, block_z = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $5, type_id = $6, size = $7, block_x = $8, block_z = $9 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles_staging SET region_id = $6, type_id = $7, size = $8, block_x = $9, block_z = $10 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $1, size = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $1, size = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $2, size = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $1, size = $2 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $2, size = $3 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $3, size = $4 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $1, size = $2 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $2, size = $3 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $3, size = $4 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $4, size = $5 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $1, size = $2 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $2, size = $3 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $3, size = $4 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $4, size = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $5, size = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET type_id = $6, size = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, true, "str" ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4, type_id = $5, size = $6 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4, type_id = $5, size = $6 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $5, type_id = $6, size = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $6, type_id = $7, size = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", 5, true ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4, type_id = $5, size = $6, block_x = $7, block_z = $8 WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $1, type_id = $2, size = $3, block_x = $4, block_z = $5 WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $2, type_id = $3, size = $4, block_x = $5, block_z = $6 WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $3, type_id = $4, size = $5, block_x = $6, block_z = $7 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $4, type_id = $5, size = $6, block_x = $7, block_z = $8 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $5, type_id = $6, size = $7, block_x = $8, block_z = $9 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_tiles SET region_id = $6, type_id = $7, size = $8, block_x = $9, block_z = $10 WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null, "str", true, 5, 0, null ],
            "tableEnum": "map_tiles",
            "columnValues": {
                "1": "str",
                "2": true,
                "3": 5,
                "4": 0,
                "5": null
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1 WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2 WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $3 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1 WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2 WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $3 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $4 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $1, icon_uri = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $1, icon_uri = $2 WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $2, icon_uri = $3 WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $1, icon_uri = $2 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $2, icon_uri = $3 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $1, icon_uri = $2 WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $2, icon_uri = $3 WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $3, icon_uri = $4 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET display_name = $4, icon_uri = $5 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "map_types",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1, display_name = $2, icon_uri = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1, display_name = $2, icon_uri = $3 WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2, display_name = $3, icon_uri = $4 WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1, display_name = $2, icon_uri = $3 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2, display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $3, display_name = $4, icon_uri = $5 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $1, display_name = $2, icon_uri = $3 WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $2, display_name = $3, icon_uri = $4 WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $3, display_name = $4, icon_uri = $5 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE map_types SET type_id = $4, display_name = $5, icon_uri = $6 WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "map_types",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $3 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1 WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2 WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $3 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $4 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $1, icon_uri = $2",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $1, icon_uri = $2 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $2, icon_uri = $3 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $1, icon_uri = $2 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $2, icon_uri = $3 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $1, icon_uri = $2 WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $2, icon_uri = $3 WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $3, icon_uri = $4 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET display_name = $4, icon_uri = $5 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, true, "str" ],
            "tableEnum": "regions",
            "columnValues": {
                "2": true,
                "3": "str"
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1, display_name = $2, icon_uri = $3",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1, display_name = $2, icon_uri = $3 WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2, display_name = $3, icon_uri = $4 WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1, display_name = $2, icon_uri = $3 WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2, display_name = $3, icon_uri = $4 WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $3, display_name = $4, icon_uri = $5 WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $1, display_name = $2, icon_uri = $3 WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [ "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $2, display_name = $3, icon_uri = $4 WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $3, display_name = $4, icon_uri = $5 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true, "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE regions SET region_id = $4, display_name = $5, icon_uri = $6 WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5, "str", 5, true ],
            "tableEnum": "regions",
            "columnValues": {
                "1": "str",
                "2": 5,
                "3": true
            }
        },
        {
            "query": "UPDATE tile_sizes SET size = $1",
            "condition": null,
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "tile_sizes",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE tile_sizes SET size = $1 WHERE (size = 'str')",
            "condition": "size = 'str'",
            "conditionParams": [],
            "queryParams": [ "str" ],
            "tableEnum": "tile_sizes",
            "columnValues": {
                "1": "str"
            }
        },
        {
            "query": "UPDATE tile_sizes SET size = $2 WHERE (size = $1)",
            "condition": "size = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str", "str" ],
            "tableEnum": "tile_sizes",
            "columnValues": {
                "1": "str"
            }
        }
    ],
    "insertQuery": [ { "query": "INSERT INTO key_items_staging (region_id) VALUES ($1)", "condition": "region_id = 'str'", "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (description, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (description, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (description, type_id) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items_staging (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (description, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (description, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (description, type_id) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, description, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO key_items (region_id, type_id, description, last_update, color) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "key_items",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id) VALUES ($1)",
            "condition": "category_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id) VALUES ($1)",
            "condition": "category_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (icon_uri, display_name) VALUES ($1)",
            "condition": "category_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (icon_uri, display_name) VALUES ($1)",
            "condition": "category_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1)",
            "condition": "category_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1)",
            "condition": "category_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO location_categories (category_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "location_categories",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (block_x, category_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (block_x, category_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, block_x, category_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO locations (region_id, category_id, block_x, block_z, display_name) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "locations",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (size, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (size, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (size, type_id) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles_staging (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles_staging",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (size, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (size, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (size, type_id) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, size, type_id) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z) VALUES ($1, $2, $3, $4, $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "queryParams": [ 1, 2, 3, 4, 5 ],
            "tableEnum": "map_tiles",
            "columns": [ 1, 2, 3, 4, 5 ],
            "values": [ [ 1, 2, 3, 4, 5 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id) VALUES ($1)",
            "condition": "type_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id) VALUES ($1)",
            "condition": "type_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (icon_uri, display_name) VALUES ($1)",
            "condition": "type_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (icon_uri, display_name) VALUES ($1)",
            "condition": "type_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1)",
            "condition": "type_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1)",
            "condition": "type_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO map_types (type_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "map_types",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (icon_uri, display_name) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (icon_uri, display_name) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1)",
            "condition": "region_id = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1)",
            "condition": "region_id = $1",
            "queryParams": [ 1 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "queryParams": [ 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO regions (region_id, icon_uri, display_name) VALUES ($1, $2, $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "queryParams": [ 1, 3, 2 ],
            "tableEnum": "regions",
            "columns": [ 1, 3, 2 ],
            "values": [ [ 1, 3, 2 ]
            ]
        },
        {
            "query": "INSERT INTO tile_sizes (size) VALUES ($1)",
            "condition": "size = 'str'",
            "queryParams": [ 1 ],
            "tableEnum": "tile_sizes",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        },
        {
            "query": "INSERT INTO tile_sizes (size) VALUES ($1)",
            "condition": "size = $1",
            "queryParams": [ 1 ],
            "tableEnum": "tile_sizes",
            "columns": [ 1 ],
            "values": [ [ 1 ]
            ]
        }
    ],
    "deleteQuery": [
        {
            "query": "DELETE FROM key_items_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items_staging"
        },
        {
            "query": "DELETE FROM key_items",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (description = 'str' AND type_id IS_NOT TRUE)",
            "condition": "description = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (description = $1 AND type_id IS_NOT TRUE)",
            "condition": "description = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (description = $1 AND type_id IS_NOT $2)",
            "condition": "description = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = 'str' AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND description IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND description IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND description IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < 5 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= 0 AND color IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM key_items WHERE (region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND description < $3 AND last_update >= $4 AND color IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "key_items"
        },
        {
            "query": "DELETE FROM location_categories",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = 'str')",
            "condition": "category_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = $1)",
            "condition": "category_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM location_categories WHERE (category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "category_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "location_categories"
        },
        {
            "query": "DELETE FROM locations",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (block_x = 'str' AND category_id IS_NOT TRUE)",
            "condition": "block_x = 'str' AND category_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (block_x = $1 AND category_id IS_NOT TRUE)",
            "condition": "block_x = $1 AND category_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (block_x = $1 AND category_id IS_NOT $2)",
            "condition": "block_x = $1 AND category_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = 'str' AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT TRUE AND category_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < 5)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND block_x IS_NOT $2 AND category_id < $3)",
            "condition": "region_id = $1 AND block_x IS_NOT $2 AND category_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = 'str' AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT TRUE AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < 5 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= 0 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM locations WHERE (region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5)",
            "condition": "region_id = $1 AND category_id IS_NOT $2 AND block_x < $3 AND block_z >= $4 AND display_name IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "locations"
        },
        {
            "query": "DELETE FROM map_tiles_staging",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles_staging WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles_staging"
        },
        {
            "query": "DELETE FROM map_tiles",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (size = 'str' AND type_id IS_NOT TRUE)",
            "condition": "size = 'str' AND type_id IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (size = $1 AND type_id IS_NOT TRUE)",
            "condition": "size = $1 AND type_id IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (size = $1 AND type_id IS_NOT $2)",
            "condition": "size = $1 AND type_id IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = 'str' AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = 'str' AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND size IS_NOT TRUE AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT TRUE AND type_id < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < 5)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND size IS_NOT $2 AND type_id < $3)",
            "condition": "region_id = $1 AND size IS_NOT $2 AND type_id < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = 'str' AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT TRUE AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < 5 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= 0 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS NULL",
            "conditionParams": [ "str", true, 5, 0 ],
            "queryParams": [ "str", true, 5, 0 ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_tiles WHERE (region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5)",
            "condition": "region_id = $1 AND type_id IS_NOT $2 AND size < $3 AND block_x >= $4 AND block_z IS $5",
            "conditionParams": [ "str", true, 5, 0, null ],
            "queryParams": [ "str", true, 5, 0, null ],
            "tableEnum": "map_tiles"
        },
        {
            "query": "DELETE FROM map_types",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = 'str')",
            "condition": "type_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = $1)",
            "condition": "type_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM map_types WHERE (type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "type_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "map_types"
        },
        {
            "query": "DELETE FROM regions",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = 'str')",
            "condition": "region_id = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = $1)",
            "condition": "region_id = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (icon_uri = 'str' AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = 'str' AND display_name IS_NOT TRUE",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT TRUE)",
            "condition": "icon_uri = $1 AND display_name IS_NOT TRUE",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (icon_uri = $1 AND display_name IS_NOT $2)",
            "condition": "icon_uri = $1 AND display_name IS_NOT $2",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = 'str' AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT TRUE AND display_name < 5",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < 5",
            "conditionParams": [ "str", true ],
            "queryParams": [ "str", true ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM regions WHERE (region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3)",
            "condition": "region_id = $1 AND icon_uri IS_NOT $2 AND display_name < $3",
            "conditionParams": [ "str", true, 5 ],
            "queryParams": [ "str", true, 5 ],
            "tableEnum": "regions"
        },
        {
            "query": "DELETE FROM tile_sizes",
            "condition": null,
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes"
        },
        {
            "query": "DELETE FROM tile_sizes WHERE (size = 'str')",
            "condition": "size = 'str'",
            "conditionParams": [],
            "queryParams": [],
            "tableEnum": "tile_sizes"
        },
        {
            "query": "DELETE FROM tile_sizes WHERE (size = $1)",
            "condition": "size = $1",
            "conditionParams": [ "str" ],
            "queryParams": [ "str" ],
            "tableEnum": "tile_sizes"
        }
    ]
};