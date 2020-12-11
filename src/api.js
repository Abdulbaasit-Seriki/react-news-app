import { NEWS_API_KEY } from './config'

export const getTrendingNews = async () => {
    
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    const trendingNews = await response.json()
    return trendingNews

}

export const getSearchArticles = async searchInput => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchInput}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    )
      const newsArticles = await response.json()
      return newsArticles
}