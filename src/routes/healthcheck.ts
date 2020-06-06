import Router from 'koa-router';
const router = new Router();

const healthcheckRoutes = router.get('/ping', async ctx => {
  try {
    ctx.body = {
      status: 'success',
      data: 'pong',
    };
  } catch (err) {
    console.error(err);
  }
});

export { healthcheckRoutes };
