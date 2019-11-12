-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.2-beta
-- PostgreSQL version: 11.0
-- Project Site: pgmodeler.io
-- Model Author: ---

SET check_function_bodies = false;
-- ddl-end --


-- Database creation must be done outside a multicommand file.
-- These commands were put in this file only as a convenience.
-- -- object: "MapDB" | type: DATABASE --
-- -- DROP DATABASE IF EXISTS "MapDB";
-- CREATE DATABASE "MapDB";
-- -- ddl-end --
-- 

-- object: public.map_tiles | type: TABLE --
-- DROP TABLE IF EXISTS public.map_tiles CASCADE;
CREATE TABLE public.map_tiles (
	tile_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ,
	image_resource_id smallint NOT NULL,
	region_name varchar(16) NOT NULL,
	map_type varchar(16) NOT NULL,
	tile_size smallint NOT NULL,
	chunk_coordinates point NOT NULL,
	CONSTRAINT map_tiles_pk PRIMARY KEY (tile_id),
	CONSTRAINT map_tiles_nonempty_strings CHECK ((region_name='') IS NOT TRUE
AND (map_type='') IS NOT TRUE),
	CONSTRAINT map_tiles_positive_size CHECK (tile_size > 0)

);
-- ddl-end --
ALTER TABLE public.map_tiles OWNER TO postgres;
-- ddl-end --

-- object: public.key_items | type: TABLE --
-- DROP TABLE IF EXISTS public.key_items CASCADE;
CREATE TABLE public.key_items (
	key_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ,
	description varchar(64),
	region_name varchar(16) NOT NULL,
	map_type varchar(16) NOT NULL,
	icon_resource_id smallint,
	color char(6) DEFAULT '000000',
	CONSTRAINT key_items_pk PRIMARY KEY (key_id),
	CONSTRAINT key_items_nonempty_strings CHECK ((description = '') IS NOT TRUE
AND (region_name='') IS NOT TRUE
AND (map_type='') IS NOT TRUE ),
	CONSTRAINT key_items_color_or_icon CHECK (color IS NOT NULL OR icon_resource_id IS NOT NULL)

);
-- ddl-end --
COMMENT ON TABLE public.key_items IS 'Prevent insertion of multiple rows with the same description, region, and map type.';
-- ddl-end --
ALTER TABLE public.key_items OWNER TO postgres;
-- ddl-end --

-- object: public.directory | type: TABLE --
-- DROP TABLE IF EXISTS public.directory CASCADE;
CREATE TABLE public.directory (
	location_name varchar(64) NOT NULL,
	icon_resource_id smallint,
	region_name varchar(16) NOT NULL,
	coordinates point NOT NULL,
	color char(6) DEFAULT '000000',
	CONSTRAINT directory_location_name_pk PRIMARY KEY (location_name),
	CONSTRAINT directory_location_name_unique UNIQUE (location_name),
	CONSTRAINT directory_location_name_nonempty CHECK ((location_name='') IS NOT TRUE)

);
-- ddl-end --
ALTER TABLE public.directory OWNER TO postgres;
-- ddl-end --

-- object: public.image_resources | type: TABLE --
-- DROP TABLE IF EXISTS public.image_resources CASCADE;
CREATE TABLE public.image_resources (
	resource_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ,
	image_url varchar(256) NOT NULL,
	resource_loaded bool DEFAULT false,
	CONSTRAINT image_resources_pk PRIMARY KEY (resource_id),
	CONSTRAINT image_resources_url_unique UNIQUE (image_url),
	CONSTRAINT image_resources_url_nonempty CHECK ((image_url='') IS NOT TRUE)

);
-- ddl-end --
ALTER TABLE public.image_resources OWNER TO postgres;
-- ddl-end --

