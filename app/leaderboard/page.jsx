function fetchPost () {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  })
    .then(response => response.json())
}
export default async function LeaderboardPage () {
  const posts = await fetchPost()
  return (
    <>
      <h2>Clasificación - page</h2>
      <section style={{ padding: '0 1rem' }}>
        {posts.map(({ id, title, body }) => (
          <article key={id}>
            <h3 style={{ color: '#0099ff' }}>{title}</h3>
            <p>{body}</p>
          </article>))}
      </section>
    </>
  )
}
