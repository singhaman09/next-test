import Image from "next/image";

export default async function CountryDetail({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params; // Await params
  const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Country not found");

  const data = await res.json();
  const country = data[0];

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{country.name.common}</h2>

        <Image
          src={country.flags?.png || ""}
          alt={`Flag of ${country.name.common}`}
          className=" rounded border shadow"
          width={70}
          height={70}
        />

        <div className="text-gray-700 text-lg space-y-2">
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}