module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath:
    process.env.NODE_ENV === "production"
      ? "/~eisenbar/WebApp/WebAppProgramming/Homework5/my-first-vue/"
      : "/"
}