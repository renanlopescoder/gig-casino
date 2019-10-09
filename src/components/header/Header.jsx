import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { connect } from "react-redux";
import { MdViewStream, MdViewModule, MdSearch } from "react-icons/md";
import { DebounceInput } from "react-debounce-input";

import {
    searchGames,
    loadGamesCategory,
    setGamesLayout,
    sortGames,
} from "../../actions";
import "./styles.css";

class Header extends Component {
    handleSearch(search) {
        this.props.searchGames(search);

        if (search === "") {
            this.props.loadGamesCategory();
        }
    }

    getSelectedClass(type) {
        const { sort, layout } = this.props;

        let selectedClass = "";
        if (type === sort.sortType) {
            selectedClass = "selected";
        }

        if (type === layout) {
            selectedClass = "selected";
        }

        return selectedClass;
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto mt-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="search">
                                    <MdSearch />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <DebounceInput
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search"
                                onChange={e => {
                                    this.handleSearch(e.target.value);
                                }}
                                value={this.props.search}
                                minLength={2}
                                debounceTimeout={500}
                            />
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            className={this.getSelectedClass("alphabetically")}
                            onClick={() =>
                                this.props.sortGames("alphabetically")
                            }
                        >
                            Alphabetically
                        </Nav.Link>
                        <Nav.Link
                            className={this.getSelectedClass("popularity")}
                            onClick={() => this.props.sortGames("popularity")}
                        >
                            Popularity
                        </Nav.Link>
                        <Nav.Link
                            className={this.getSelectedClass("grid")}
                            onClick={() => this.props.setGamesLayout("grid")}
                        >
                            <MdViewModule />
                        </Nav.Link>
                        <Nav.Link
                            className={this.getSelectedClass("list")}
                            onClick={() => this.props.setGamesLayout("list")}
                        >
                            <MdViewStream />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = ({ search, sort, layout }) => ({
    search,
    sort,
    layout,
});

const mapDispatchToProps = dispatch => ({
    searchGames: search => dispatch(searchGames(search)),
    loadGamesCategory: () => dispatch(loadGamesCategory()),
    setGamesLayout: layout => dispatch(setGamesLayout(layout)),
    sortGames: (sortType, categoryId) =>
        dispatch(sortGames(sortType, categoryId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
