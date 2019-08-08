import { Button, Checkbox, EmptyState, Form, FormLayout, Layout, Page, TextField } from '@shopify/polaris';
import {Context} from "@shopify/app-bridge-react";
import {Redirect} from "@shopify/app-bridge/actions";

class CreateTestVariant extends React.Component {
    static contextType = Context;
    state = {
        newsletter: false,
        email: '',
    };

    render() {
        const {newsletter, email} = this.state;
        const app = this.context;

        return (
            <Form onSubmit={this.redirect}>
                <FormLayout>

                    <TextField
                        value={email}
                        onChange={this.handleChange('email')}
                        label="Email"
                        type="email"
                        helpText={
                            <span>
                We’ll use this email address to inform you on future changes to
                Polaris.
              </span>
                        }
                    />

                    <Button submit>Submit</Button>
                </FormLayout>
            </Form>
        );
    }

    redirect = () => {
        this.props.variantCreated(false)
    };

    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
    };
}

export default CreateTestVariant;