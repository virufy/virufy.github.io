import blogPosts from '../en/blogPosts';

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  date?: string;
  author?: string;
}
export default blogPosts;
