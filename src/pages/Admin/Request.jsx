import React from "react";
import { Nav, Tab } from "react-bootstrap";
function Request() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <Tab.Container activeKey={activeTab}>
      <Nav variant="tabs" onSelect={handleTabSelect}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">EOs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Event</Nav.Link>
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
  );
}

export default Request;
