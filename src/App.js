import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Strings } from "./util/Strings";
import Table from "./components/Table";
import tableColumns from "./data/tableColumns";
import { getContractInstance } from "./util/ethersUtil";

const App = () => {

  const [contractAddress, setcontractAddress] = useState('0x6b175474e89094c44da98b954eedeac495271d0f')
  const [eoaAddress, setEoaAddress] = useState('0xe5f8086dac91e039b1400febf0ab33ba3487f29a')

  const [tableData, setTableData] = useState([])

  const addToTable = (balance, name, symbol) => {
    const item = {
      accountAddress: eoaAddress,
      tokenAddress: contractAddress,
      balance: balance.toString(),
      tokenName: name,
      tokenSymbol: symbol
    }
    const tempTableData = [...tableData, item]
    setTableData(tempTableData)
  }

  const onSubmit = async () => {
    const contractInstance = getContractInstance(contractAddress)
    Promise.all([
      contractInstance.balanceOf(eoaAddress),
      contractInstance.symbol(),
      contractInstance.name()
    ]).then(results => addToTable(results[0], results[1], results[2]))
  }

  return (
    <div>
      <header className='sticky top-0 z-50'>
        <nav className="navbar navbar-dark bg-primary">
          <Container fluid>
            <a href="/" className="navbar-brand">{Strings.appName}</a>
          </Container>
        </nav>
      </header>
      <Container>
        <Row className="mt-2">
          <Col xs={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>{Strings.contractAddress}</Form.Label>
              <Form.Control value={contractAddress} onChange={(e) => setcontractAddress(e.target.value)} type="text" placeholder={Strings.contractHint} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>{Strings.eoaAddress}</Form.Label>
              <Form.Control value={eoaAddress} onChange={(e) => setEoaAddress(e.target.value)} type="text" placeholder={Strings.eoaHint} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
            <Button className="bg-secondary border-secondary" type="submit" onClick={onSubmit}>{Strings.submit}</Button>
          </Col>
          <Col xs={12} className="mt-4">
            <Table columns={tableColumns} data={tableData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
