import React, { Component } from "react";
import { reduxForm, Field } from "redux-form"
class ProductForm extends Component {
    renderField() {
        const formFields = [
            { name: "ProductName", type: "text" },
            { name: "unitPrice", type: "number" },
            { name: "thumbnail", type: "text" }

        ];
        return formFields.map(({ name, type }) => {
            return (
                <Field name={name} type={type} component="input" />
            );
        })
    }

    render() {
        return (
            <div>
                <form>
                    {this.renderField()}
                </form>
            </div>
        );
    }
}

ProductForm = reduxForm({ form: "productForm" })(ProductForm)

export default ProductForm;