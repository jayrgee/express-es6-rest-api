import React from "react";

export default class ProductSearch extends React.Component {
  state = {
    products: []
  };

  fetchProducts() {
    fetch("/API/products/")
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ products: json });
      })
      .catch(e => {
        this.setState({
          uiState: {
            message: `API call failed: ${e}`,
            fetching: false
          }
        });
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <React.Fragment>
        <h1>product search</h1>
      </React.Fragment>
    );
  }
}
