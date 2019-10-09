import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

import { connect } from "react-redux";

class ListContainer extends Component {
    getBadges(game) {
        const badges = [];
        if (game.isNew) {
            badges.push(
                <Badge key="new" variant="primary">
                    new
                </Badge>,
            );
        }
        if (game.isLive) {
            badges.push(
                <Badge key="live" variant="success">
                    live
                </Badge>,
            );
        }
        if (game.isOffline) {
            badges.push(
                <Badge key="offline" variant="light">
                    offline
                </Badge>,
            );
        }
        if (game.isHot) {
            badges.push(
                <Badge key="hot" variant="danger">
                    hot
                </Badge>,
            );
        }

        return badges;
    }

    render() {
        return (
            <>
                <ListGroup>
                    <Row>
                        {this.props.games.map(game => (
                            <Col md={6} className="mt-4" key={game.gameId}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={10}>{game.name}</Col>
                                        <Col md={2}>{this.getBadges(game)}</Col>
                                    </Row>
                                </ListGroup.Item>
                            </Col>
                        ))}
                    </Row>
                </ListGroup>
            </>
        );
    }
}

const mapStateToProps = ({ games }) => ({
    games,
});

export default connect(mapStateToProps)(ListContainer);
