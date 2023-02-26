export interface MdxMeta {
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
