import { Turbo } from "../../engine/turbo.core.js"

const routes = {
  "/": "views/home.view.html",
  "/dashboard": "views/dashboard.view.html"
}

async function loadRoute(){
  const path = location.hash.slice(1) || "/"
  const view = routes[path] || "views/404.view.html"
  Turbo.render(view)
}

window.addEventListener("load", loadRoute)
window.addEventListener("hashchange", loadRoute)