const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_all.scss";`,
      },
    },
  },
    devServer: {
    allowedHosts: "all",
  },
});
