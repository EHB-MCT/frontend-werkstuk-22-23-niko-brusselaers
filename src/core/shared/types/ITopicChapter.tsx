import { IModel } from "./IModel";

export interface ITopicChapter {
  title: string;
  description: string;
  image: string;
  model: IModel| undefined;
}
