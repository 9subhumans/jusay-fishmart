import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("asc");
  const [priceFilter, setPriceFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  useEffect(() => {
    // Fetch data from API or database
    const data = [      {        id: 1,        name: "Product 1",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 10.99,       image: "prodcut1.jpg",      },
                        {        id: 2,        name: "Product 2",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 25.99,       image: "product2.jpg",      },      
                        {        id: 3,        name: "Product 3",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 12.99,       image: "product3.jpg",      },      
                        {        id: 4,        name: "Product 4",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 8.99,        image: "product4.jpg",      },      
                        {        id: 5,        name: "Product 5",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 14.99,       image: "product5.jpg",      },      
                        {        id: 6,        name: "Product 6",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 19.99,       image: "product6.jpg",      },      
                        {        id: 7,        name: "Product 7",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 6.99,        image: "product7.jpg",      },      
                        {        id: 8,        name: "Product 8",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 9.99,        image: "product8.jpg",      },      
                        {        id: 9,        name: "Product 9",        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 16.99,       image: "product9.jpg",      },      
                        {        id: 10,       name: "Product 10",       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 22.99,       image: "product10.jpg",     },      
                        {        id: 11,       name: "Product 11",       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 13.99,       image: "product11.jpg",     },      
                        {        id: 12,       name: "Product 12",       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",        price: 18.99,       image: "product12.jpg",     },    ];

    setProducts(data);
  }, []);

  // Filter products based on search query and price filter
  const filteredProducts = products.filter((product) => {
    if (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter === "all" || (priceFilter === "low" && product.price <= 10) || (priceFilter === "medium" && product.price > 10 && product.price <= 20) || (priceFilter === "high" && product.price > 20))
    ) {
      return true;
    }
    return false;
  });

  // Sort products based on sort type
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Form>
            <Form.Group controlId="search">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Search products" value={search} onChange={handleSearch} />
            </Form.Group>
            <Form.Group controlId="sort">
              <Form.Label>Sort by price</Form.Label>
              <Form.Control as="select" value={sortType} onChange={handleSortChange}>
                <option value="asc">Low to high</option>
                <option value="desc">High to low</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="price-filter">
              <Form.Label>Filter by price</Form.Label>
              <Form.Control as="select" value={priceFilter} onChange={handlePriceFilterChange}>
                <option value="all">All</option>
                <option value="low">Under $10</option>
                <option value="medium">$10 to $20</option>
                <option value="high">Over $20</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {
          products.map((p) => (
            <Col key={p.id} xs={12} md={6} lg={2}>
              <Card className="my-3">
              <Card.Img variant="top" src="images/coffee.jpg" />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Card.Text>${p.price.toFixed(2)}</Card.Text>
                <Button variant="primary" className="mr-2">
                  Add to cart
                </Button>
                <i className="far fa-heart mr-2"></i>
                <i className="far fa-bookmark"></i>
              </Card.Body>
            </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default ProductsPage;