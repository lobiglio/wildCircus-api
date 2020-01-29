import { EventController } from './controller/event.controller';
import { BookingController } from './controller/booking.controller';
import { BookController } from './controller/book.controller';
import { ArtistController } from './controller/artist.controller';
import 'reflect-metadata';

import express from 'express';
import loaders from './loaders';

// import { UserController } from './controller/user.controller';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  ArtistController(app);
  BookController(app);
  BookingController(app);
  EventController(app);

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server is running'));
}

startServer();
