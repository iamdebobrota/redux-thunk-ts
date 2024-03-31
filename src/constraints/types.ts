export interface IArticle {
  id: number;
  title: string;
  body: string;
}

export type ArticleState = {
  articles: IArticle[];
};

export type ArticleAction = {
  type: string;
  payload: IArticle;
};

export interface Contest {
  id: number;
  name: string;
}
export interface ContestState {
  loading: boolean;
  error: string | null;
  contests: Contest[];
}
export interface RootState {
  contest: ContestState;
}

export type DispatchType = (args: ArticleAction) => ArticleAction;
