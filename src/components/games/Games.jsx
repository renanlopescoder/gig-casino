import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import { connect } from "react-redux";

import { loadGamesCategory, setGamesLayout } from "../../actions";
import GridContainer from "../../components/layout/Grid";
import ListContainer from "../../components/layout/List";

class Games extends Component {
    componentDidMount() {
        this.props.loadGamesCategory();
        this.props.setGamesLayout();
    }

    render() {
        return (
            <>
                <Col md={10}>
                    {this.props.layout === "grid" && <GridContainer />}
                    {this.props.layout === "list" && <ListContainer />}
                </Col>
            </>
        );
    }
}

const mapStateToProps = ({ layout }) => ({
    layout,
});

const mapDispatchToProps = dispatch => ({
    loadGamesCategory: () => dispatch(loadGamesCategory()),
    setGamesLayout: () => dispatch(setGamesLayout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Games);
