import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useCharacterContext } from "../../context/CharacterContext";
import { useSearch } from "../../hooks/useFilter";
import { Row, Col } from 'react-bootstrap';
import Wrapper from "../../components/WrapperContainer/Index";
import Card from "../../components/Card/CardHome/Index";
import TitleSection from "../../components/TitleSection/Index";
import Pagination from "../../components/Pagination/Index";
import Placeholder from 'react-bootstrap/Placeholder';


const Index = () => {
  const navigate = useNavigate();
  const { data, info, loading, error, loadNextPage, loadPreviousPage } = useFetch("location");
  const { setSelectedElement } = useCharacterContext();
  const { search, filteredData, setSearch, clearFilter } = useSearch(data);

  const handleDetail = (item) => {
    setSelectedElement(item);
    navigate(`/dashboard/location/${item.id}`);
  };

  if (loading) {
    return (

      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <TitleSection
        title="Location List"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        clearFilter={clearFilter}
      />

      <Row>
        {filteredData.length === 0 ? (
          <Col xs={12} className="text-center">
            No se encontraron resultados.
          </Col>
        ) : (
          filteredData.map((item, index) => (
            <Col key={index} xs={12} md={4} xl={4} xxl={3}>
              {/* <Card item={item} onClick={handleDetail} /> */}
              <Card
                title={item.name}
                subtitle={item.type}
                img="https://forums.opera.com/assets/uploads/profile/395252-profileavatar-1645373095479.jpeg"
                onClick={() => handleDetail(item)}
              />
            </Col>
          ))
        )}
      </Row>

      {filteredData.length === 0 ?
        ''
        :
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={loadPreviousPage}
          onNext={loadNextPage}
        />
      }
    </Wrapper>
  )
}

export default Index