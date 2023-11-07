import "./App.css";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
} from "reactstrap";
function App() {
  return (
    <div>
      <div>
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://th.bing.com/th/id/OIP.rqo4t6owRs6Qhsw2HIILTAHaHa?w=198&h=199&c=7&r=0&o=5&pid=1.7"
              style={{
                height: 40,
                width: 40,
              }}
            />
            Site
          </NavbarBrand>
          <Nav>
            <NavItem className="text-light">
              <NavLink href="/components/">Anasayfa</NavLink>
            </NavItem>
            <NavItem className="text-light">
              <NavLink href="/components/">Ürünler</NavLink>
            </NavItem>
            <NavItem className="text-light">
              <NavLink href="/components/">Hakkımda</NavLink>
            </NavItem>
            <NavItem className="text-light">
              <NavLink href="/components/">İletişim</NavLink>
            </NavItem>
            <NavItem className="text-light">
              <NavLink href="/components/">Kategoriler</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className=" text-center">
          <div className="row gap-5">
            <div style={{ height: "100%" }} className="col-1  ">
              <Navbar
                style={{ height: "100%" }}
                className="my-2"
                color="dark"
                dark
              >
                <NavbarBrand className="text-center" href="/">
                  <img
                    alt="logo"
                    src="https://th.bing.com/th/id/OIP.rqo4t6owRs6Qhsw2HIILTAHaHa?w=198&h=199&c=7&r=0&o=5&pid=1.7"
                    style={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </NavbarBrand>
                <Nav>
                  <NavItem className="text-light">
                    <NavLink href="/components/">Bİlgisayar</NavLink>
                  </NavItem>
                  <NavItem className="text-light">
                    <NavLink href="/components/">Telefon</NavLink>
                  </NavItem>
                  <NavItem className="text-light">
                    <NavLink href="/components/">Saat</NavLink>
                  </NavItem>
                  <NavItem className="text-light">
                    <NavLink href="/components/">Aksesuarlar</NavLink>
                  </NavItem>
                  <NavItem className="text-light">
                    <NavLink href="/components/">Monitör</NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
            <div className="col-10 container">
              <div className=" row gap-4">
                <Card
                  body
                  color="dark"
                  outline
                  className="col-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-5"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-5"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-5"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-5"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-5"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
                <Card
                  body
                  color="dark"
                  outline
                  className="col-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody>
                    <CardTitle tag="h5">Ürün</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      12.99TL
                    </CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur.</CardText>
                    <Button>Sepete Ekle</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
