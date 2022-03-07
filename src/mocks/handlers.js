import { graphql } from "msw";

export const handlers = [
  graphql.query("GetIssues", (req, res, ctx) => {
    console.log("inside de handler!");
    return res(
      ctx.data({
        search: {
          pageInfo: {
            hasPreviousPage: false,
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
