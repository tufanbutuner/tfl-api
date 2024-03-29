import {
  SearchBarContainer,
  SearchInput,
  SearchResults,
  Station,
} from "./styles";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

interface Props {
  selected?: any;
  setSelected?: any;
}

export default function SearchBar({ selected, setSelected }: Props) {
  const [stations, setStations] = useState<any[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  let debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) return;
    fetch(
      `https://api.tfl.gov.uk/Stoppoint/Search/${debouncedSearch}?modes=tube`
    )
      .then((res) => res.json())
      .then((data) => {
        setStations(data.matches);
      });
  }, [debouncedSearch]);

  return (
    <SearchBarContainer>
      <SearchInput
        type="search"
        placeholder="Search for a station..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {stations.length !== 0 && (
        <SearchResults>
          {stations?.map((station: any) => {
            return (
              <Station
                id="station-name"
                key={station.id}
                onClick={async () => {
                  setSelected({ id: station.id, stationName: station.name });
                  await setStations([]);
                }}
              >
                {station.name}
              </Station>
            );
          })}
        </SearchResults>
      )}
    </SearchBarContainer>
  );
}
