export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  tags: Array<Tag>;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  smallDescription: string;
  content: any;
  titleImage: any;
  tags: Array<Tag>;
}

export interface Tag {
  tagName: string;
  currentSlug: string;
}
