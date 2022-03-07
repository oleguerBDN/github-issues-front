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
  graphql.query("GetIssue", (req, res, ctx) => {
    return res(
      ctx.data({
        node: {
          title: "Issue for testing",
          state: "OPEN",
          bodyHTML: "<p>html body for testing</p>",
          author: {
            login: "alansouzati",
            url: "https://github.com/alansouzati",
          },
        },
      })
    );
  }),

  graphql.query("GetComments", (req, res, ctx) => {
    if (
      !req.body.variables.includes('"startCursor":null,') &&
      req.body.variables.includes('"endCursor":null')
    ) {
      return res(
        ctx.data({
          node: {
            comments: {
              pageInfo: {
                endCursor: "Y3Vyc29yOnYyOpHOFMGorQ==",
                startCursor: "Y3Vyc29yOnYyOpHOFJdh4w==",
                hasNextPage: true,
                hasPreviousPage: true,
              },
              edges: [
                {
                  node: {
                    id: "MDEyOklzc3VlQ29tbWVudDM0NTQ2NTMxNQ==",
                    author: {
                      login: "gaearon",
                      url: "https://github.com/gaearon",
                    },
                    bodyHTML: "<p>comment previous 1</p>",
                  },
                },
              ],
            },
          },
        })
      );
    }

    if (
      req.body.variables.includes('"startCursor":null,') &&
      !req.body.variables.includes('"endCursor":null')
    ) {
      return res(
        ctx.data({
          node: {
            comments: {
              pageInfo: {
                endCursor: "Y3Vyc29yOnYyOpHOFMGorQ==",
                startCursor: "Y3Vyc29yOnYyOpHOFJdh4w==",
                hasNextPage: true,
                hasPreviousPage: true,
              },
              edges: [
                {
                  node: {
                    id: "MDEyOklzc3VlQ29tbWVudDM0NTQ2NTMxNQ==",
                    author: {
                      login: "gaearon",
                      url: "https://github.com/gaearon",
                    },
                    bodyHTML: "<p>comment next 1</p>",
                  },
                },
              ],
            },
          },
        })
      );
    }

    return res(
      ctx.data({
        node: {
          comments: {
            pageInfo: {
              endCursor: "Y3Vyc29yOnYyOpHOFMGorQ==",
              startCursor: "Y3Vyc29yOnYyOpHOFJdh4w==",
              hasNextPage: true,
              hasPreviousPage: true,
            },
            edges: [
              {
                node: {
                  id: "MDEyOklzc3VlQ29tbWVudDM0NTQ2NTMxNQ==",
                  author: {
                    login: "gaearon",
                    url: "https://github.com/gaearon",
                  },
                  bodyHTML: "<p>comment 1</p>",
                },
              },
              {
                node: {
                  id: "MDEyOklzc3VlQ29tbWVudDM0NTc1MjY5NA==",
                  author: {
                    login: "505aaron",
                    url: "https://github.com/505aaron",
                  },
                  bodyHTML: "<p>comment 2</p>",
                },
              },
              {
                node: {
                  id: "MDEyOklzc3VlQ29tbWVudDM0NTg4NjA3Mg==",
                  author: {
                    login: "alansouzati",
                    url: "https://github.com/alansouzati",
                  },
                  bodyHTML: "<p>comment 3</p>",
                },
              },
              {
                node: {
                  id: "MDEyOklzc3VlQ29tbWVudDM0NjY0MzU4Nw==",
                  author: {
                    login: "esturcke",
                    url: "https://github.com/esturcke",
                  },
                  bodyHTML: "<p>comment 4</p>",
                },
              },
              {
                node: {
                  id: "MDEyOklzc3VlQ29tbWVudDM0ODIzNTk0OQ==",
                  author: {
                    login: "505aaron",
                    url: "https://github.com/505aaron",
                  },
                  bodyHTML: "<p>comment 5</p>",
                },
              },
            ],
          },
        },
      })
    );
  }),
];
