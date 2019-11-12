# ChunkAtlas-Viewer
The ChunkAtlas Viewer is a Node.js Express web server designed to be used with Minecraft world maps generated with [ChunkAtlas](https://github.com/centuryglass/ChunkAtlas). This server provides an HTML5 viewer for ChunkAtlas maps, and a REST API used to securely access or update map data.

#### The ChunkAtlas Viewer Interface
The primary purpose of the web server is to provide a convenient way to view ChunkAtlas map data. The viewer provides controls for examining all map types and points of interest exported by the main ChunkAtlas application. The viewer uses responsive design principles to dynamically adapt to a broad range of devices. To try out a test version of this viewer with some pre-generated map data, go to the ChunkAtlas [Github Pages site](https://centuryglass.github.io/ChunkAtlas).

### Map Update Management
When properly configured, ChunkAtlas will send all generated map data to the ChunkAtlas Viewer server. Since each ChunkAtlas web server instance is tied to a single ChunkAtlas source, 2048-bit RSA key pairs are used to authenticate map data updates. Map information is then stored by the web server in an associated PostgreSQL database.

### Database Setup
Database structure can be initialized from [MapDB.sql](./database/MapDB.sql), or by using [pgModeler](https://pgmodeler.io/) to directly export the [MapDB database design](database/MapDB.dbm). In order function correctly, database information, RSA key file paths, and log file paths should be set using environment variables before lauching the server. See the [example server start script](./startServer.sh) for the full list of required environment variables.

---

### TODO:
 - Add support for uploading new points of interest to the server.
 - Add complete server setup documentation.
 - Add configurable limits to update size and frequency.
 - Add a password-protected admin page for managing map data.
