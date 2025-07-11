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
      { next: { revalidate: 3600 } }

    );

    if (!res.ok) throw new Error("Failed to fetch countries");

    const data = await res.json();

    // if (!Array.isArray(data)) throw new Error("Invalid data structure");

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
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = await searchParams; // Await searchParams
  const search = params?.q ?? "";
  const countries = await getCountries(search);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Country Explorer</h1>

      <div className="max-w-xl mx-auto">
        <SearchForm defaultValue={search} />
      </div>

      {countries.length === 0 ? (
        <p className="text-center text-gray-500">
          No countries found for: <strong>{search}</strong>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => (
            <CountryCard key={c.cca2} country={c} />
          ))}
        </div>
      )}
    </div>
  );
}
