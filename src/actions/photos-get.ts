'use server';

export type Photos = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};
export default async function photosGet() {
  const response = await fetch(
    'https://dogsapi.origamid.dev/json/api/photo/?_total=9&_page=1&_user=0'
  );

  const data = (await response.json()) as Photos[];

  return data;
}
