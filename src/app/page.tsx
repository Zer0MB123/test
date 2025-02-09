export default async function HomePage() {
  const response = await fetch('http://localhost:3000/api/example', {
    method: 'POST',
  });
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <h1>Hi</h1>
      <h1>{data.valan}</h1>
    </div>
  );
}