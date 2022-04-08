import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Badge,
} from "reactstrap";

const HomePage = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/all")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setArticles(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="content-container">
      <>
        <Row>
          <Col md="10">
            <h3 className="mt-5">
              BBC World Service articles with increased traffic{" "}
            </h3>
            <p className="mt-4">
              This application uses the{" "}
              <a
                href="https://docs.chartbeat.com/cbp/api/real-time-apis"
                className="text-dark text-decoration-none underline"
              >
                Chartbeat API
              </a>{" "}
              and{" "}
              <a
                href="https://www.microsoft.com/en-us/translator/business/translator-api/"
                className="text-dark text-decoration-none underline"
              >
                Microsoft Translator
              </a>{" "}
              to identify articles accessed by an increasing number of visitors.
              Titles are automatically translated where possible.
            </p>
            <p>
              Use the menu to view selections of articles popular in various{" "}
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-dark text-decoration-none underline"
              >
                BBC World Service
              </a>{" "}
              regions.
            </p>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    BBC NEWS |{" "}
                    {article.section.toUpperCase() === "PORTUGUESE"
                      ? "BRAZIL"
                      : article.section.toUpperCase()}
                  </Badge>
                  <a href={`https://${article.url}`} className="stretched-link">
                    <CardImg
                      alt={article.imageAlt}
                      src={article.imageHref}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article.translatedTitle} </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {article.lastPublished}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </>
    </Container>
  );
};

export default HomePage;
