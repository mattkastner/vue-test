import Authors from "./components/Authors/index.vue";
import Board from "./components/Board/index.vue";
import Page from "./components/Page/index.vue"

export const routes = [
  { path: "", component: Authors },
  { path: "/author", component: Authors },
  { path: "/author/:id", component: Board },
  { path: "/author/post/:id", component: Page }
];
