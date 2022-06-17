import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProjects from '../ManageAllProjects/ManageAllProjects';
import PostProject from '../PostProject/PostProject';
import Projects from '../Projects/Projects';
import Review from '../Review/Review';
import YourProjects from '../YourProjects/YourProjects';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
      <div>
        <h1 className="text-center mt-3 mb-3  text-uppercase display-6">
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
                  to={`${url}/yourprojects`}
                >
                  Your Project
                </NavLink>

                {/* <NavLink
                  className=" mb-3 dashboard text-decoration-none"
                  to={`${url}/payment`}
                >
                  Payment
                </NavLink> */}

                <NavLink
                  className=" mb-3 dashboard text-decoration-none"
                  to={`${url}/reviews`}
                >
                  Reviews
                </NavLink>
               

                    
                {admin && (
                  <Nav>
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
                      Manage All Project Aprov
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/manageallprojects`}
                    >
                      Manage All Project
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/makeadmin`}
                    >
                      Make Super Admin
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
                  {/* <YourOrders></YourOrders> */}
                </Route>

                <Route exact path={`${path}/yourprojects`}>
                  <YourProjects />
                </Route>

                <Route path={`${path}/reviews`}>
                  <Review />
                </Route>

                <Route path={`${path}/payment`}>
                  {/* <Payment></Payment> */}
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
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Dashboard;