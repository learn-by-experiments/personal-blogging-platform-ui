import { displayArticlesList } from "../articles/displayArticlesList";

const homeTab = document.getElementById("home-tab")!;
const addArticleTab = document.getElementById("add-article-tab")!;
const formContainer = document.getElementById("form-container")!;
const articleContainer = document.getElementById("article-container")!;
const articlesListOuterContainer = document.getElementById(
  "articles-list-outer-container"
)!;

function showForm() {
  formContainer.classList.remove("hidden");
  articleContainer.classList.add("hidden");
  articlesListOuterContainer.classList.add("hidden");
  homeTab.classList.remove("bg-white");
  addArticleTab.classList.add("bg-white");
}

function showArticle() {
  formContainer.classList.add("hidden");
  articleContainer.classList.remove("hidden");
  articlesListOuterContainer.classList.remove("hidden");
  homeTab.classList.add("bg-white");
  addArticleTab.classList.remove("bg-white");
  displayArticlesList();
}

homeTab.addEventListener("click", () => {
  showArticle();
});

addArticleTab.addEventListener("click", () => {
  showForm();
  console.log("Add article tab clicked!");
});
