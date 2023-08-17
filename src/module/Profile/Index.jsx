import useFetch from "../../hooks/useFetch";

const Index = () => {
  const { data } = useFetch('https://rickandmortyapi.com/api/character');
  return (
    <div>
      <h1>Character List</h1> 
     <ul>
      {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Index