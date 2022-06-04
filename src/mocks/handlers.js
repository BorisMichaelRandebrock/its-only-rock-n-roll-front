// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "mockTokencito" }));
  }),
];

// export const handlers = [
//   // Handles a POST /login request
//   rest.post('/login', null)
