import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Accordion, Button, Table } from "react-bootstrap";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaCalendarAlt, FaRegCalendarPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/agenda-medico-x" element={<HorariosMedicos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <nav className="navbar bg-body-tertiary py-4 px-2">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3 text-bolder cursor-pointer">
          <FaRegCalendarPlus size={32} className="text-danger" />
          <a className="navbar-brand fw-bolder" href="#">
            Agendamentos UBS - Valparaíso
          </a>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState("tab1");

  // Função para alternar entre abas
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      {/* Navegação das Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "tab1"
                ? "active bg-primary text-light"
                : "text-black"
            }
            fw-semibold`
          }
            onClick={() => handleTabClick("tab1")}
          >
            UNIDADES DE ATENDIMENTO
          </button>
        </li>
        {/* <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tab2" ? "active bg-secondary text-light" : "text-black"}`}
            onClick={() => handleTabClick("tab2")}
          >
            -
          </button>
        </li> */}
      </ul>

      {/* Conteúdo das Tabs */}
      <div className="tab-content mt-4">
        {activeTab === "tab1" && (
          <div id="tab1" className="tab-pane active">
            {/* <h2>Conteúdo da Tab 1</h2> */}
            <Unidades />
          </div>
        )}
        {activeTab === "tab2" && (
          <div id="tab2" className="tab-pane active">
            <h2>Conteúdo da Tab 2</h2>
            <p>Este é o conteúdo da segunda aba.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Unidades() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <a href="medicos">
            <strong>Posto de Saúde - Valparaíso II</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: QD 22 ÁREA ESPECIAL VALPARAISO II <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {" "}
          <a href="">
            <strong>Posto de Saúde - Anhanguera A</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 15, Conjunto 07, casa 03 - Rua Minas Gerais <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Anhanguera B</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 2, Conjunto G, lote 25 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Parque Rio Branco</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 2, Conjunto G, lote 25 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Jardim Oriente</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 2, Conjunto G, lote 25 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Céu Azul, 1ª Etapa</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 2, Conjunto G, lote 25 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Céu Azul, 2ª Etapa</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 2, Conjunto G, lote 25 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <a href="">
            <strong>Posto de Saúde - Céu Azul, 3ª Etapa</strong>
          </a>
        </Accordion.Header>
        <Accordion.Body className="bg-light">
          Endereço: Quadra 192, Conjunto G, lote 214 <br />
          Horário de Atendimento: Segunda a Sexta de 08:00 - 18:00
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Medicos() {
  return (
    <div>
      <table className="table table-striped table-hover table_border-radius">
        <thead className="table-primary fs-4">
          <tr>
            <th scope="col">MÉDICO / ENFERMEIRO</th>
            <th scope="col">Especialização</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <th scope="row">
              <a
                href="agenda-medico-x"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-primary"
              >
                Dra. Angela Fernandes
              </a>
            </th>
            <td>Clinico Geral</td>
          </tr>
          <tr className="">
            <th scope="row">
              <a
                href="agenda-medico-x"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-primary"
              >
                Dr. Márcio Luiz
              </a>
            </th>
            <td>Odontologia</td>
          </tr>
          <tr className="">
            <th scope="row">
              <a
                href="agenda-medico-x"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-primary"
              >
                Enf. Fátima Beatriz
              </a>
            </th>
            <td>Endocrinologia</td>
          </tr>
          <tr className="">
            <th scope="row">
              <a
                href="agenda-medico-x"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-primary"
              >
                Dra. Ana Julia
              </a>
            </th>
            <td>Pré-Natal</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex gap-1 mt-4">
        <IoChevronBackCircleSharp className="text-primary" size={24}  />
        <a href="/" className="">
          Página Inicial
        </a>
      </div>
    </div>
  );
}

function HorariosMedicos() {
  const [selectedColumn, setSelectedColumn] = useState(null); // Armazena a coluna selecionada

  const handleColumnClick = (columnIndex) => {
    console.log("handleColumnClick", columnIndex, selectedColumn);
    if (selectedColumn === columnIndex) {
      columnIndex = null;
    }
    setSelectedColumn(columnIndex); // Define a coluna que foi clicada
  };

  const getColumnClass = (columnIndex) => {
    return selectedColumn === columnIndex ? "success" : ""; // Adiciona a classe de destaque (bg-warning) se a coluna for a selecionada
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <section>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
          <IoIosArrowForward size={20} />
            <a
              href="/medicos"
              className="text-primary link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover "
            >
              Dra. Angela Fernandes
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Agenda e Horários
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-start gap-2 my-4">
      <span className="fs-4 fw-semibold">Data do Agendamento:</span> <FaCalendarAlt size={28} />
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  />
      </div>

      <table className="table table-hover  table_border-radius">
        <thead className="table-primary fs-3">
          <tr>
            <th scope="col">Horário</th>
            <th scope="col">Paciente</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`cursor-pointer table-${getColumnClass(0)}`}
            onClick={() => handleColumnClick(0)}
          >
            <th scope="row">08:00</th>
            <td>-</td>
          </tr>
          <tr className="cursor-pointer table-warning">
            <th scope="row">09:00</th>
            <td>Regina Almeida</td>
          </tr>
          {/* <tr className={`cursor-pointer table-${getColumnClass(1)}`} onClick={() => handleColumnClick(1)}> */}
          <tr className="cursor-pointer table-warning">
            <th scope="row">10:00</th>
            <td>Jessica Silva</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(2)}`}
            onClick={() => handleColumnClick(2)}
          >
            <th scope="row">11:00</th>
            <td>-</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(3)}`}
            onClick={() => handleColumnClick(3)}
          >
            <th scope="row">13:00</th>
            <td>-</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(4)}`}
            onClick={() => handleColumnClick(4)}
          >
            <th scope="row">14:00</th>
            <td>-</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(5)}`}
            onClick={() => handleColumnClick(5)}
          >
            {/* <tr className="cursor-pointer table-warning"> */}
            <th scope="row">15:00</th>
            <td>-</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(6)}`}
            onClick={() => handleColumnClick(6)}
          >
            <th scope="row">16:00</th>
            <td>-</td>
          </tr>
          <tr
            className={`cursor-pointer table-${getColumnClass(7)}`}
            onClick={() => handleColumnClick(7)}
          >
            <th scope="row">17:00</th>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {selectedColumn && (
        <div className="d-flex justify-content-center my-4">
          <Button>Salvar agendamento</Button>
        </div>
      )}

      <div className="d-flex align-items-center my-3 mx-1 gap-2">
        <CiCircleInfo size={20} />
        <span> Os atendimentos encerram-se as 18:00 horas.</span>
      </div>

      <div className="d-flex gap-1">
        <IoChevronBackCircleSharp className="text-primary mx-1"size={24} />
        <a href="/medicos" className="align-center">
          Médicos
        </a>
      </div>
    </section>
  );
}

export default App;
