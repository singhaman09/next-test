export default async function UserDetail({ params }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="text-gray-700 space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
      </div>
    </div>
  );
}
