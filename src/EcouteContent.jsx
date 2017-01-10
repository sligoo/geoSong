class EcouteContent extends React.Component {
    render() {
        const Grid = ReactBootstrap.Grid,
            Row = ReactBootstrap.Row,
            Col = ReactBootstrap.Col;
        return (
            <Grid className="content-grid" style={{border: '1px solid blue'}}>
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}></Col>
                    <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}></Col>
                </Row>
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}></Col>
                    <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}></Col>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(
    <EcouteContent />,
    document.getElementById('content')
);