import type { News } from '../types/index'

export const sortNewsList = (newsList: News[]) => {
  const sortedNewsList = newsList.toSorted(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return sortedNewsList
}

export const formatNewsDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export const imageName = (url: string): string => {
  return url.split('/').pop() ?? ''
}
