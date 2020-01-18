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

-- object: public.regions | type: TABLE --
-- DROP TABLE IF EXISTS public.regions CASCADE;
CREATE TABLE public.regions (
	region_id varchar(16) NOT NULL,
	display_name varchar(32) NOT NULL,
	icon_uri varchar(512),
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT region_pk PRIMARY KEY (region_id),
	CONSTRAINT region_valid_id CHECK (--check_id_format(region_id::VARCHAR(16))
region_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'),
	CONSTRAINT region_nonempty_display_name CHECK ((display_name = '') IS NOT TRUE),
	CONSTRAINT region_display_name_unique UNIQUE (display_name)

);
-- ddl-end --
COMMENT ON TABLE public.regions IS 'Stores all mapped Minecraft regions/dimensions. Each region is a distinct plane with its own set of maps. In a typical Minecraft server, this includes the Overworld, the Nether, and the End, but modded servers may add additional regions.';
-- ddl-end --
COMMENT ON COLUMN public.regions.region_id IS 'Identifies a mapped Minecraft region/dimension.';
-- ddl-end --
COMMENT ON COLUMN public.regions.display_name IS 'The name used to represent a region within the map viewer interface.';
-- ddl-end --
COMMENT ON COLUMN public.regions.icon_uri IS 'An optional URI for an image used to represent a region in the map viewer interface.';
-- ddl-end --
COMMENT ON COLUMN public.regions.last_update IS 'The last time a map tile or location within a region was added or updated.';
-- ddl-end --
COMMENT ON CONSTRAINT region_valid_id ON public.regions  IS 'The region ID must follow ID string naming conventions.';
-- ddl-end --
COMMENT ON CONSTRAINT region_nonempty_display_name ON public.regions  IS 'The display name must be a non-empty string.';
-- ddl-end --
COMMENT ON CONSTRAINT region_display_name_unique ON public.regions  IS 'Region display names must be unique.';
-- ddl-end --
ALTER TABLE public.regions OWNER TO postgres;
-- ddl-end --

-- object: public.map_types | type: TABLE --
-- DROP TABLE IF EXISTS public.map_types CASCADE;
CREATE TABLE public.map_types (
	type_id varchar(16) NOT NULL,
	display_name varchar(32) NOT NULL,
	icon_uri varchar(512),
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT map_types_type_id_pk PRIMARY KEY (type_id),
	CONSTRAINT map_types_valid_id CHECK (--check_id_format(type_id::VARCHAR(16))
type_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'),
	CONSTRAINT map_types_display_name_unique UNIQUE (display_name),
	CONSTRAINT map_types_nonempty_display_name CHECK ((display_name='') IS NOT TRUE)

);
-- ddl-end --
COMMENT ON TABLE public.map_types IS 'Stores the different types of map available (e.g. biome, recent activity, etc.).';
-- ddl-end --
COMMENT ON COLUMN public.map_types.type_id IS 'Identifies a type of map image available.';
-- ddl-end --
COMMENT ON COLUMN public.map_types.display_name IS 'The display name used to represent a map type within the map viewer interface.';
-- ddl-end --
COMMENT ON COLUMN public.map_types.icon_uri IS 'An optional URI for an image used to represent a map type in the map viewer interface.';
-- ddl-end --
COMMENT ON COLUMN public.map_types.last_update IS 'The last time a map tile of a given type was added or updated.';
-- ddl-end --
COMMENT ON CONSTRAINT map_types_valid_id ON public.map_types  IS 'Map type IDs must meet ID string naming conventions.';
-- ddl-end --
COMMENT ON CONSTRAINT map_types_display_name_unique ON public.map_types  IS 'Map types must have unique display names.';
-- ddl-end --
COMMENT ON CONSTRAINT map_types_nonempty_display_name ON public.map_types  IS 'Map type display name cannot be the empty string.';
-- ddl-end --
ALTER TABLE public.map_types OWNER TO postgres;
-- ddl-end --

-- object: public.tile_sizes | type: TABLE --
-- DROP TABLE IF EXISTS public.tile_sizes CASCADE;
CREATE TABLE public.tile_sizes (
	size smallint NOT NULL,
	CONSTRAINT tile_sizes_pk PRIMARY KEY (size),
	CONSTRAINT tile_sizes_positive CHECK (size > 0)

);
-- ddl-end --
COMMENT ON TABLE public.tile_sizes IS 'Lists all map tile image resolutions available.  Sizes are measured in pixels, and represent both the width and height of an image.';
-- ddl-end --
COMMENT ON COLUMN public.tile_sizes.size IS 'A map tile image width and height in pixels.';
-- ddl-end --
COMMENT ON CONSTRAINT tile_sizes_positive ON public.tile_sizes  IS 'Tile sizes must be positive numbers.';
-- ddl-end --
ALTER TABLE public.tile_sizes OWNER TO postgres;
-- ddl-end --

-- object: public.map_tiles | type: TABLE --
-- DROP TABLE IF EXISTS public.map_tiles CASCADE;
CREATE TABLE public.map_tiles (
	region_id varchar(16) NOT NULL,
	type_id varchar(16) NOT NULL,
	size smallint NOT NULL,
	block_x integer NOT NULL,
	block_z integer NOT NULL,
	tile_uri varchar(512) NOT NULL,
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT map_tiles_pk PRIMARY KEY (region_id,type_id,size,block_x,block_z),
	CONSTRAINT map_tiles_valid_ids CHECK (--check_id_format(region_id::VARCHAR(16))
-- AND check_id_format(type_id::VARCHAR(16))
region_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'
AND type_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'),
	CONSTRAINT map_tiles_valid_size CHECK (size > 0),
	CONSTRAINT map_tiles_uri_nonempty CHECK ((tile_uri = '') IS NOT TRUE)

);
-- ddl-end --
COMMENT ON TABLE public.map_tiles IS 'Stores information about ChunkAtlas map tile images.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.region_id IS 'Identifies the mapped Minecraft region/dimension.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.type_id IS 'Identifies the tile''s map format.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.size IS 'The tile image width and height in pixels.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.block_x IS 'The x-coordinate of the tile''s upper left corner within the mapped region, measured in Minecraft blocks.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.block_z IS 'The z-coordinate of the tile''s upper left corner within the mapped region, measured in Minecraft blocks.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.tile_uri IS 'The URI used to access the tile image.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles.last_update IS 'The time that this tile was created or last updated.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_pk ON public.map_tiles  IS 'For each region, map type, image size, and coordinates, only one tile may exist.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_valid_ids ON public.map_tiles  IS 'All ID strings must meet ID naming conventions.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_valid_size ON public.map_tiles  IS 'Map tile size values must be positive.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_uri_nonempty ON public.map_tiles  IS 'Map tiles must be created with a nonempty URI.';
-- ddl-end --
ALTER TABLE public.map_tiles OWNER TO postgres;
-- ddl-end --

-- object: public.regions_add_or_update | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.regions_add_or_update() CASCADE;
CREATE FUNCTION public.regions_add_or_update ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
	INSERT INTO regions (region_id, display_name, last_update)
	VALUES (NEW.region_id, NEW.region_id, NEW.last_update);
	RETURN NEW;
EXCEPTION WHEN unique_violation THEN
	-- value already present, just update timestamp.
	UPDATE regions
	SET last_update = NEW.last_update;
	RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.regions_add_or_update() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.regions_add_or_update() IS 'If not already present in the regions table, add a new region_id, setting its initial display_name to match the region_id.';
-- ddl-end --

-- object: map_tiles_update_regions | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_regions ON public.map_tiles CASCADE;
CREATE TRIGGER map_tiles_update_regions
	BEFORE INSERT 
	ON public.map_tiles
	FOR EACH ROW
	EXECUTE PROCEDURE public.regions_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_regions ON public.map_tiles IS 'Ensures that the region_id is added to the region table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: public.map_types_add_or_update | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.map_types_add_or_update() CASCADE;
CREATE FUNCTION public.map_types_add_or_update ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
	INSERT INTO map_types (type_id, display_name, last_update)
	VALUES (NEW.type_id, NEW.type_id, NEW.last_update);
	RETURN NEW;
EXCEPTION WHEN unique_violation THEN
	-- value already present, just update timestamp.
	UPDATE map_types
	SET last_update = NEW.last_update;
	RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.map_types_add_or_update() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.map_types_add_or_update() IS 'Adds a new map type to map_types if a type_id is not found, setting display_name to match type_id.';
-- ddl-end --

-- object: public.tile_sizes_add_if_missing | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.tile_sizes_add_if_missing() CASCADE;
CREATE FUNCTION public.tile_sizes_add_if_missing ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
	INSERT INTO tile_sizes VALUES (NEW.size);
	RETURN NEW;
EXCEPTION WHEN unique_violation THEN
	-- value already present, do nothing.
	RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.tile_sizes_add_if_missing() OWNER TO postgres;
-- ddl-end --

-- object: map_tiles_update_types | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_types ON public.map_tiles CASCADE;
CREATE TRIGGER map_tiles_update_types
	BEFORE INSERT 
	ON public.map_tiles
	FOR EACH ROW
	EXECUTE PROCEDURE public.map_types_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_types ON public.map_tiles IS 'Ensures that the type_id is added to the map_type table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: map_tiles_update_sizes | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_sizes ON public.map_tiles CASCADE;
CREATE TRIGGER map_tiles_update_sizes
	BEFORE INSERT 
	ON public.map_tiles
	FOR EACH ROW
	EXECUTE PROCEDURE public.tile_sizes_add_if_missing();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_sizes ON public.map_tiles IS 'Ensures that the size is added to the tile_sizes table if it isn''t already there.';
-- ddl-end --

-- object: public.locations | type: TABLE --
-- DROP TABLE IF EXISTS public.locations CASCADE;
CREATE TABLE public.locations (
	region_id varchar(16) NOT NULL,
	category_id varchar(16) NOT NULL,
	block_x integer NOT NULL,
	block_z integer NOT NULL,
	display_name varchar(128),
	color char(6),
	icon_uri varchar(512),
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT locations_pk PRIMARY KEY (region_id,category_id,block_x,block_z),
	CONSTRAINT locations_valid_ids CHECK (--check_id_format(region_id::VARCHAR(16))
--AND check_id_format(category_id::VARCHAR(16))
region_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'
AND category_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'),
	CONSTRAINT locations_valid_color CHECK (--color IS NULL OR check_color(color)
color IS NULL OR color  SIMILAR TO '^[0-9a-f]{6}$')

);
-- ddl-end --
COMMENT ON TABLE public.locations IS 'Stores notable locations within a mapped region.';
-- ddl-end --
COMMENT ON COLUMN public.locations.region_id IS 'Identifies the Minecraft region/dimension that contains this location.';
-- ddl-end --
COMMENT ON COLUMN public.locations.category_id IS 'Sorts the location into a specific category.';
-- ddl-end --
COMMENT ON COLUMN public.locations.block_x IS 'The location''s x-coordinate within its region, measured in blocks.';
-- ddl-end --
COMMENT ON COLUMN public.locations.block_z IS 'The location''s z-coordinate within its region, measured in blocks.';
-- ddl-end --
COMMENT ON COLUMN public.locations.display_name IS 'An optional name used to label this location within the map viewer.';
-- ddl-end --
COMMENT ON COLUMN public.locations.color IS 'An optional color to use when drawing this location''s point on the map viewer, represented as a six-digit hex string.';
-- ddl-end --
COMMENT ON COLUMN public.locations.icon_uri IS 'An optional icon URI to use when drawing this location''s point on the map viewer.';
-- ddl-end --
COMMENT ON COLUMN public.locations.last_update IS 'The time when the location was added or last updated.';
-- ddl-end --
COMMENT ON CONSTRAINT locations_pk ON public.locations  IS 'Each region can have only one location with a given category at the same coordinates.';
-- ddl-end --
COMMENT ON CONSTRAINT locations_valid_ids ON public.locations  IS 'All ID strings must meet ID naming conventions.';
-- ddl-end --
COMMENT ON CONSTRAINT locations_valid_color ON public.locations  IS 'If the color is non-null, it must be an appropriate six-digit hex string.';
-- ddl-end --
ALTER TABLE public.locations OWNER TO postgres;
-- ddl-end --

-- object: public.location_categories | type: TABLE --
-- DROP TABLE IF EXISTS public.location_categories CASCADE;
CREATE TABLE public.location_categories (
	category_id varchar(16) NOT NULL,
	display_name varchar(64),
	icon_uri varchar(512),
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT location_categories_pk PRIMARY KEY (category_id),
	CONSTRAINT location_categories_display_name_unique UNIQUE (display_name),
	CONSTRAINT location_categories_display_name_nonempty CHECK ((display_name = '') IS NOT TRUE),
	CONSTRAINT location_categories_valid_id CHECK (--check_id_format(category_id::VARCHAR(16))
category_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$')

);
-- ddl-end --
COMMENT ON TABLE public.location_categories IS 'Stores all categories used within the locations table.';
-- ddl-end --
COMMENT ON COLUMN public.location_categories.category_id IS 'A short string used to identify a location category.';
-- ddl-end --
COMMENT ON COLUMN public.location_categories.display_name IS 'A string to use when displaying category names to the user.';
-- ddl-end --
COMMENT ON COLUMN public.location_categories.icon_uri IS 'An optional icon used to represent a category within user interfaces.';
-- ddl-end --
COMMENT ON COLUMN public.location_categories.last_update IS 'The time a category was added, or the last time a location in the category was added or updated.';
-- ddl-end --
COMMENT ON CONSTRAINT location_categories_display_name_unique ON public.location_categories  IS 'Categories must have distinct display names.';
-- ddl-end --
COMMENT ON CONSTRAINT location_categories_display_name_nonempty ON public.location_categories  IS 'Categories must have a non-empty display name';
-- ddl-end --
COMMENT ON CONSTRAINT location_categories_valid_id ON public.location_categories  IS 'category_id values must meet string ID naming conventions.';
-- ddl-end --
ALTER TABLE public.location_categories OWNER TO postgres;
-- ddl-end --

-- object: public.location_categories_add_or_update | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.location_categories_add_or_update() CASCADE;
CREATE FUNCTION public.location_categories_add_or_update ()
	RETURNS trigger
	LANGUAGE plpgsql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
	INSERT INTO location_categories (category_id, display_name, last_update)
	VALUES (NEW.category_id, NEW.category_id, NEW.last_update);
	RETURN NEW;
EXCEPTION WHEN unique_violation THEN
	-- value already present, just update timestamp.
	UPDATE location_categories
	SET last_update = NEW.last_update;
	RETURN NEW;
END;
$$;
-- ddl-end --
ALTER FUNCTION public.location_categories_add_or_update() OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.location_categories_add_or_update() IS 'Adds a new location category, setting display_name to category_id, or updates the timestamp if the category already exists.';
-- ddl-end --

-- object: public.key_items | type: TABLE --
-- DROP TABLE IF EXISTS public.key_items CASCADE;
CREATE TABLE public.key_items (
	region_id varchar(16) NOT NULL,
	type_id varchar(16) NOT NULL,
	description varchar(256) NOT NULL,
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	color char(6),
	icon_uri varchar(512),
	CONSTRAINT key_items_pk PRIMARY KEY (region_id,type_id,description),
	CONSTRAINT key_items_description_nonempty CHECK ((description = '') IS NOT TRUE),
	CONSTRAINT key_items_color_or_icon_uri_valid CHECK ((color IS NOT NULL OR icon_uri IS NOT NULL)
--AND (color IS NULL OR check_color(color))
AND (color IS NULL OR color  SIMILAR TO '^[0-9a-f]{6}$')
AND (icon_uri IS  NULL OR (icon_uri = '') IS NOT TRUE))

);
-- ddl-end --
COMMENT ON TABLE public.key_items IS 'Stores items within a map key.  Each map type/region combination has its own key, displayed to the user within the map viewer to explain map symbols and/or colors.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.region_id IS 'The map region described by a key item.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.type_id IS 'The map data type described by a key item.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.description IS 'Explains to the user what the key item''s color or icon represents.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.last_update IS 'The last time the key item was updated.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.color IS 'A map color explained by the key item, represented as a six-digit color string. This value may only be null if the icon URI is not null.';
-- ddl-end --
COMMENT ON COLUMN public.key_items.icon_uri IS 'The image URI of a map icon or symbol explained by the key item.  This value may only be null if the icon color is not null.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_pk ON public.key_items  IS 'Key items within a shared region and map type must have unique descriptions.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_description_nonempty ON public.key_items  IS 'Key items cannot have empty description strings.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_color_or_icon_uri_valid ON public.key_items  IS 'Either the color or icon_uri must be non-null and non-empty, and colors must be valid color strings.';
-- ddl-end --
ALTER TABLE public.key_items OWNER TO postgres;
-- ddl-end --

-- object: public.check_id_format | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.check_id_format(IN varchar(16)) CASCADE;
CREATE FUNCTION public.check_id_format (IN id_string varchar(16))
	RETURNS bool
	LANGUAGE sql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
RETURN id_string SIMILAR TO '^[a-z](_?[a-z])*[a-z]$';
$$;
-- ddl-end --
ALTER FUNCTION public.check_id_format(IN varchar(16)) OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.check_id_format(IN varchar(16)) IS 'Checks that an ID string meets expected formatting rules.
ID Constraints:
- ID strings must contain 2-16 characters.
- ID strings may only contain lowercase letters and underscores.
- Underscores are not repeated.
- ID strings must begin and end with lowercase letters.';
-- ddl-end --

-- object: locations_update_regions | type: TRIGGER --
-- DROP TRIGGER IF EXISTS locations_update_regions ON public.locations CASCADE;
CREATE TRIGGER locations_update_regions
	BEFORE INSERT 
	ON public.locations
	FOR EACH STATEMENT
	EXECUTE PROCEDURE public.regions_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER locations_update_regions ON public.locations IS 'Ensures that the region_id is added to the region table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: locations_update_location_categories | type: TRIGGER --
-- DROP TRIGGER IF EXISTS locations_update_location_categories ON public.locations CASCADE;
CREATE TRIGGER locations_update_location_categories
	BEFORE INSERT 
	ON public.locations
	FOR EACH STATEMENT
	EXECUTE PROCEDURE public.location_categories_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER locations_update_location_categories ON public.locations IS 'Ensures that category_id is added to the location_categories table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: public.check_color | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.check_color(IN char(6)) CASCADE;
CREATE FUNCTION public.check_color (IN color char(6))
	RETURNS bool
	LANGUAGE sql
	IMMUTABLE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
IF (color ~ '^[0-9a-f]{6}$') THEN
	RETURN TRUE;
END IF;
RETURN FALSE;
$$;
-- ddl-end --
ALTER FUNCTION public.check_color(IN char(6)) OWNER TO postgres;
-- ddl-end --
COMMENT ON FUNCTION public.check_color(IN char(6)) IS 'Ensures that a string is a valid hex color.';
-- ddl-end --

-- object: public.key_items_staging | type: TABLE --
-- DROP TABLE IF EXISTS public.key_items_staging CASCADE;
CREATE TABLE public.key_items_staging (
	region_id varchar(16) NOT NULL,
	type_id varchar(16) NOT NULL,
	description varchar(256) NOT NULL,
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	color char(6),
	icon_uri varchar(512),
	CONSTRAINT key_items_staging_pk PRIMARY KEY (region_id,type_id,description),
	CONSTRAINT key_items_staging_description_nonempty CHECK ((description = '') IS NOT TRUE),
	CONSTRAINT key_items_staging_color_or_icon_uri_valid CHECK ((color IS NOT NULL OR icon_uri IS NOT NULL)
--AND (color IS NULL OR check_color(color))
AND (color IS NULL OR color  SIMILAR TO '^[0-9a-f]{6}$')
AND (icon_uri IS  NULL OR (icon_uri = '') IS NOT TRUE))

);
-- ddl-end --
COMMENT ON TABLE public.key_items_staging IS 'Holds a new set of updated key items while waiting for update data to load, so that all related map updates may be applied atomically.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.region_id IS 'The map region described by a key item.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.type_id IS 'The map data type described by a key item.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.description IS 'Explains to the user what the key item''s color or icon represents.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.last_update IS 'The last time the key item was updated.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.color IS 'A map color explained by the key item, represented as a six-digit color string. This value may only be null if the icon URI is not null.';
-- ddl-end --
COMMENT ON COLUMN public.key_items_staging.icon_uri IS 'The image URI of a map icon or symbol explained by the key item.  This value may only be null if the icon color is not null.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_staging_pk ON public.key_items_staging  IS 'Key items within a shared region and map type must have unique descriptions.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_staging_description_nonempty ON public.key_items_staging  IS 'Key items cannot have empty description strings.';
-- ddl-end --
COMMENT ON CONSTRAINT key_items_staging_color_or_icon_uri_valid ON public.key_items_staging  IS 'Either the color or icon_uri must be non-null and non-empty, and colors must be valid color strings.';
-- ddl-end --
ALTER TABLE public.key_items_staging OWNER TO postgres;
-- ddl-end --

-- object: public.map_tiles_staging | type: TABLE --
-- DROP TABLE IF EXISTS public.map_tiles_staging CASCADE;
CREATE TABLE public.map_tiles_staging (
	region_id varchar(16) NOT NULL,
	type_id varchar(16) NOT NULL,
	size smallint NOT NULL,
	block_x integer NOT NULL,
	block_z integer NOT NULL,
	tile_uri varchar(512) NOT NULL,
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT map_tiles_staging_pk PRIMARY KEY (region_id,type_id,size,block_x,block_z),
	CONSTRAINT map_tiles_staging_valid_ids CHECK (--check_id_format(region_id::VARCHAR(16)) AND
--check_id_format(type_id::VARCHAR(16))
region_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'
AND type_id SIMILAR TO '^[a-z](_?[a-z])*[a-z]$'),
	CONSTRAINT map_tiles_staging_valid_size CHECK (size > 0),
	CONSTRAINT map_tiles_staging_uri_nonempty CHECK ((tile_uri = '') IS NOT TRUE)

);
-- ddl-end --
COMMENT ON TABLE public.map_tiles_staging IS 'Holds new additions and updates to map tile data, so that all related map updates may be applied atomically.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.region_id IS 'Identifies the mapped Minecraft region/dimension.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.type_id IS 'Identifies the tile''s map format.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.size IS 'The tile image width and height in pixels.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.block_x IS 'The x-coordinate of the tile''s upper left corner within the mapped region, measured in Minecraft blocks.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.block_z IS 'The z-coordinate of the tile''s upper left corner within the mapped region, measured in Minecraft blocks.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.tile_uri IS 'The URI used to access the tile image.';
-- ddl-end --
COMMENT ON COLUMN public.map_tiles_staging.last_update IS 'The time that this tile was created or last updated.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_staging_pk ON public.map_tiles_staging  IS 'For each region, map type, image size, and coordinates, only one tile may exist.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_staging_valid_ids ON public.map_tiles_staging  IS 'All ID strings must meet ID naming conventions.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_staging_valid_size ON public.map_tiles_staging  IS 'Map tile size values must be positive.';
-- ddl-end --
COMMENT ON CONSTRAINT map_tiles_staging_uri_nonempty ON public.map_tiles_staging  IS 'Map tiles must be created with a nonempty URI.';
-- ddl-end --
ALTER TABLE public.map_tiles_staging OWNER TO postgres;
-- ddl-end --

-- object: map_tiles_update_regions | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_regions ON public.map_tiles_staging CASCADE;
CREATE TRIGGER map_tiles_update_regions
	BEFORE INSERT 
	ON public.map_tiles_staging
	FOR EACH ROW
	EXECUTE PROCEDURE public.regions_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_regions ON public.map_tiles_staging IS 'Ensures that the region_id is added to the region table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: map_tiles_update_types | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_types ON public.map_tiles_staging CASCADE;
CREATE TRIGGER map_tiles_update_types
	BEFORE INSERT 
	ON public.map_tiles_staging
	FOR EACH ROW
	EXECUTE PROCEDURE public.map_types_add_or_update();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_types ON public.map_tiles_staging IS 'Ensures that the type_id is added to the map_type table if it isn''t already there, and changes its update timestamp.';
-- ddl-end --

-- object: map_tiles_update_sizes | type: TRIGGER --
-- DROP TRIGGER IF EXISTS map_tiles_update_sizes ON public.map_tiles_staging CASCADE;
CREATE TRIGGER map_tiles_update_sizes
	BEFORE INSERT 
	ON public.map_tiles_staging
	FOR EACH ROW
	EXECUTE PROCEDURE public.tile_sizes_add_if_missing();
-- ddl-end --
COMMENT ON TRIGGER map_tiles_update_sizes ON public.map_tiles_staging IS 'Ensures that the size is added to the tile_sizes table if it isn''t already there.';
-- ddl-end --

-- object: public.apply_staging | type: FUNCTION --
-- DROP FUNCTION IF EXISTS public.apply_staging() CASCADE;
CREATE FUNCTION public.apply_staging ()
	RETURNS void
	LANGUAGE plpgsql
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN TRANSACTION;
TRUNCATE key_items;
INSERT INTO key_items (region_id, type_id, description, last_update, color, icon_uri)
	SELECT region_id, type_id, description, last_update, color, icon_uri
	FROM staging_key_items;
TRUNCATE staging_key_items;
TRUNCATE map_tiles;
INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z, tile_uri, last_update)
	SELECT region_id, type_id, size, block_x, block_z, tile_uri, last_update
	FROM staging_map_tiles;
TRUNCATE staging_map_tiles;
END TRANSACTION;
$$;
-- ddl-end --
ALTER FUNCTION public.apply_staging() OWNER TO postgres;
-- ddl-end --

-- object: map_tiles_type_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.map_tiles DROP CONSTRAINT IF EXISTS map_tiles_type_id_fk CASCADE;
ALTER TABLE public.map_tiles ADD CONSTRAINT map_tiles_type_id_fk FOREIGN KEY (type_id)
REFERENCES public.map_types (type_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: map_tiles_region_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.map_tiles DROP CONSTRAINT IF EXISTS map_tiles_region_id_fk CASCADE;
ALTER TABLE public.map_tiles ADD CONSTRAINT map_tiles_region_id_fk FOREIGN KEY (region_id)
REFERENCES public.regions (region_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: map_tiles_size_fk | type: CONSTRAINT --
-- ALTER TABLE public.map_tiles DROP CONSTRAINT IF EXISTS map_tiles_size_fk CASCADE;
ALTER TABLE public.map_tiles ADD CONSTRAINT map_tiles_size_fk FOREIGN KEY (size)
REFERENCES public.tile_sizes (size) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: locations_region_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.locations DROP CONSTRAINT IF EXISTS locations_region_id_fk CASCADE;
ALTER TABLE public.locations ADD CONSTRAINT locations_region_id_fk FOREIGN KEY (region_id)
REFERENCES public.regions (region_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: locations_category_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.locations DROP CONSTRAINT IF EXISTS locations_category_id_fk CASCADE;
ALTER TABLE public.locations ADD CONSTRAINT locations_category_id_fk FOREIGN KEY (category_id)
REFERENCES public.location_categories (category_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: key_items_region_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.key_items DROP CONSTRAINT IF EXISTS key_items_region_id_fk CASCADE;
ALTER TABLE public.key_items ADD CONSTRAINT key_items_region_id_fk FOREIGN KEY (region_id)
REFERENCES public.regions (region_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: key_items_type_id_fk | type: CONSTRAINT --
-- ALTER TABLE public.key_items DROP CONSTRAINT IF EXISTS key_items_type_id_fk CASCADE;
ALTER TABLE public.key_items ADD CONSTRAINT key_items_type_id_fk FOREIGN KEY (type_id)
REFERENCES public.map_types (type_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


