import gql from 'graphql-tag';
import { Button, Caption, Card, Checkbox, DropZone, EmptyState, Form, FormLayout, Heading, Layout, Page, ResourceList, Select, Stack, Subheading, TextField, Thumbnail } from '@shopify/polaris';
import {Context} from "@shopify/app-bridge-react";
import {Redirect} from "@shopify/app-bridge/actions";
import store from "store-js";
import {Query} from "react-apollo";
import Product from "../data_classes/Product"
import Modal from "@shopify/app-bridge-react/components/Modal";
import ResourceListWithProducts from "./ResourceList";
import $ from "jquery";

//TODO: fetch all variants, not first 10
const GET_SHOP_ID = gql`
    query getShopID {
            shop{
                id
            }
    }
`;
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
        files: [],
        productSelected: 'product',
        variantSelected: 0,
        productTitle: '',
        productDescription: '',
        productImage: '',
        variantTitle: '',
        variantPrice: '',
        variantDiscount: ''
    };

    render() {
        const productOrVariantSelectOptions = [{ label: 'Product', value: 'product' }, { label: 'Variants', value: 'variants' }];
        const app = this.context;

        const {files} = this.state;
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        console.log(this.state.files);
        if(this.state.files.length != 0){
            console.log(window.URL.createObjectURL(this.state.files[0]));
        }

        const fileUpload = !files.length && <DropZone.FileUpload />;
        const uploadedFiles = files.length > 0 && (

            <Stack vertical>
                {files.map((file, index) => (
                    <Stack alignment="center" key={index}>
                        <Thumbnail
                            size="large"
                            alt={file.name}
                            source={
                                validImageTypes.indexOf(file.type) > 0
                                    ? window.URL.createObjectURL(file)
                                    : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
                            }
                        />
                        <div>
                            {file.name} <Caption>{file.size} bytes</Caption>
                        </div>
                    </Stack>
                ))}
            </Stack>
        );

        return (
            <Query query={GET_PRODUCT_BY_ID} variables={{ ids: store.get('ids') }}>
                {({data, loading, error}) => {
                    if (loading) { return <div>Loading…</div>; }
                    if (error) { return <div>{error.message}</div>; }
                    const variantsArray = data.nodes[0].variants.edges;
                    const variantSelectOptions = [];
                    variantsArray.forEach(function(variant, index) {
                        variantSelectOptions.push({label: variant.node.displayName, value: index})
                    });
                    return (
                    <Query query={GET_SHOP_ID}>
                        {({data: { shop }, loading, error}) => {
                            if (loading) {
                                return <div>Loading…</div>;
                            }
                            if (error) {
                                return <div>{error.message}</div>;
                            }
                            console.log("ID", shop.id);

                            return (
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
                                        onChange={this.handleProductOrVariantSelectChange.bind(this, data)}
                                        value={this.state.productSelected}/>

                                    {this.state.productSelected === 'product' ? (
                                        <Form onSubmit={this.handleProductSubmit(data, shop.id)}>
                                            <FormLayout>
                                                <Stack>
                                                    <Thumbnail
                                                        size="large"
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

                                                    <DropZone
                                                        onDrop={(files, acceptedFiles, rejectedFiles) => {
                                                            this.setState({files: [...this.state.files, ...acceptedFiles]});
                                                        }}>
                                                        {uploadedFiles}
                                                        {fileUpload}
                                                    </DropZone>
                                                </Stack>
                                                <TextField
                                                    readOnly={false}
                                                    value={this.state.productTitle}
                                                    onChange={this.handleTextChange}
                                                    label="Product Name"
                                                    type="text"
                                                />
                                                <TextField
                                                    readOnly={false}
                                                    value={this.state.productDescription}
                                                    onChange={this.handleTextChange}
                                                    label="Product Description"
                                                    type="text"
                                                />
                                            </FormLayout>
                                        </Form>

                                    ) : (
                                        <Form onSubmit={this.handleVariantSubmit(data, shop.id)}>
                                            <FormLayout>
                                                <Select
                                                    label="Select product variant to create test for:"
                                                    disabled={false}
                                                    options={variantSelectOptions}
                                                    value={this.state.variantSelected}
                                                    onChange={this.handleVariantSelectChange.bind(this, variantsArray)}
                                                />
                                                <Stack>

                                                    <Thumbnail
                                                        size="large"
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

                                                    <DropZone
                                                        onDrop={(files, acceptedFiles, rejectedFiles) => {
                                                            this.setState({files: [...this.state.files, ...acceptedFiles]});
                                                        }}>
                                                        {uploadedFiles}
                                                        {fileUpload}
                                                    </DropZone>

                                                </Stack>
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

    handleProductOrVariantSelectChange = (data, newValue) => {
        this.setState({
            productTitle: data.nodes[0].title,
            productDescription: data.nodes[0].description,
            productSelected: newValue,
            variantTitle: data.nodes[0].variants.edges[0].node.displayName,
            variantPrice: data.nodes[0].variants.edges[0].node.price,
            variantDiscount: data.nodes[0].variants.edges[0].node.compareAtPrice});
    };

    handleVariantSelectChange = (variantsArray, newValue) => {
        newValue = parseInt(newValue, 10);
        this.setState({
            variantSelected: newValue,
            variantTitle: variantsArray[newValue].node.displayName,
            variantPrice: variantsArray[newValue].node.price,
            variantDiscount: variantsArray[newValue].node.compareAtPrice });
    };

    handleProductSubmit = (data, shopID) => {
        //data param is retrieved from gql, "old data", new data is stored in this.state
        //send all relevant fields form old and new data with request
        var product = new Product
            (data.nodes[0].id, shopID, data.nodes[0].title,
            data.nodes[0].images.edges[0].node.originalSrc, data.nodes[0].description, 0, 0, 0, this.state.productTitle,
            this.state.productImage, this.state.productDescription, 0, 0, 0);
        $.ajax({
            type: "POST",
            url: "./create-product-test",
            data: JSON.stringify(product),
            success: success,
            dataType: 'json'
        });
        const success = () => {
            console.log("Product test submission successful");
        };
    };

    handleVariantSubmit = (data, shopID) => {
        /*$.ajax({
            type: "POST",
            url: "./create-variant-test",
            data: data,
            success: success,
            dataType: JSON
        });*/
    };

    handleSave = () => {

    }
}

export default CreateTestVariant;