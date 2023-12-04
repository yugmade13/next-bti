import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useManagement() {
  const { data, error, isLoading, mutate } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/management`, fetcher);

  return {
    classroomsOnStudents: data || [],
    error,
    isLoading,
    mutate
  }
}