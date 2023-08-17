import React from 'react'
import { Nav, Tab } from "react-bootstrap";

function Data() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <section className='my-2 mx-5'>
      <Tab.Container activeKey={activeTab}>
        <Nav variant="tabs" onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="tab1">EOs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab2">Users</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="tab1">
            <p>Content of Tab 1</p>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2">
            <p>Content of Tab 2</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
    
  )
}

export default Data