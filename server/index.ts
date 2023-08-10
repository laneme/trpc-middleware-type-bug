import buggedMiddleware from "./buggedMiddleware";
import { baseProcedure, trpcRouter } from "./trpc";

export const appRouter = trpcRouter({
  bugged: baseProcedure
    .use(buggedMiddleware({ silent: true }))
    .query((opts) => {
      /** opts.ctx.user is NOT gauranteed by the middleware
       * should be typed user|undefined
       */
      return opts.ctx.user;
    }),
});
