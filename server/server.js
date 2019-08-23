require('isomorphic-fetch');
const { createApolloFetch } = require('apollo-fetch');

const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const axios = require('axios');
const gql = require('graphql-tag');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const schedule = require('node-schedule');
dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;
const testDailyTasks = require('./testDailyTasks');

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  require('./routes')(router);
  server.use(router.routes());
  server.use(router.allowedMethods());
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products', 'write_products', 'read_analytics', 'read_orders',],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set("shopOrigin", shop, { httpOnly: false });
        ctx.redirect('/');
      },
    }),
  );

  server.use(graphQLProxy({ version: ApiVersion.April19 }));
  server.use(verifyRequest());
    /*server.use(async (ctx) => {
        console.log("GET SHOP ID");
        const shop = ctx.cookies.get("shopOrigin");
        const url = "https://" + shop + "/api/2019-07/graphql";
        const query = `
                      query getShopID {
                              shop{
                                  id
                              }
                      }
                  `;
        console.log(url);

        const fetch = createApolloFetch({
            uri: url,
        });

        fetch.use(({ request, options }, next) => {
            options.headers = {
                'X-Shopify-Access-Token': ctx.session.accessToken,

            };
            next();
        });

        fetch({
            query: query,
        }).then(res => {
            console.log(res.data);
        });*/

      /*fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;',
              'X-Shopify-Access-Token': ctx.session.accessToken
          },
          body: JSON.stringify(query),
      })
          .then(r => {console.log(r);
          })
          .then(data => console.log('data returned:', data));*/


        /*try {
            axios({
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Shopify-Access-Token': ctx.session.accessToken
                },
                url: url,
                method: 'post',
                data: {
                    query: `
                    query getShopID {
                            shop{
                                id
                            }
                    }
                `
                },

            }).then((result) => {
                console.log(result.data)
            });
        } catch (error) {
            console.log(error);
        }

    });*/
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    console.log(ctx.session);

  });



      schedule.scheduleJob('0 * * * * *', async function(shopID) {
        //TODO: Call testDailyTasks functions here
        console.log("ONE MINUTE ELAPSED");
        //console.log("SHOPID: ", ctx.session.shop);
        let result = await testDailyTasks.testDailyTasks("gid://shopify/Shop/24714444845")
          console.log(result);
      });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