-- object: public.image_resources_update_or_add | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.image_resources_update_or_add(IN varchar(256),IN bool) CASCADE;
CREATE FUNCTION public.image_resources_update_or_add (IN resource_url varchar(256), IN set_loaded bool DEFAULT false)
	RETURNS smallint
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
WITH new_or_existing AS
(
	INSERT INTO image_resources(image_url)
	VALUES(resource_url)
	ON CONFLICT(image_url) DO UPDATE
	SET resource_loaded = set_loaded
	RETURNING resource_id
)
SELECT * FROM new_or_existing
$$;
-- ddl-end --
ALTER FUNCTION public.image_resources_update_or_add(IN varchar(256),IN bool) OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.image_resources_update_or_add(IN varchar(256),IN bool) IS 'Updates a resource to add a new update time, or adds it if it doesn''t already exist, returning the resource id.';
-- ddl-end --

-- object: public.apply_staging | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.apply_staging() CASCADE;
CREATE FUNCTION public.apply_staging ()
	RETURNS void
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
WITH resource_staging AS
(
	SELECT ir.image_url, ir.resource_id
	FROM image_resources ir
	WHERE EXISTS 
	(
		SELECT image_resource_id
		FROM staging_map_tiles mt
		WHERE mt.image_resource_id = ir.resource_id
	)
	OR EXISTS
	(
		SELECT icon_resource_id
		FROM staging_key_items ki
		WHERE ki.icon_resource_id = ir.resource_id
	)
)
UPDATE image_resources ir
	SET resource_loaded = TRUE
	FROM resource_staging rs
	WHERE rs.resource_id = ir.resource_id
	AND rs.image_url IS NOT NULL;
TRUNCATE key_items;
INSERT INTO key_items (description, region_name, map_type, icon_resource_id, color)
	SELECT description, region_name, map_type, icon_resource_id, color
	FROM staging_key_items;
TRUNCATE staging_key_items;
TRUNCATE map_tiles;
INSERT INTO map_tiles (image_resource_id, region_name, map_type, tile_size, chunk_coordinates)
	SELECT image_resource_id, region_name, map_type, tile_size, chunk_coordinates
	FROM staging_map_tiles;

TRUNCATE staging_map_tiles;
$$;
-- ddl-end --
ALTER FUNCTION public.apply_staging() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.apply_staging() IS 'Overwrites the main key and tile tables with data from the staging tables, and clears the staging tables.';
-- ddl-end --

-- object: public.staging_key_items | type: TABLE --
-- DROP TABLE IF EXISTS public.staging_key_items CASCADE;
CREATE TABLE public.staging_key_items (
	staging_key_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ,
	description varchar(64),
	region_name varchar(16) NOT NULL,
	map_type varchar(16) NOT NULL,
	icon_resource_id smallint,
	color char(6) DEFAULT '000000',
	CONSTRAINT staging_key_items_pk PRIMARY KEY (staging_key_id),
	CONSTRAINT staging_key_items_nonempty_strings CHECK ((description = '') IS NOT TRUE
AND (region_name='') IS NOT TRUE
AND (map_type='') IS NOT TRUE ),
	CONSTRAINT staging_key_items_color_or_icon CHECK (color IS NOT NULL OR icon_resource_id IS NOT NULL)

);
-- ddl-end --
ALTER TABLE public.staging_key_items OWNER TO postgres;
-- ddl-end --

-- object: public.get_regions | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.get_regions() CASCADE;
CREATE FUNCTION public.get_regions ()
	RETURNS SETOF varchar(16)
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	ROWS 3
	AS $$
SELECT DISTINCT tiles.region_name
FROM map_tiles tiles
JOIN key_items key on tiles.region_name = key.region_name
JOIN directory dir on tiles.region_name = dir.region_name
$$;
-- ddl-end --
ALTER FUNCTION public.get_regions() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.get_regions() IS 'Gets all unique region names within the database.';
-- ddl-end --

-- object: public.get_map_types | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.get_map_types() CASCADE;
CREATE FUNCTION public.get_map_types ()
	RETURNS SETOF varchar(16)
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	ROWS 6
	AS $$
