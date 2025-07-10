export default async function CountryDetail({ params }: { params: { name: string } }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Country not found");

  const data = await res.json();
  const country = data[0];

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{country.name.common}</h2>

        <img
          src={country.flags?.png || ""}
          alt={`Flag of ${country.name.common}`}
          className="w-40 h-auto rounded border shadow"
        />

        <div className="text-gray-700 text-lg space-y-2">
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
