import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import { Input } from 'react-native-clean-form/redux-form';
import { postIngredient } from '../actions/addIngredient';

class AddIngredientForm extends Component {
  onSubmit(ingredient) {
    return this.props.postIngredient(ingredient, this.props.token);
  }

  render() {
    console.log('this is the add props', this.props);
    const { handleSubmit, submitting } = this.props;
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Ingredient Details">
            <Input name="name" label="Ingredient Name" placeholder="Honeycrisp Apple" />
            <Input name="description" label="Description" placeholder="The most delicious apple" />
          </Fieldset>
          <Fieldset label="Extras" last>
            <Input name="alternatives" label="alternatives" placeholder="Oranges?" />
            <Input name="tags" label="Tags" placeholder="crisp" />
            <Input name="photos" label="photos" placeholder="Photo?" />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button onPress={handleSubmit(this.onSubmit.bind(this))} icon="md-checkmark" iconPlacement="right" submitting={submitting} >
            Submit
          </Button>
        </ActionsContainer>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.loginReducer.user.token,
    success: state.ingredientResults.success,
    response: state.ingredientResults.response
  };
};

export default connect(mapStateToProps, { postIngredient })(reduxForm({
  form: 'ingredients'
})(AddIngredientForm));
