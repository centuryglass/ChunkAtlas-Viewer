# ChunkAtlas
The ChunkAtlas express branch hosts a Node.js Express web server designed to be used with the main ChunkAtlas application. This server provides an HTML5 viewer for ChunkAtlas maps, and a REST API used to securely access or update map data.

Although basic functionality has been implemented, a few critical features are not yet ready. See the TODO section at the bottom of this page for more information.

### The ChunkAtlas Viewer
The primary purpose of the web server is to provide a convenient way to view ChunkAtlas map data. The viewer provides controls for examining all map types and points of interest exported by the main ChunkAtlas application. The viewer uses responsive design principles to dynamically adapt to a broad range of devices. To try out a test version of this viewer with some pre-generated map data, go to this project's [Github Pages site](https://centuryglass.github.io/ChunkAtlas).

### Map Update Management
When properly configured, new ChunkAtlas map data will be automatically forwarded to the express server, and publically hosted at the server's root address. Since each ChunkAtlas web server instance is tied to a single ChunkAtlas source, 2048-bit RSA key pairs are used to authenticate map data updates. Map information is then stored by the web server in an associated PostgreSQL database.

### Database Setup
Database structure can be initialized in [pgModeler](https://pgmodeler.io/) from the [MapDB database design file](database/MapDB.dbm). In order to allow the express server to connect to the database, the PGUSER, PGHOST, PGPASSWORD, PGDATABASE, and PGPORT environment variable should be set with the database's connection information before starting the server with `node src/server.js`.

---

### TODO:
 - Finish implementing Node.js support for RSA signed and encrypted AES keys, and use encryption for all server update messages.
 - Add support for uploading new points of interest to the server.
 - Remove any remaining default data from the viewer, and request all map data from the server.
 - Add configurable limits to update size and frequency.
 - Add a password-protected admin page for managing map data.