SELECT DISTINCT tiles.map_type
FROM map_tiles tiles
JOIN key_items ki ON tiles.map_type = ki.map_type
JOIN directory dir ON tiles.map_type = dir.map_type
$$;
-- ddl-end --
ALTER FUNCTION public.get_map_types() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.get_map_types() IS 'Gets all unique map types within the database.';
-- ddl-end --

-- object: public.image_resources_find_or_add | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.image_resources_find_or_add(IN varchar(256),IN bool) CASCADE;
CREATE FUNCTION public.image_resources_find_or_add (IN resource_url varchar(256), IN set_loaded bool DEFAULT false)
	RETURNS smallint
	LANGUAGE sql
	VOLATILE 
	RETURNS NULL ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
WITH new_or_existing AS
(
	INSERT INTO image_resources(image_url)
	VALUES(resource_url)
	ON CONFLICT(image_url) DO UPDATE
	SET image_url = resource_url
	RETURNING resource_id
)
SELECT * FROM new_or_existing
$$;
-- ddl-end --
ALTER FUNCTION public.image_resources_find_or_add(IN varchar(256),IN bool) OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.image_resources_find_or_add(IN varchar(256),IN bool) IS 'Updates a resource to add a new update time, or adds it if it doesn''t already exist, returning the resource id.';
-- ddl-end --

-- object: public.staging_map_tiles | type: TABLE --
-- DROP TABLE IF EXISTS public.staging_map_tiles CASCADE;
CREATE TABLE public.staging_map_tiles (
	tile_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ,
	image_resource_id smallint NOT NULL,
	region_name varchar(16) NOT NULL,
	map_type varchar(16) NOT NULL,
	tile_size smallint NOT NULL,
	chunk_coordinates point NOT NULL,
	CONSTRAINT staging_map_tiles_pk PRIMARY KEY (tile_id),
	CONSTRAINT staging_map_tiles_nonempty_strings CHECK ((region_name='') IS NOT TRUE
AND (map_type='') IS NOT TRUE),
	CONSTRAINT staging_map_tiles_positive_size CHECK (tile_size > 0)

);
-- ddl-end --
ALTER TABLE public.staging_map_tiles OWNER TO postgres;
-- ddl-end --

-- object: staging_key_items_ignore_duplicates | type: RULE --
-- DROP RULE IF EXISTS staging_key_items_ignore_duplicates ON public.staging_key_items CASCADE;
CREATE RULE staging_key_items_ignore_duplicates AS ON INSERT
	TO public.staging_key_items
	WHERE EXISTS (SELECT * FROM staging_key_items WHERE
	staging_key_items.description = NEW.description
	AND staging_key_items.region_name = NEW.region_name
	AND staging_key_items.map_type = NEW.map_type)
	
	DO INSTEAD NOTHING;
-- ddl-end --
COMMENT ON RULE staging_key_items_ignore_duplicates ON public.staging_key_items IS 'Prevent insertion of multiple rows with the same description, region, and map type.';
-- ddl-end --

-- object: key_items_ignore_duplicates | type: RULE --
-- DROP RULE IF EXISTS key_items_ignore_duplicates ON public.key_items CASCADE;
CREATE RULE key_items_ignore_duplicates AS ON INSERT
	TO public.key_items
	WHERE EXISTS (SELECT * FROM key_items WHERE
	key_items.description = NEW.description
	AND key_items.region_name = NEW.region_name
	AND key_items.map_type = NEW.map_type)
	
	DO INSTEAD NOTHING;
-- ddl-end --

-- object: map_tiles_prevent_duplicates | type: RULE --
-- DROP RULE IF EXISTS map_tiles_prevent_duplicates ON public.map_tiles CASCADE;
CREATE RULE map_tiles_prevent_duplicates AS ON INSERT
	TO public.map_tiles
	WHERE EXISTS (SELECT * FROM map_tiles WHERE
	map_tiles.region_name = NEW.region_name
	AND map_tiles.map_type = NEW.map_type
	AND map_tiles.tile_size = NEW.tile_size
	AND map_tiles.chunk_coordinates ~= NEW.chunk_coordinates)
	DO INSTEAD NOTHING;
