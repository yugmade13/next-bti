import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useStudents() {
  const { data, error, isLoading, mutate } = useSWR("/api/students", fetcher);

  return {
    students: data || [],
    error,
    isLoading,
    mutate
  }
}