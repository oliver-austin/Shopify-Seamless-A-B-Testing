import gql from 'graphql-tag';
import { Button, Card, Checkbox, EmptyState, Form, FormLayout, Heading, Layout, Page, ResourceList, Select, Stack, Subheading, TextField, Thumbnail } from '@shopify/polaris';
import {Context} from "@shopify/app-bridge-react";
import {Redirect} from "@shopify/app-bridge/actions";
import store from "store-js";
import {Query} from "react-apollo";
import Modal from "@shopify/app-bridge-react/components/Modal";
import ResourceListWithProducts from "./ResourceList";

//TODO: fetch all variants, not first 10
const GET_PRODUCT_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        description
        id
        totalVariants
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              price
              id
              image {
                originalSrc
                altText
              }
              displayName
              compareAtPrice
            }
          }
        }
      }
    }
  }
`;

class CreateTestVariant extends React.Component {
    static contextType = Context;
    state = {
        productSelected: 'product',
        variantSelected: 3,
        productTitle: '',
        productDescription: '',
        variantTitle: '',
        variantPrice: '',
        variantDiscount: ''
    };

    render() {
        const productOrVariantSelectOptions = [{ label: 'Product', value: 'product' }, { label: 'Variants', value: 'variants' }];
        const app = this.context;

        return (
            <Query query={GET_PRODUCT_BY_ID} variables={{ ids: store.get('ids') }}>
                {({ data, loading, error }) => {
                    if (loading) { return <div>Loading…</div>; }
                    if (error) { return <div>{error.message}</div>; }
                    const variantsArray = data.nodes[0].variants.edges;
                    const variantSelectOptions = [];
                    variantsArray.forEach(function(variant, index) {
                        variantSelectOptions.push({label: variant.node.displayName, value: index})
                    });

                    console.log(data);
                    return(
                        <Page
                            primaryAction={{
                                content: 'Create A/B Test',
                                onAction: () => this.handleSave,
                            }}
                            >
                                <Select
                                    label="Create test for:"
                                    disabled={false}
                                    options={productOrVariantSelectOptions}
                                    onChange={this.handleProductOrVariantSelectChange}
                                    value={this.state.productSelected}/>

                            {this.state.productSelected === 'product' ? (
                                <Form onSubmit={this.handleProductSubmit}>
                                    <FormLayout>
                                        <Thumbnail
                                            source={
                                                data.nodes[0].images.edges[0]
                                                    ? data.nodes[0].images.edges[0].node.originalSrc
                                                    : ''
                                            }
                                            alt={
                                                data.nodes[0].images.edges[0]
                                                    ? data.nodes[0].images.edges[0].node.altText
                                                    : ''
                                            }
                                        />
                                        <TextField
                                            readOnly={false}
                                            value={this.state.productTitle}
                                            //value={data.nodes[0].title}
                                            onChange={this.handleTextChange}
                                            label="Product Name"
                                            type="text"
                                        />
                                    </FormLayout>
                                </Form>

                            ) : (
                                <Form onSubmit={this.handleVariantSubmit}>
                                    <FormLayout>
                                        <Select
                                            label="Select product variant to create test for:"
                                            disabled={false}
                                            options={variantSelectOptions}
                                            value={this.state.variantSelected}
                                            onChange={this.handleVariantSelectChange.bind(this, variantsArray)}
                                            />
                                        <Thumbnail
                                            source={
                                                data.nodes[0].variants.edges[this.state.variantSelected].node.image
                                                    ? data.nodes[0].variants.edges[this.state.variantSelected].node.image.originalSrc
                                                    : data.nodes[0].images.edges[0].node.originalSrc
                                            }
                                            alt={
                                                data.nodes[0].variants.edges[this.state.variantSelected].node.image
                                                    ? data.nodes[0].variants.edges[this.state.variantSelected].node.image.altText
                                                    : data.nodes[0].images.edges[0].node.altText
                                            }
                                        />
                                        <TextField
                                            readOnly={false}
                                            value={this.state.variantTitle}
                                            onChange={this.handleTextChange}
                                            label="Product Name"
                                            type="text"
                                        />

                                        <TextField
                                            readOnly={false}
                                            value={this.state.variantPrice}
                                            onChange={this.handleTextChange}
                                            label="Original Price"
                                            type="text"
                                        />

                                        <TextField
                                            readOnly={false}
                                            value={this.state.variantDiscount}
                                            onChange={this.handleTextChange}
                                            label="Discounted Price"
                                            type="text"
                                        />
                                    </FormLayout>
                                </Form>
                                )}
                        </Page>
                    )
                }}
                    </Query>
        );
    }

    redirect = () => {
        this.props.variantCreated(false)
    };

    itemToBeConsumed = () => {
        const item = store.get('item');
        const price = item.variants.edges[0].node.price;
        const variantId = item.variants.edges[0].node.id;
        const discounter = price * 0.1;
        this.setState({ price, variantId });
        return (price - discounter).toFixed(2);
    };

    handleTextChange = (value) => {
        this.setState({ value });
    };

    handleProductOrVariantSelectChange = newValue => {
        this.setState({ productSelected: newValue });
    };

    handleVariantSelectChange = (variantsArray, newValue) => {
        newValue = parseInt(newValue, 10);
        this.setState({
            variantSelected: newValue,
            variantTitle: variantsArray[newValue].node.displayName,
            variantPrice: variantsArray[newValue].node.price,
            variantDiscount: variantsArray[newValue].node.compareAtPrice });
    };

    handleProductSubmit = () => {

    };

    handleVariantSubmit = () => {

    };

    handleSave = () => {

    }
}

export default CreateTestVariant;