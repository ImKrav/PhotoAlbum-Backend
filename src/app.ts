import { env } from "./infrastructure/config/env";

// --- Adapters (Infrastructure — Output Ports) ---
import { JsonPlaceholderAlbumAdapter } from "./infrastructure/adapters/out/JsonPlaceholderAlbumAdapter";
import { JsonPlaceholderPhotoAdapter } from "./infrastructure/adapters/out/JsonPlaceholderPhotoAdapter";

// --- Use Cases (Application) ---
import { GetAlbumsUseCase } from "./application/use-cases/GetAlbumsUseCase";
import { GetPhotosByAlbumUseCase } from "./application/use-cases/GetPhotosByAlbumUseCase";

// --- Controllers (Infrastructure — Input Adapters) ---
import { AlbumController } from "./infrastructure/http/controllers/AlbumController";
import { PhotoController } from "./infrastructure/http/controllers/PhotoController";

// --- Routes & Server (Infrastructure) ---
import { createAlbumRoutes } from "./infrastructure/http/routes/albumRoutes";
import { createPhotoRoutes } from "./infrastructure/http/routes/photoRoutes";
import { createServer } from "./infrastructure/http/server";

// 1. Instantiate output adapters (implement domain output ports)
const albumRepository = new JsonPlaceholderAlbumAdapter();
const photoRepository = new JsonPlaceholderPhotoAdapter();

// 2. Instantiate use cases (inject output ports)
const getAlbumsUseCase = new GetAlbumsUseCase(albumRepository);
const getPhotosByAlbumUseCase = new GetPhotosByAlbumUseCase(photoRepository);

// 3. Instantiate controllers (inject use cases via input ports)
const albumController = new AlbumController(getAlbumsUseCase);
const photoController = new PhotoController(getPhotosByAlbumUseCase);

// 4. Create routes (inject controllers)
const albumRoutes = createAlbumRoutes(albumController);
const photoRoutes = createPhotoRoutes(photoController);

// 5. Create and start server
const app = createServer([albumRoutes, photoRoutes]);

app.listen(env.PORT, () => {
  console.log(`🚀 PhotoAlbum API lista en http://localhost:${env.PORT}`);
});
