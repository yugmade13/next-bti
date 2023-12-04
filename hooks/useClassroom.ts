import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useClassroom() {
  const { data, error, isLoading, mutate } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom`, fetcher);

  return {
    classrooms: data || [],
    error,
    isLoading,
    mutate
  }
}