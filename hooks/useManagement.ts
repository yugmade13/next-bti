import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useManagement() {
  const { data, error, isLoading, mutate } = useSWR("/api/management", fetcher);

  return {
    classroomsOnStudents: data || [],
    error,
    isLoading,
    mutate
  }
}