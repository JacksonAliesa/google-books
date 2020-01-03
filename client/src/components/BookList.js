import React from "react"
import { Container, Row, Col } from "../components/Grid"

export function BookList({ children }) {
    return (
      <ul className="list-group">{children}</ul>
    );
  };

export function BookListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    description,
    authors,
    href
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        {/* <Thumbnail src={thumbnail} /> */}
                        <img src={thumbnail} alt={title}>
                        </img>          
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Summary: {description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                            See Book!
            </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}

export default BookList;



