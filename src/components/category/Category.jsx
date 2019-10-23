import React, { Component } from "react";

import { connect } from "react-redux";

import { loadCategories, loadGamesCategory, resetSearch } from "../../actions";
import "./styles.css";

class Category extends Component {
    state = {
        selected: "Recommended",
    };

    componentDidMount() {
        this.props.loadCategories();
    }

    selectCategory(category) {
        this.setState({ selected: category.displayName });
        this.props.resetSearch();
        this.props.loadGamesCategory(category.id);
    }

    render() {
        return (
            <>
                <h1 className="title">GAME CATEGORY</h1>
                <ol className="list">
                    {this.props.categories.map(item => {
                        return (
                            <li
                                className={`list-item ${
                                    item.displayName === this.state.selected &&
                                    this.props.search === ""
                                        ? "list-item-selected"
                                        : "list-item-not-selected"
                                }`}
                                onClick={() => this.selectCategory(item)}
                                key={item.id}
                            >
                                {item.displayName}
                            </li>
                        );
                    })}
                </ol>
            </>
        );
    }
}

const mapStateToProps = ({ categories, search }) => ({
    categories,
    search,
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
    loadGamesCategory: categoryId => dispatch(loadGamesCategory(categoryId)),
    resetSearch: () => dispatch(resetSearch()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Category);
