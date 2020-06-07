require('dotenv').config();

type Config = {
  port: number;
  vk_service_token: string;
};

const config: Config = {
  port: Number(process.env.PORT || 7654),
  vk_service_token: process.env.VK_SERVICE_TOKEN || '',
};

export { config };
