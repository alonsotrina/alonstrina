import { useCharacterContext } from '../../context/CharacterContext';
import { Container, Row, Col } from 'react-bootstrap';
import { globalStyles } from "../../style/globalStyles";
import List from "../../components/List/Index"
import HeaderPageDetail from "../../components/Header/PageDetail"
import WrapperDetail from "../../components/PageDatail/WrapperDetail/Index"
import DetailHeader from "../../components/PageDatail/DetailHeader/Index"
import ContentDescription from "../../components/PageDatail/ContentDescription"

const Index = () => {
  const { selectedElement } = useCharacterContext();
  let { name, id, dimension, type, residents } = selectedElement;

  return (
    <div>
      <HeaderPageDetail
        title="Location Details"
        link="/dashboard/location"
        theme={{ 
          bgColor: globalStyles.colors.info
         }}
      />

      <WrapperDetail>
        <DetailHeader
          title={name}
          subtitle={id}
          image='https://forums.opera.com/assets/uploads/profile/395252-profileavatar-1645373095479.jpeg'
        />
        <Container fluid className='mt-5'>
          <Row>
            <Col xs={12} md={4} lg={12}>
              <ContentDescription title="Información general">
                <List data={[
                  { key: 'dimension', value: `${dimension}` },
                  { key: 'type', value: `${type}` },
                  { key: 'residentes', value: `${residents.length}` },
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