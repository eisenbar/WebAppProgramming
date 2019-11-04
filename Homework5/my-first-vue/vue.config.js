module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath:
    process.env.NODE_ENV === "production"
      ? "/~eisenbar/public_html/WebApp/WebAppProgramming/homework5/myvuefirebase/"
      : "/"
}