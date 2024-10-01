import axios, { AxiosError, AxiosInstance } from "axios";

export interface Article {
  id?: number;
  title: string;
  content: string;
}

export interface ArticlesApiError {
  error: string;
  message: any;
}

export class ArticlesService {
  private articles: Article[] = [
    { id: 1, title: "Article 1", content: "Content of article 1" },
    { id: 2, title: "Article 2", content: "Content of article 2" },
    { id: 3, title: "Article 3", content: "Content of article 3" },
  ];

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
  });

  async getArticles(): Promise<Article[]> {
    const response = await this.axiosInstance.get<Article[]>("/articles");
    console.log(response.data);
    return response.data;
  }

  public getArticle(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id);
  }

  public async addArticle(article: Article): Promise<Article> {
    try {
      const response = await this.axiosInstance.post<Article>(
        "/articles",
        article
      );
      console.log(response);
      return response.data;
    } catch (error) {
      const e = error as AxiosError<{ error: string; message: any }>;
      console.error(e);
      throw {
        error: e.message,
        message: e.response?.data.message,
      } as ArticlesApiError;
    }
  }

  public updateArticle(id: number, article: Article): void {
    const index = this.articles.findIndex((article) => article.id === id);
    if (index !== -1) {
      this.articles[index] = article;
    }
  }

  public deleteArticle(id: number): void {
    this.articles = this.articles.filter((article) => article.id !== id);
  }
}
