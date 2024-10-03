import { Article } from "../services/articles.service";
import { marked } from "marked";

const articleHeading = document.getElementById("article-heading")!;
const articleBody = document.getElementById("article-body")!;

export async function displayArticle(article: Article) {
  articleHeading.innerText = article.title;
  articleBody.innerHTML = await marked.parse(article.content);
}
