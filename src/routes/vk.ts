import Router from 'koa-router';
import fetch from 'node-fetch';

import { config } from '../config';

const router = new Router();

const vkRoutes = router.get('/vk', async ctx => {
  try {
    const resp = await fetch(
      `https://api.vk.com/method/photos.getAlbums?group_id=97450505&v=5.52&access_token=${
        config.vk_service_token
      }`
    );
    const json = await resp.json();

    console.log(json);

    ctx.body = {
      status: 'success',
      data: json,
    };
  } catch (err) {
    console.error(err);
  }
});

export { vkRoutes };
