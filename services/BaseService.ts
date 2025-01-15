import axios, { AxiosInstance, AxiosResponse } from "axios";

class BaseService {
  protected api: AxiosInstance;
  protected apiKey: string;

  constructor() {
    const baseURL = process.env.EXPO_PUBLIC_API_URL;
    this.apiKey = process.env.EXPO_PUBLIC_NEWS_API_KEY || '';

    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  protected get<T>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<AxiosResponse<T>> {
    const paramsWithKey = {
      ...params,
      apiKey: this.apiKey
    };

    // Log the complete request details
    console.log('Request Details:', {
      url: this.api.defaults.baseURL + endpoint,
      method: 'GET',
      params: paramsWithKey,
      headers: this.api.defaults.headers,
      fullUrl: this.api.defaults.baseURL + endpoint + '?' + new URLSearchParams(paramsWithKey).toString()
    });

    return this.api.get<T>(endpoint, { 
      params: paramsWithKey 
    }).catch((error) => {
      if (error.response) {
        console.log('Server error response:', error.response.data);
        throw error.response.data;
      } else if (error.request) {
        throw {
          status: "error",
          code: "networkError",
          message: "Network error occurred"
        };
      } else {
        throw {
          status: "error",
          code: "requestError",
          message: error.message
        };
      }
    });
  }
}

export default BaseService;