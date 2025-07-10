import Image from "next/image";
import Link from "next/link";

export function CountryCard({ country }: any) {
  return (
    <Link href={`/countries/${country.name.common}`}>
      <div className="p-4 border rounded shadow hover:bg-gray-50 h-48 flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{country.name.common}</h2>
        <Image
          src={country.flags?.png}
          alt={country.name.common}
          width={100}
          height={0}
          style={{ height: "auto", objectFit: "contain" }}
        />
        <div>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital?.[0]}</p>
        </div>
      </div>
    </Link>
  );
}