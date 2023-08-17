import { useCharacterContext } from '../../context/CharacterContext';
import { Container, Row, Col } from 'react-bootstrap';
import List from "../../components/List/Index"
import HeaderPageDetail from "../../components/Header/PageDetail"
import WrapperDetail from "../../components/PageDatail/WrapperDetail/Index"
import DetailHeader from "../../components/PageDatail/DetailHeader/Index"
import ContentDescription from "../../components/PageDatail/ContentDescription"

const Index = () => {
  const { selectedElement } = useCharacterContext();
  let {name, id, image, status, species, type, gender, location, origin, episode} = selectedElement;

  return (
    <>
      <HeaderPageDetail
        title="Character Details"
        link="/dashboard/character"
      />

      <WrapperDetail>
        <DetailHeader
          title={name}
          subtitle={id}
          image={image}
        />
        <Container fluid className='mt-5'>
          <Row>
            <Col xs={12} md={4} lg={12}>
              <ContentDescription title="Información general">
                <List data={[
                  { key: 'Status', value: `${status}` },
                  { key: 'Species', value: `${species}` },
                  { key: 'Type', value: `${type}` },
                  { key: 'gender', value: `${gender}` },
                  { key: 'location', value: `${location.name}` },
                  { key: 'origin', value: `${origin.name}` },
                  { key: 'episode', value: `${episode.length}` },
                ]}
                />
              </ContentDescription>
            </Col>
          </Row>
        </Container>
      </WrapperDetail>
    </>
  );
}

export default Index