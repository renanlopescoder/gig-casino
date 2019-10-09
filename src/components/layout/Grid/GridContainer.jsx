import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";

import { connect } from "react-redux";

class GridContainer extends Component {
    imageFallback(event) {
        event.target.src = require("../../../assets/casinoImage404.jpg");
    }

    render() {
        return (
            <>
                <CardDeck>
                    {this.props.games.map(game => (
                        <Col md={3} className="mt-4" key={game.gameId}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={`https://assets.igamingcloud.com/game-icons/${game.gameId}.jpg`}
                                    onError={this.imageFallback}
                                />
                                <Card.Body>
                                    <Card.Text>{game.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </CardDeck>
            </>
        );
    }
}

const mapStateToProps = ({ games }) => ({
    games,
});

export default connect(mapStateToProps)(GridContainer);
