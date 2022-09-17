import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Administrator from "../Administrator/Administrator";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakeSupervisor from "../MakeSupervisor/MakeSupervisor";
import ManageAllProjects from "../ManageAllProjects/ManageAllProjects";
import PostProject from "../PostProject/PostProject";
import Projects from "../Projects/Projects";
import RequestAccept from "../RequestAccept/RequestAccept";
import RequestProject from "../RequestProject/RequestProject";
import Review from "../Review/Review";
import YourProjects from "../YourProjects/YourProjects";

const Dashboard = () => {
  const { logOut, admin, supervisor } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h1 className="text-center text-uppercase display-6">
          dash<strong className="text-info">board</strong>
        </h1>
      </div>
      <hr className="new" />
      <Container className="mt-4 mb-5 pb-5">
        <Row>
          <Col sm={2} xl={2} lg={2}>
            <div className="pt-5 px-2">
              <Nav className="d-grid me-auto">
                <NavLink
                  className="mb-3 dashboard text-decoration-none"
                  to={`${url}/requestproject`}
                >
                  Request Project
                </NavLink>
                <NavLink
                  className="mb-3 dashboard text-decoration-none"
                  to={`${url}/yourprojects`}
                >
                  Your Project
                </NavLink>
                
                <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/postproject`}
                    >
                      Add New Project
                    </NavLink>

                {supervisor && (
                  <Nav>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/requestaccept`}
                    >
                      Request Accept
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/postproject`}
                    >
                      Add New Project
                    </NavLink>
                  </Nav>
                )}

                {admin && (
                  <Nav>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/reviews`}
                    >
                     All Reviews
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/postproject`}
                    >
                      Add New Project
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/Projects`}
                    >
                      Project Approval
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/manageallprojects`}
                    >
                      Manage All Project
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/administrator`}
                    >
                      Administrator List
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/makesupervisor`}
                    >
                      Make Supervisor
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/makeadmin`}
                    >
                      Make Admin
                    </NavLink>
                  </Nav>
                )}

                <NavLink
                  onClick={logOut}
                  className=" mb-3 text-decoration-none"
                  to="/home"
                >
                  <Button size="sm" variant="warning mt-3 px-4">
                    Log Out
                  </Button>
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={10} xl={10} lg={10}>
            <div className="menubar px-5 w-100">
              <Switch>
                <Route exact path={path}>
                <YourProjects />
                </Route>

                <Route exact path={`${path}/yourprojects`}>
                  <YourProjects />
                </Route>

                <Route path={`${path}/reviews`}>
                  <Review />
                </Route>

                <Route path={`${path}/postproject`}>
                  <PostProject />
                </Route>

                <Route path={`${path}/Projects`}>
                  <Projects />
                </Route>

                <Route path={`${path}/manageallprojects`}>
                  <ManageAllProjects />
                </Route>

                <Route path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/makesupervisor`}>
                  <MakeSupervisor />
                </Route>
                <Route path={`${path}/administrator`}>
                  <Administrator />
                </Route>
                <Route path={`${path}/requestproject`}>
                  <RequestProject />
                </Route>
                <Route path={`${path}/requestaccept`}>
                  <RequestAccept />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
