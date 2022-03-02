import Nav from 'react-bootstrap/Nav'

function MainMenu(){
    return(
        <>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Section1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Link1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Link2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Link3
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default MainMenu;