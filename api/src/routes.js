import { Router } from "express";

import users from "./app/controllers/UsersController";
import books from "./app/controllers/BooksController";

const routes = new Router();

// Users
routes.get("/users/", users.index);
routes.get("/users/:email", users.show);
routes.post("/users", users.create);
routes.put("/users/:email", users.update);
routes.delete("/users/:email", users.destroy);

// Books
routes.get("/books/", books.index);
routes.get("/books/:isbn", books.show);
routes.post("/books", books.create);
routes.put("/books/:isbn", books.update);
routes.delete("/books/:isbn", books.destroy);

export default routes;
