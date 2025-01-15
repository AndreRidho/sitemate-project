import { useQuery } from '@tanstack/react-query';
import ArticleService from '@/services/ArticleService';

const articleService = new ArticleService();
const GET_ARTICLES = 'GET_ARTICLES';

export const useGetArticles = (searchQuery?: string) => {
    return useQuery({
        queryKey: [GET_ARTICLES, searchQuery],
        queryFn: () => articleService.getArticles({ q: searchQuery, language: "en" }),
        enabled: true,
    });
};