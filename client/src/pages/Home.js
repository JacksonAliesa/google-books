import React, { Component } from "react";
import Button from "../components/Button"
import Nav from "../components/Nav"
import { BookList, BookListItem } from "../components/BookList"
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid";

class Home extends Component {

//set the state of the books the client is trying to search for
state = {
    books: [],
    bookSearch: "",
    savedBooks: [],
    searchedBooks: ""
};

handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
};


    render() {
        return (
            <div>
                <Nav />
                <Container>
                <h1>Search Page</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="bookSearch">Book</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bookSearch"
                            name="bookSearch"
                            value={this.state.bookSearch}
                            onChange={this.handleInputChange} />
                    </div>
                    <Button onClick={this.handleFormSubmit}>Search</Button>
                    {/* <img className="ml-3" src="https://books.google.com/googlebooks/images/poweredby.png" /> */}
                </form>
        )
            < Row >
            <Col size="xs-12">
                {!this.state.books.length ? (
                    <h1 className="text-center">No Books to Display</h1>
                ) : (
                        <BookList>
                            {this.state.books.map(book => {
                                return (
                                    <BookListItem
                                        key={book.volumeInfo.infoLink}
                                        title={book.volumeInfo.title}
                                        href={book.volumeInfo.infoLink}
                                        authors={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "img/placeholder.png"}
                                    />
                                );
                            })}
                        </BookList>
                    )}
            </Col>
      </Row >
      </Container>
      </div>  
      );
    }

}
export default Home;