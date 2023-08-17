import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useCharacterContext } from "../../context/CharacterContext";
import { useSearch } from "../../hooks/useFilter";
import { Row, Col } from 'react-bootstrap';
import Wrapper from "../../components/WrapperContainer/Index";
import Card from "../../components/Card/CardHome/Index";
import TitleSection from "../../components/TitleSection/Index";
import Pagination from "../../components/Pagination/Index";

const Index = () => {
  const navigate = useNavigate();
  const { data, info, loading, error, loadNextPage, loadPreviousPage } = useFetch("episode");
  const { setSelectedElement } = useCharacterContext();
  const { search, filteredData, setSearch, clearFilter } = useSearch(data);

  const handleDetail = (item) => {
    setSelectedElement(item);
    navigate(`/dashboard/episode/${item.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <TitleSection
        title="Episode List"
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
                img="https://www.geekmi.news/__export/1623700888270/sites/debate/img/2021/06/14/adult12.jpg_423682103.jpg"
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