import { ArticlesService } from "./articles.service";
import { Article } from "./articles.service";
import { displayArticle } from "./displayArticle";

const articlesListContainer = document.getElementById(
  "articles-list-container"
)!;

const articlesApi = new ArticlesService();

export function displayArticlesList() {
  articlesApi.getArticles().then((articles: Article[]) => {
    articlesListContainer.innerHTML = articles
      .map((article: Article, index: number) => {
        return `
                    <li
                        id="article-${index + 1}"
                        title=${article.title}
                        class="border-2 border-solid border-blue-400 drop-shadow-2xl shadow-lg rounded-lg p-3 cursor-pointer"
                    >
                        Article ${index + 1}
                    </li>
                `;
      })
      .join("");

    if (articles.length) {
      displayArticle(articles[0]);
    }
  });
}
