import { useQuery } from "@tanstack/react-query";

function fetchHoroscope(sign: string, day: string) {
  return async (): Promise<any> => {
    const response = await fetch(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
      { method: "POST" }
    );
    const data = await response.json();
    return data;
  };
}

export function useHoroscope(sign: string, day: string) {
  const { data, isError, isLoading } = useQuery(
    ["horoscope"],
    fetchHoroscope(sign, day)
  );

  return { data, isError, isLoading };
}
