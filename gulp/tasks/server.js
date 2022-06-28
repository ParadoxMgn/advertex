import { rootFolder } from "../config/path.js";

export const server = (done) => {
  app.plugins.browsersync.init({
    /* server: {
      baseDir: `${app.path.build.html}`
    }, */
    proxy: `${rootFolder}`,
    notify: false,
    port: 3000
  })
}