import useSWR from "swr";

interface IData {}

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const res = fetch(url);
    const data = (await res).json();

    return data;
  });

  return { data, error };
};
