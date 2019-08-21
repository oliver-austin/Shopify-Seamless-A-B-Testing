import { EmptyState, Layout, Page} from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resourcePickerOpen: false,
      variantSelected: false,
    };
    this.childHandler = this.childHandler.bind(this);
  }

  childHandler(variantSelectedFromChild) {
    this.setState({
      variantSelected: variantSelectedFromChild
    });
  }

  render() {
    const emptyState = !store.get('ids');
    return (

            <Page
            primaryAction={{
              content: 'Select product to test',
              onAction: () => this.setState({ resourcePickerOpen: true }),
            }}
        >
          <ResourcePicker
              resourceType="Product"
              showVariants={false}
              allowMultiple={false}
              open={this.state.resourcePickerOpen}
              onSelection={(resources) => this.handleSelection(resources)}
              onCancel={() => this.setState({ resourcePickerOpen: false })}
          />
          {emptyState ? (
              <Layout>
                <EmptyState
                    heading="Test product variants"
                    action={{
                      content: 'Select products',
                      onAction: () => this.setState({ resourcePickerOpen: true }),
                    }}
                    image={img}
                >
                  <p>Select a product to create a test variant.</p>
                </EmptyState>
              </Layout>
          ) :(
              <ResourceListWithProducts />
              )}
        </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ resourcePickerOpen: false, variantSelected: true, });
    store.set('ids', idsFromResources);
    document.location.href = '/create-test';
  };
}

export default Index;
