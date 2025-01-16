import type { News } from '../types/index'

export const sortNewsList = (newsList: News[]) => {
  const months: { [key: string]: number } = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11
  }

  const sortedNewsList = newsList.toSorted((a, b) => {
    const [dayA, monthA, yearA] = a.date.split(' de ')
    const [dayB, monthB, yearB] = b.date.split(' de ')

    const dateA = new Date(+yearA, months[monthA], +dayA).getTime()
    const dateB = new Date(+yearB, months[monthB], +dayB).getTime()

    return dateB - dateA
  })

  return sortedNewsList
}
