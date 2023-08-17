import { useCharacterContext } from '../../context/CharacterContext';
import { Container, Row, Col } from 'react-bootstrap';
import List from "../../components/List/Index"
import HeaderPageDetail from "../../components/Header/PageDetail"
import WrapperDetail from "../../components/PageDatail/WrapperDetail/Index"
import DetailHeader from "../../components/PageDatail/DetailHeader/Index"
import ContentDescription from "../../components/PageDatail/ContentDescription"

const Index = () => {
  const { selectedElement } = useCharacterContext();
  let { name, id, episode, air_date, characters } = selectedElement;

  return (
    <div>
      <HeaderPageDetail
        title="Episode Details"
        link="/dashboard/location"
      />

      <WrapperDetail>
        <DetailHeader
          title={name}
          subtitle={id}
          image='https://www.geekmi.news/__export/1623700888270/sites/debate/img/2021/06/14/adult12.jpg_423682103.jpg'
        />
        <Container fluid className='mt-5'>
          <Row>
            <Col xs={12} md={4} lg={12}>
              <ContentDescription title="Información general">
                <List data={[
                  { key: 'episode', value: `${episode}` },
                  { key: 'air_date', value: `${air_date}` },
                  { key: 'characters', value: `${characters.length}` },
                ]}
                />
              </ContentDescription>
            </Col>
          </Row>
        </Container>
      </WrapperDetail>

    </div>
  );
}

export default Index