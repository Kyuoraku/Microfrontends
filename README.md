# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

## Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install` on the 'host' project, then `pnpm run serve` in both remote applications. This will build and serve both `host` and `remote`.

- HOST: [localhost:?](http://localhost:?/)
- REMOTE: [localhost:5001](http://localhost:5001/)
- REMOTE: [localhost:5002](http://localhost:5002/)

`CTRL + C` can only stop the host server.
