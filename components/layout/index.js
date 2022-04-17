import { Layout } from 'antd';
import { Row, Col, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <>
      <Row>
        <Col xs={24}>Header</Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row>
        <Col xs={2}>
        </Col>
        <Col xs={20}>
          <main>{children}</main>
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    </>
  );
}
