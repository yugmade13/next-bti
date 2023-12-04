import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useClassroom() {
  const { data, error, isLoading, mutate } = useSWR("/api/classroom", fetcher);

  return {
    classrooms: data || [],
    error,
    isLoading,
    mutate
  }
}