interface IConfig {
  port: number;
}

const config: IConfig = {
  port: Number(process.env.PORT || 7654)
};

export { config };
