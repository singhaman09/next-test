import Link from "next/link";

export function CountryCard({ country }: any) {
  return (
    <Link href={`/countries/${country.name.common}`}>
      <div className="p-4 border rounded shadow hover:bg-gray-50">
        <h2>{country.name.common}</h2>
        <img src={country.flags?.png} alt={country.name.common} className="w-20 h-12" />
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital?.[0]}</p>
      </div>
    </Link>
  );
}
