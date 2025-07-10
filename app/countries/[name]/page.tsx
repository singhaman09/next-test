export default async function CountryDetail({ params }: { params: { name: string } }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
  const data = await res.json();
  const country = data[0];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{country.name.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital?.[0]}</p>
    </div>
  );
}