## Reproduction

Go to `server/index.ts` and hover over `opts.ctx.user`. It'll show its typed

```ts
(property) user: {
    email: string;
}
```

But if you inspect buggedMiddleware, you'll see the `user` isn't gauranteed.
So it should've been typed `user | undefined`, not as above.
