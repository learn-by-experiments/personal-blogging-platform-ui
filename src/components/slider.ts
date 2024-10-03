import { displayArticlesList } from "./displayArticlesList";
import { getGridCountBasedOnWidth } from "../utils";
import { articlesService } from "../services";

const next = document.getElementById("next");
const prev = document.getElementById("prev");

export class Slider {
  private arr: Array<any>;
  constructor(arr: Array<any>) {
    this.arr = arr;
  }
  rotateArrayByK(k: number) {
    const n = this.arr.length;
    k = (k + n) % n;
    this.arr = [...this.arr.slice(k), ...this.arr.slice(0, k)];
    return this.arr;
  }

  getTopKItems(k: number) {
    return this.arr.slice(0, k);
  }
}

// Function to update the articles list
const updateArticlesList = (slider: Slider) => {
  const gridCount = getGridCountBasedOnWidth();
  displayArticlesList(slider.getTopKItems(gridCount));
};

export const initializeSlider = async () => {
  let articles = await articlesService.getArticles();
  const slider = new Slider(articles);
  updateArticlesList(slider);
  next?.addEventListener("click", () => {
    slider.rotateArrayByK(1);
    updateArticlesList(slider);
  });

  prev?.addEventListener("click", () => {
    slider.rotateArrayByK(-1);
    updateArticlesList(slider);
  });

  window.addEventListener("resize", () => updateArticlesList(slider));
};

initializeSlider();
