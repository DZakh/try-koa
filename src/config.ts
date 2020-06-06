type Config = {
  port: number;
};

const config: Config = {
  port: Number(process.env.PORT || 7654),
};

export { config };
