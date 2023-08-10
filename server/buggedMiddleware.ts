import { trpcMiddleware } from "./trpc";

const buggedMiddleware = (props?: { silent?: boolean }) =>
  trpcMiddleware(async (opts) => {
    const { req } = opts.ctx;

    try {
      // check token in cookies
      const token = req.headers["authorization"];
      if (!token) throw new Error("expected token");

      return opts.next({
        ctx: { user: { email: "successfull@success.tree" } },
      });
    } catch (error) {
      if (props?.silent) {
        return opts.next({ ctx: { user: undefined } });
      }

      throw error;
    }
  });

export default buggedMiddleware;
