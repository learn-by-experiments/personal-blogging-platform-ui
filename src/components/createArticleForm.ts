import {
  Article,
  ArticlesService,
  ArticlesApiError,
} from "../services/articles.service";

const createArticleForm = document.getElementById("create-article-form")!;
const articlesApi = new ArticlesService();

createArticleForm.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  const titleInput = document.getElementById("title-input") as HTMLInputElement;

  const contentInput = document.getElementById(
    "content-input"
  ) as HTMLInputElement;

  const article = {
    title: titleInput.value,
    content: contentInput.value,
  };

  articlesApi
    .addArticle(article)
    .then((article: Article) => {
      alert(`Article created Successfully!\n
                Title:${article.title}\n
                Content:${article.content}`);
      titleInput.value = "";
      contentInput.value = "";
    })
    .catch((error: ArticlesApiError) => {
      alert(`Error: ${error.error}\nMessage: ${error.message}`);
    });
});
