import { AxiosResponse } from "axios";
import BaseService from "./BaseService";

interface SearchParams {
  q?: string;
  language?: string;
}

class ArticleService extends BaseService {
    async getArticles(searchParams?: SearchParams): Promise<AxiosResponse> {
        try {
            // The q parameter will be combined with the apiKey in the base service
            const response = await this.get('/everything', searchParams);
            return response;
        } catch (error) {
            console.log('NewsAPI Error:', error);
            throw error;
        }
    }
}

export default ArticleService;