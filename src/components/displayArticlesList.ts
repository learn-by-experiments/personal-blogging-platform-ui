import { Article } from "../services/articles.service";
import { displayArticle } from "./displayArticle";

const articlesListContainer = document.getElementById(
  "articles-list-container"
)!;

export function displayArticlesList(articles: Article[]) {
  let ran = Date.now();
  let lies = articles
    .map((article: Article) => {
      return `
                <li                      
                    class="article-${ran} border-2 border-solid border-blue-400 drop-shadow-2xl shadow-lg rounded-lg p-3 cursor-pointer hover:shadow-2xl hover:drop-shadow-2xl hover:shadow-blue-400"
                >
                    ${article.title}
                </li>
                `;
    })
    .join("");

  articlesListContainer.innerHTML = lies;

  const liElements = document.querySelectorAll(
    `.article-${ran}`
  ) as NodeListOf<HTMLLIElement>;

  liElements.forEach((element: HTMLLIElement, index: number) => {
    // Replacing element to ensure no multiple event listeners
    const newElement = element.cloneNode(true) as HTMLLIElement;
    element.parentNode?.replaceChild(newElement, element);

    newElement.addEventListener("click", () => {
      displayArticle(articles[index]);
    });
  });

  if (articles.length) {
    displayArticle(articles[0]);
  }
}
