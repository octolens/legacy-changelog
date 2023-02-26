export interface MdxMeta {
  mainPullRequest: string;
  version: string;
  headerVideo?: string;
  publishedAt: string;
  title: string;
  headerImage: string;
  authors: {
    name: string;
    description: string;
    avatarUrl: string;
  }[];
  slug: string;
}
