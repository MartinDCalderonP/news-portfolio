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

export const photographerUrl = (name: string): string => {
  const instagram = 'https://www.instagram.com/'

  const urls: Record<string, string> = {
    'Daniela Hernández': instagram + 'danihc_ph',
    'Pamela Pezo Malpica': instagram + 'pams.pm',
    'Valentina Gomez': instagram + 'fotosmariaval',
    'Clara Pérez Colman': instagram + 'p.cclara',
    'Prensa Cele Fierro': instagram + 'cele_fierro',
    'Camila Alonso Suárez / Archivo ANCCOM': instagram + 'camialonso.s',
    'Gentileza Martín Zabala': instagram + 'zabamar',
    'ARCHIVO TELAM': instagram + 'agencia_telam'
  }

  return urls[name] ?? ''
}
