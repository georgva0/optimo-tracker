import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { PieChart } from "react-minimal-pie-chart";

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
  //const [articles, setArticles] = useState();
  const [afaanRatio, setAfaanRatio] = useState([]);
  const [amharicRatio, setAmharicRatio] = useState([]);
  const [afriqueRatio, setAfriqueRatio] = useState([]);
  const [hausaRatio, setHausaRatio] = useState([]);
  const [igboRatio, setIgboRatio] = useState([]);
  const [gahuzaRatio, setGahuzaRatio] = useState([]);
  const [pidginRatio, setPidginRatio] = useState([]);
  const [somaliRatio, setSomaliRatio] = useState([]);
  const [swahiliRatio, setSwahiliRatio] = useState([]);
  const [tigrinyaRatio, setTigrinyaRatio] = useState([]);
  const [yorubaRatio, setYorubaRatio] = useState([]);
  const [kyrgyzRatio, setKyrgyzRatio] = useState([]);
  const [uzbekRatio, setUzbekRatio] = useState([]);
  const [burmeseRatio, setBurmeseRatio] = useState([]);
  const [zhongwenRatio, setZhongwenRatio] = useState([]);
  const [indonesiaRatio, setIndonesiaRatio] = useState([]);
  const [japaneseRatio, setJapaneseRatio] = useState([]);
  const [koreanRatio, setKoreanRatio] = useState([]);
  const [thaiRatio, setThaiRatio] = useState([]);
  const [vietnameseRatio, setVietnameseRatio] = useState([]);
  const [bengaliRatio, setBengaliRatio] = useState([]);
  const [gujaratiRatio, setGujaratiRatio] = useState([]);
  const [hindiRatio, setHindiRatio] = useState([]);
  const [marathiRatio, setMarathiRatio] = useState([]);
  const [nepaliRatio, setNepaliRatio] = useState([]);
  const [pashtoRatio, setPashtoRatio] = useState([]);
  const [punjabiRatio, setPunjabiRatio] = useState([]);
  const [sinhalaRatio, setSinhalaRatio] = useState([]);
  const [tamilRatio, setTamilRatio] = useState([]);
  const [teluguRatio, setTeluguRatio] = useState([]);
  const [urduRatio, setUrduRatio] = useState([]);
  const [azeriRatio, setAzeriRatio] = useState([]);
  const [russianRatio, setRussianRatio] = useState([]);
  const [serbianRatio, setSerbianRatio] = useState([]);
  const [turkceRatio, setTurkceRatio] = useState([]);
  const [ukrainianRatio, setUkrainianRatio] = useState([]);
  const [portugueseRatio, setPortugueseRatio] = useState([]);
  const [mundoRatio, setMundoRatio] = useState([]);
  const [arabicRatio, setArabicRatio] = useState([]);
  const [persianRatio, setPersianRatio] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1rl7RMNvgSgiF8z29WPfKJ8YO3l-JLbNk_C3s9FvW4Vo/values/OPTIMO_CPS!A1:B40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
      //`https://sheets.googleapis.com/v4/spreadsheets/1rl7RMNvgSgiF8z29WPfKJ8YO3l-JLbNk_C3s9FvW4Vo/values/OPTIMO_CPS!A1:B40?key=AIzaSyBv7Lm0OUj3hPTgcVoep2PyZBz6G2dTOrA`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          //setArticles(data);

          const cpsAfaanOromoo = 10 - data.values[0][1];
          setAfaanRatio([
            { title: "Optimo", value: data.values[0][1], color: "blue" },
            { title: "CPS", value: cpsAfaanOromoo, color: "red" },
          ]);

          const cpsAmharic = 10 - data.values[1][1];
          setAmharicRatio([
            { title: "Optimo", value: data.values[1][1], color: "blue" },
            { title: "CPS", value: cpsAmharic, color: "red" },
          ]);

          const cpsAfrique = 10 - data.values[2][1];
          setAfriqueRatio([
            { title: "Optimo", value: data.values[2][1], color: "blue" },
            { title: "CPS", value: cpsAfrique, color: "red" },
          ]);

          const cpsHausa = 10 - data.values[3][1];
          setHausaRatio([
            { title: "Optimo", value: data.values[3][1], color: "blue" },
            { title: "CPS", value: cpsHausa, color: "red" },
          ]);

          const cpsIgbo = 10 - data.values[4][1];
          setIgboRatio([
            { title: "Optimo", value: data.values[4][1], color: "blue" },
            { title: "CPS", value: cpsIgbo, color: "red" },
          ]);

          const cpsGahuza = 10 - data.values[5][1];
          setGahuzaRatio([
            { title: "Optimo", value: data.values[5][1], color: "blue" },
            { title: "CPS", value: cpsGahuza, color: "red" },
          ]);

          const cpsPidgin = 10 - data.values[6][1];
          setPidginRatio([
            { title: "Optimo", value: data.values[6][1], color: "blue" },
            { title: "CPS", value: cpsPidgin, color: "red" },
          ]);

          const cpsSomali = 10 - data.values[7][1];
          setSomaliRatio([
            { title: "Optimo", value: data.values[7][1], color: "blue" },
            { title: "CPS", value: cpsSomali, color: "red" },
          ]);

          const cpsSwahili = 10 - data.values[8][1];
          setSwahiliRatio([
            { title: "Optimo", value: data.values[8][1], color: "blue" },
            { title: "CPS", value: cpsSwahili, color: "red" },
          ]);

          const cpsTigrinya = 10 - data.values[9][1];
          setTigrinyaRatio([
            { title: "Optimo", value: data.values[9][1], color: "blue" },
            { title: "CPS", value: cpsTigrinya, color: "red" },
          ]);

          const cpsYoruba = 10 - data.values[10][1];
          setYorubaRatio([
            { title: "Optimo", value: data.values[10][1], color: "blue" },
            { title: "CPS", value: cpsYoruba, color: "red" },
          ]);

          const cpsKyrgyz = 10 - data.values[11][1];
          setKyrgyzRatio([
            { title: "Optimo", value: data.values[11][1], color: "blue" },
            { title: "CPS", value: cpsKyrgyz, color: "red" },
          ]);

          const cpsUzbek = 10 - data.values[12][1];
          setUzbekRatio([
            { title: "Optimo", value: data.values[12][1], color: "blue" },
            { title: "CPS", value: cpsUzbek, color: "red" },
          ]);

          const cpsBurmese = 10 - data.values[13][1];
          setBurmeseRatio([
            { title: "Optimo", value: data.values[13][1], color: "blue" },
            { title: "CPS", value: cpsBurmese, color: "red" },
          ]);

          const cpsZhongwen = 10 - data.values[14][1];
          setZhongwenRatio([
            { title: "Optimo", value: data.values[14][1], color: "blue" },
            { title: "CPS", value: cpsZhongwen, color: "red" },
          ]);

          const cpsIndonesia = 10 - data.values[15][1];
          setIndonesiaRatio([
            { title: "Optimo", value: data.values[15][1], color: "blue" },
            { title: "CPS", value: cpsIndonesia, color: "red" },
          ]);

          const cpsJapanese = 10 - data.values[16][1];
          setJapaneseRatio([
            { title: "Optimo", value: data.values[16][1], color: "blue" },
            { title: "CPS", value: cpsJapanese, color: "red" },
          ]);

          const cpsKorean = 10 - data.values[17][1];
          setKoreanRatio([
            { title: "Optimo", value: data.values[17][1], color: "blue" },
            { title: "CPS", value: cpsKorean, color: "red" },
          ]);

          const cpsThai = 10 - data.values[18][1];
          setThaiRatio([
            { title: "Optimo", value: data.values[18][1], color: "blue" },
            { title: "CPS", value: cpsThai, color: "red" },
          ]);

          const cpsVietnamese = 10 - data.values[19][1];
          setVietnameseRatio([
            { title: "Optimo", value: data.values[19][1], color: "blue" },
            { title: "CPS", value: cpsVietnamese, color: "red" },
          ]);

          const cpsBengali = 10 - data.values[20][1];
          setBengaliRatio([
            { title: "Optimo", value: data.values[20][1], color: "blue" },
            { title: "CPS", value: cpsBengali, color: "red" },
          ]);

          const cpsGujarati = 10 - data.values[21][1];
          setGujaratiRatio([
            { title: "Optimo", value: data.values[21][1], color: "blue" },
            { title: "CPS", value: cpsGujarati, color: "red" },
          ]);

          const cpsHindi = 10 - data.values[22][1];
          setHindiRatio([
            { title: "Optimo", value: data.values[22][1], color: "blue" },
            { title: "CPS", value: cpsHindi, color: "red" },
          ]);

          const cpsMarathi = 10 - data.values[23][1];
          setMarathiRatio([
            { title: "Optimo", value: data.values[23][1], color: "blue" },
            { title: "CPS", value: cpsMarathi, color: "red" },
          ]);

          const cpsNepali = 10 - data.values[24][1];
          setNepaliRatio([
            { title: "Optimo", value: data.values[24][1], color: "blue" },
            { title: "CPS", value: cpsNepali, color: "red" },
          ]);

          const cpsPashto = 10 - data.values[25][1];
          setPashtoRatio([
            { title: "Optimo", value: data.values[25][1], color: "blue" },
            { title: "CPS", value: cpsPashto, color: "red" },
          ]);

          const cpsPunjabi = 10 - data.values[26][1];
          setPunjabiRatio([
            { title: "Optimo", value: data.values[26][1], color: "blue" },
            { title: "CPS", value: cpsPunjabi, color: "red" },
          ]);

          const cpsSinhala = 10 - data.values[27][1];
          setSinhalaRatio([
            { title: "Optimo", value: data.values[27][1], color: "blue" },
            { title: "CPS", value: cpsSinhala, color: "red" },
          ]);

          const cpsTamil = 10 - data.values[28][1];
          setTamilRatio([
            { title: "Optimo", value: data.values[28][1], color: "blue" },
            { title: "CPS", value: cpsTamil, color: "red" },
          ]);

          const cpsTelugu = 10 - data.values[29][1];
          setTeluguRatio([
            { title: "Optimo", value: data.values[29][1], color: "blue" },
            { title: "CPS", value: cpsTelugu, color: "red" },
          ]);

          const cpsUrdu = 10 - data.values[30][1];
          setUrduRatio([
            { title: "Optimo", value: data.values[30][1], color: "blue" },
            { title: "CPS", value: cpsUrdu, color: "red" },
          ]);

          const cpsAzeri = 10 - data.values[31][1];
          setAzeriRatio([
            { title: "Optimo", value: data.values[31][1], color: "blue" },
            { title: "CPS", value: cpsAzeri, color: "red" },
          ]);

          const cpsRussian = 10 - data.values[32][1];
          setRussianRatio([
            { title: "Optimo", value: data.values[32][1], color: "blue" },
            { title: "CPS", value: cpsRussian, color: "red" },
          ]);

          const cpsSerbian = 10 - data.values[33][1];
          setSerbianRatio([
            { title: "Optimo", value: data.values[33][1], color: "blue" },
            { title: "CPS", value: cpsSerbian, color: "red" },
          ]);

          const cpsTurkce = 10 - data.values[34][1];
          setTurkceRatio([
            { title: "Optimo", value: data.values[34][1], color: "blue" },
            { title: "CPS", value: cpsTurkce, color: "red" },
          ]);

          const cpsUkrainian = 10 - data.values[35][1];
          setUkrainianRatio([
            { title: "Optimo", value: data.values[35][1], color: "blue" },
            { title: "CPS", value: cpsUkrainian, color: "red" },
          ]);

          const cpsPortuguese = 10 - data.values[36][1];
          setPortugueseRatio([
            { title: "Optimo", value: data.values[36][1], color: "blue" },
            { title: "CPS", value: cpsPortuguese, color: "red" },
          ]);

          const cpsMundo = 10 - data.values[37][1];
          setMundoRatio([
            { title: "Optimo", value: data.values[37][1], color: "blue" },
            { title: "CPS", value: cpsMundo, color: "red" },
          ]);

          const cpsArabic = 10 - data.values[38][1];
          setArabicRatio([
            { title: "Optimo", value: data.values[38][1], color: "blue" },
            { title: "CPS", value: cpsArabic, color: "red" },
          ]);

          const cpsPersian = 10 - data.values[39][1];
          setPersianRatio([
            { title: "Optimo", value: data.values[39][1], color: "blue" },
            { title: "CPS", value: cpsPersian, color: "red" },
          ]);
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
          <Col md="11">
            <h3 className="mt-5">BBC World Service | Optimo tracker </h3>
            <p className="mt-4">
              This application monitors the adoption of the{" "}
              <strong>Optimo</strong> content management system by the{" "}
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none underline"
              >
                BBC World Service
              </a>{" "}
              editorial teams by tracking the last ten published articles.
              (Update interval:{" "}
              <span className="text-danger">
                <strong>60</strong>
              </span>{" "}
              min)
            </p>
            <p>
              <ul style={{ listStyle: "square" }}>
                <li>
                  <strong>
                    <span style={{ color: "blue" }}>Optimo articles ratio</span>
                  </strong>{" "}
                </li>
                <li>
                  <strong>
                    <span style={{ color: "red" }}>CPS articles ratio</span>
                  </strong>{" "}
                </li>
              </ul>
            </p>
          </Col>
        </Row>

        {Loader && isLoading}
        <Row>
          <Col sm="12">
            <h3 id="africa">Africa</h3>
          </Col>
        </Row>
        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/afaanoromoo"
                  className="link-light text-decoration-none"
                >
                  AFAAN OROMOO
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={afaanRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/amharic"
                  className="link-light text-decoration-none"
                >
                  AMHARIC
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={amharicRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/afrique"
                  className="link-light text-decoration-none"
                >
                  AFRIQUE
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={afriqueRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/hausa"
                  className="link-light text-decoration-none"
                >
                  HAUSA
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={hausaRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/igbo"
                  className="link-light text-decoration-none"
                >
                  IGBO
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={igboRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/gahuza"
                  className="link-light text-decoration-none"
                >
                  GAHUZA
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={gahuzaRatio}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/pidgin"
                  className="link-light text-decoration-none"
                >
                  PIDGIN
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={pidginRatio}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/somali"
                  className="link-light text-decoration-none"
                >
                  SOMALI
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={somaliRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/swahili"
                  className="link-light text-decoration-none"
                >
                  SWAHILI
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={swahiliRatio}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/tigrinya"
                  className="link-light text-decoration-none"
                >
                  TIGRINYA
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={tigrinyaRatio}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/yoruba"
                  className="link-light text-decoration-none"
                >
                  YORUBA
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={yorubaRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-central">Asia (Central)</h3>
          </Col>
        </Row>
        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/kyrgyz"
                  className="link-light text-decoration-none"
                >
                  KYRGYZ
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={kyrgyzRatio}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/uzbek"
                  className="link-light text-decoration-none"
                >
                  UZBEK
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={uzbekRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-pacific">Asia (Pacific)</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/burmese"
                  className="link-light text-decoration-none"
                >
                  BURMESE
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={burmeseRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/zhongwen"
                  className="link-light text-decoration-none"
                >
                  ZHONGWEN
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={zhongwenRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/indonesia"
                  className="link-light text-decoration-none"
                >
                  INDONESIA
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={indonesiaRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/japanese"
                  className="link-light text-decoration-none"
                >
                  JAPANESE
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={japaneseRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/korean"
                  className="link-light text-decoration-none"
                >
                  KOREAN
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={koreanRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/thai"
                  className="link-light text-decoration-none"
                >
                  THAI
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={thaiRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                <a
                  href="https://tagging-monitor.netlify.app/vietnamese"
                  className="link-light text-decoration-none"
                >
                  VIETNAMESE
                </a>
              </Badge>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={vietnameseRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-south">Asia (South)</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                BENGALI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/bengali"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={bengaliRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                GUJARATI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/gujarati"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={gujaratiRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                HINDI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/hindi"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={hindiRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                MARATHI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/marathi"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={marathiRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                NEPALI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/nepali"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={nepaliRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                PASHTO
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/pashto"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={pashtoRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                PUNJABI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/marathi"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={punjabiRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                SINHALA
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/sinhala"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={sinhalaRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                TAMIL
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/tamil"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={tamilRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                TELUGU
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/telugu"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={teluguRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                URDU
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/urdu"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={urduRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="europe">Europe</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                AZERI
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/azeri"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={azeriRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                RUSSIAN
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/russian"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={russianRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                SERBIAN
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/serbian"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={serbianRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                TURKCE
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/turkce"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={turkceRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                UKRAINIAN
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/ukrainian"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={ukrainianRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="latin-america">Latin America</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                BRASIL
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/portuguese"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={portugueseRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                MUNDO
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/mundo"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={mundoRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="middle-east">Middle East</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                ARABIC
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/arabic"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={arabicRatio}
                />
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                PERSIAN
              </Badge>
              <a
                href="https://tagging-monitor.netlify.app/persian"
                className="link-light text-decoration-none"
              ></a>

              <CardBody className="mx-0 px-0">
                <PieChart
                  totalValue={10}
                  startAngle={180}
                  lengthAngle={180}
                  animate
                  data={persianRatio}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default HomePage;
