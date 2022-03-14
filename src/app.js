import React from 'react';
import {SliderContainer} from "./containers/slider";
import {OnboardBannerContainer} from "./containers/onboardbanner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function App() {
  return (
      <>
          <Row>
              <Col>
                  <OnboardBannerContainer />
                  <SliderContainer />
              </Col>
              <Col>
                  <p>Hello</p>
              </Col>
          </Row>
      </>
  );
}

