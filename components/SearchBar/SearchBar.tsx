import { SearchBarContainer } from "./styles";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

interface Props {}

export default function SearchBar({}: Props) {
  const [stations, setStations] = useState<any>();
  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.tfl.gov.uk/Stoppoint/Search/${debouncedSearch}?modes=tube`
      ).then((res) => res.json());
      setStations(data?.matches);
    };
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <SearchBarContainer>
      <span>Search Bar</span>
      <div className="searchInput">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="dataResult">
        {stations?.map((station: any) => {
          return <p key={station.id}>{station.name}</p>;
        })}
      </div>
    </SearchBarContainer>
  );
}
