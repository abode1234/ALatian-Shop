const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
  category: string;
  stock: number;
  specifications: Record<string, any>;
  avgRating: number;
  totalReviews: number;
}

export interface ProductFilter {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  page?: number;
  limit?: number;
}

class ApiClient {
  private baseUrl: string;
  private accessToken: string | null = null;

  constructor() {
    this.baseUrl = API_URL;
    // Load token from localStorage on client side
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
    }
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options?.headers as Record<string, string>,
    };

    // Add Authorization header if token exists
    if (this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
      credentials: 'include', // for cookies
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || `API Error: ${response.statusText}`);
    }

    return response.json();
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', token);
    }
  }

  clearTokens() {
    this.accessToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }

  // Products
  async getProducts(filters?: ProductFilter) {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.brand) params.append('brand', filters.brand);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.search) params.append('search', filters.search);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    const queryString = params.toString();
    return this.request<{ data: Product[]; total: number; page: number; totalPages: number }>(
      `/products${queryString ? `?${queryString}` : ''}`
    );
  }

  async getProduct(id: string) {
    return this.request<Product>(`/products/${id}`);
  }

  // Cart
  async getCart() {
    return this.request<any>('/cart');
  }

  async addToCart(productId: string, quantity: number = 1) {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  async updateCartItem(productId: string, quantity: number) {
    return this.request(`/cart/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
  }

  async removeFromCart(productId: string) {
    return this.request(`/cart/${productId}`, {
      method: 'DELETE',
    });
  }

  // Wishlist
  async getWishlist() {
    return this.request<any>('/wishlist');
  }

  async addToWishlist(productId: string) {
    return this.request('/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    });
  }

  async removeFromWishlist(productId: string) {
    return this.request(`/wishlist/${productId}`, {
      method: 'DELETE',
    });
  }

  // Auth
  async register(email: string, password: string, name?: string) {
    const response: any = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });

    if (response.accessToken) {
      this.setAccessToken(response.accessToken);
      if (typeof window !== 'undefined' && response.refreshToken) {
        localStorage.setItem('refreshToken', response.refreshToken);
      }
    }

    return response;
  }

  async login(email: string, password: string) {
    const response: any = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.accessToken) {
      this.setAccessToken(response.accessToken);
      if (typeof window !== 'undefined' && response.refreshToken) {
        localStorage.setItem('refreshToken', response.refreshToken);
      }
    }

    return response;
  }

  async logout() {
    const response = await this.request('/auth/logout', {
      method: 'POST',
    });
    this.clearTokens();
    return response;
  }

  async getProfile() {
    return this.request('/auth/me');
  }

  // Reviews
  async getProductReviews(productId: string) {
    return this.request<any>(`/reviews/${productId}`);
  }

  async createReview(productId: string, rating: number, comment?: string) {
    return this.request('/reviews', {
      method: 'POST',
      body: JSON.stringify({ productId, rating, comment }),
    });
  }

  // Orders
  async getOrders() {
    return this.request<any>('/orders');
  }

  async createOrder(shippingAddress: any) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify({ shippingAddress }),
    });
  }
}

export const api = new ApiClient();
