import { graphql } from "msw";

export const handlers = [
  graphql.query("GetIssues", (req, res, ctx) => {
    if (
      req.body.variables.includes('"startCursor":null,') &&
      !req.body.variables.includes('"endCursor":null')
    ) {
      return res(
        ctx.data({
          search: {
            pageInfo: {
              hasPreviousPage: true,
              hasNextPage: true,
              startCursor: "Y3Vyc29yOjE=",
              endCursor: "Y3Vyc29yOjI=",
            },
            edges: [
              {
                node: {
                  id: "I_kwDOAJy2Ks5DaMjU",
                  title: "Next title 1",
                  author: {
                    login: "RaduHero",
                    url: "https://github.com/RaduHero",
                  },
                },
              },
              {
                node: {
                  id: "MDU6SXNzdWU1OTk4MTg3MzM=",
                  title: "Next title 2",
                  author: {
                    login: "eps1lon",
                    url: "https://github.com/eps1lon",
                  },
                },
              },
            ],
          },
        })
      );
    }

    if (
      !req.body.variables.includes('"startCursor":null,') &&
      req.body.variables.includes('"endCursor":null')
    ) {
      return res(
        ctx.data({
          search: {
            pageInfo: {
              hasPreviousPage: true,
              hasNextPage: true,
              startCursor: "Y3Vyc29yOjE=",
              endCursor: "Y3Vyc29yOjI=",
            },
            edges: [
              {
                node: {
                  id: "I_kwDOAJy2Ks5DaMjU",
                  title: "Previous title 1",
                  author: {
                    login: "RaduHero",
                    url: "https://github.com/RaduHero",
                  },
                },
              },
              {
                node: {
                  id: "MDU6SXNzdWU1OTk4MTg3MzM=",
                  title: "Previous title 2",
                  author: {
                    login: "eps1lon",
                    url: "https://github.com/eps1lon",
                  },
                },
              },
            ],
          },
        })
      );
    }

    if (req.body.variables.includes("(in:title testing OR in:body testing)")) {
      return res(
        ctx.data({
          search: {
            pageInfo: {
              hasPreviousPage: true,
              hasNextPage: true,
              startCursor: "Y3Vyc29yOjE=",
              endCursor: "Y3Vyc29yOjI=",
            },
            edges: [
              {
                node: {
                  id: "I_kwDOAJy2Ks5DaMjU",
                  title: "Testing title 1",
                  author: {
                    login: "RaduHero",
                    url: "https://github.com/RaduHero",
                  },
                },
              },
              {
                node: {
                  id: "MDU6SXNzdWU1OTk4MTg3MzM=",
                  title: "Testing title 2",
                  author: {
                    login: "eps1lon",
                    url: "https://github.com/eps1lon",
                  },
                },
              },
            ],
          },
        })
      );
    }

    return res(
      ctx.data({
        search: {
          pageInfo: {
            hasPreviousPage: true,
            hasNextPage: true,
            startCursor: "Y3Vyc29yOjE=",
            endCursor: "Y3Vyc29yOjI=",
          },
          edges: [
            {
              node: {
                id: "I_kwDOAJy2Ks5DaMjU",
                title:
                  "React app works as intended in development mode, but in production mode has another behaviour. ",
                author: {
                  login: "RaduHero",
                  url: "https://github.com/RaduHero",
                },
              },
            },
            {
              node: {
                id: "MDU6SXNzdWU1OTk4MTg3MzM=",
                title: "Bug: ReactArt-test fails with new node version",
                author: {
                  login: "eps1lon",
                  url: "https://github.com/eps1lon",
                },
              },
            },
          ],
        },
      })
    );
  }),
];
