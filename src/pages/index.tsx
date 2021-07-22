import { useEffect } from "react"


export default function Home(props) {
  console.log(props.episodes);

  return (
    <div>
    <h1>index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8 // A cada 8 horas que a pessoa acessar essa página, será gerada uma nova versão/nova chamada da api
  }
}
