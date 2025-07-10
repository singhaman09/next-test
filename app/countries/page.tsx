import { CountryCard } from "@/components/CountryCard";
import SearchForm from "@/components/SearchForm";

type Country = {
  name: { common: string };
  region?: string;
  capital?: string[];
  flags?: { png: string; svg: string };
  cca2: string;
};

async function getCountries(search: string = ""): Promise<Country[]> {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,capital,flags,cca2",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data structure");
    }

    return data.filter((c: Country) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    );
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}


export default async function CountriesPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const search = searchParams?.q || "";
  const countries = await getCountries(search);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-blue-700">Country Explorer</h1>

      <SearchForm defaultValue={search} />

      {countries.length === 0 ? (
        <p className="text-gray-500">No countries found for: <strong>{search}</strong></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((c) => (
            <CountryCard key={c.cca2} country={c} />
          ))}
        </div>
      )}
    </div>
  );
}