-- ddl-end --
COMMENT ON RULE map_tiles_prevent_duplicates ON public.map_tiles IS 'Prevent insertion of multiple rows with the same region name, map type, tile size, and coordinates.';
-- ddl-end --

-- object: staging_map_tiles_prevent_duplicates | type: RULE --
-- DROP RULE IF EXISTS staging_map_tiles_prevent_duplicates ON public.staging_map_tiles CASCADE;
CREATE RULE staging_map_tiles_prevent_duplicates AS ON INSERT
	TO public.staging_map_tiles
	WHERE EXISTS (SELECT * FROM staging_map_tiles WHERE
	staging_map_tiles.region_name = NEW.region_name
	AND staging_map_tiles.map_type = NEW.map_type
	AND staging_map_tiles.tile_size = NEW.tile_size
	AND staging_map_tiles.chunk_coordinates ~= NEW.chunk_coordinates)
	DO INSTEAD NOTHING;
-- ddl-end --
COMMENT ON RULE staging_map_tiles_prevent_duplicates ON public.staging_map_tiles IS 'Prevent insertion of rows with the same region, map type, size, and coordinates.';
-- ddl-end --

-- object: public.get_tile_sizes | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.get_tile_sizes() CASCADE;
CREATE FUNCTION public.get_tile_sizes ()
	RETURNS SETOF smallint
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	ROWS 4
	AS $$
SELECT DISTINCT tile_size FROM map_tiles
$$;
-- ddl-end --
ALTER FUNCTION public.get_tile_sizes() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.get_tile_sizes() IS 'Gets all map tile resolutions available.';
-- ddl-end --

-- object: map_tiles_image_resource_id | type: CONSTRAINT --
-- ALTER TABLE public.map_tiles DROP CONSTRAINT IF EXISTS map_tiles_image_resource_id CASCADE;
ALTER TABLE public.map_tiles ADD CONSTRAINT map_tiles_image_resource_id FOREIGN KEY (image_resource_id)
REFERENCES public.image_resources (resource_id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --

-- object: key_items_icon_resource_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.key_items DROP CONSTRAINT IF EXISTS key_items_icon_resource_id_fk CASCADE;
ALTER TABLE public.key_items ADD CONSTRAINT key_items_icon_resource_id_fk FOREIGN KEY (icon_resource_id)
REFERENCES public.image_resources (resource_id) MATCH FULL
ON DELETE SET NULL ON UPDATE NO ACTION;
-- ddl-end --

-- object: directory_icon_resource_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.directory DROP CONSTRAINT IF EXISTS directory_icon_resource_id_fk CASCADE;
ALTER TABLE public.directory ADD CONSTRAINT directory_icon_resource_id_fk FOREIGN KEY (icon_resource_id)
REFERENCES public.image_resources (resource_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: staging_key_items_icon_resource_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.staging_key_items DROP CONSTRAINT IF EXISTS staging_key_items_icon_resource_id_fk CASCADE;
ALTER TABLE public.staging_key_items ADD CONSTRAINT staging_key_items_icon_resource_id_fk FOREIGN KEY (icon_resource_id)
REFERENCES public.image_resources (resource_id) MATCH FULL
ON DELETE SET NULL ON UPDATE NO ACTION;
-- ddl-end --

-- object: staging_map_tiles_image_resource_id | type: CONSTRAINT --
-- ALTER TABLE public.staging_map_tiles DROP CONSTRAINT IF EXISTS staging_map_tiles_image_resource_id CASCADE;
ALTER TABLE public.staging_map_tiles ADD CONSTRAINT staging_map_tiles_image_resource_id FOREIGN KEY (image_resource_id)
REFERENCES public.image_resources (resource_id) MATCH FULL
ON DELETE CASCADE ON UPDATE NO ACTION;
-- ddl-end --


