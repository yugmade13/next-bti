import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useStudents() {
  const { data, error, isLoading, mutate } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students`, fetcher);

  return {
    students: data || [],
    error,
    isLoading,
    mutate
  }
}