const INITIAL_STATE = {
  recipe: {
    id: -1,
    name: '',
    description: '',
    prep_time: null,
    cook_time: null,
    notes: '',
    image_url: '',
    active: undefined,
    tags: [],
    instructions: [],
    ingredients: []
  },
  tag: '',
  tags: [],
  instruction: '',
  ingredient: { id: -1, name: '', amount: '' },
  ingredients: [],
  steps: [],
  name: '',
  description: '',
  notes: '',
  isLoading: false,
  hasError: false,
  msg: ''
};

let ingredients;
let steps;
let tags;

export default (state = INITIAL_STATE, action) => {

  console.log('ACTION:', action);

  switch (action.type) {

    case 'MODIFY_NAME':
      return {
        ...state,
        recipe: { ...state.recipe, name: action.payload },
        name: action.payload,
        hasError: false
      };

    case 'MODIFY_DESCRIPTION':
      return {
        ...state,
        recipe: { ...state.recipe, description: action.payload },
        description: action.payload,
        hasError: false
      };

    case 'MODIFY_NOTES':
      return {
        ...state,
        recipe: { ...state.recipe, notes: action.payload },
        notes: action.payload,
        hasError: false
      };

    case 'MODIFY_COOK_TIME':
      return {
        ...state,
        recipe: { ...state.recipe, cook_time: action.payload },
        cook_time: action.payload,
        hasError: false
      };

    case 'MODIFY_PREP_TIME':
      return {
        ...state,
        recipe: { ...state.recipe, prep_time: action.payload },
        prep_time: action.payload,
        hasError: false
      };

    case 'MODIFY_INGREDIENT':
      console.log('MODIFY_INGREDIENT:', action.payload);
      return {
        ...state,
        ingredient: { ...state.ingredient, id: action.payload.id, name: action.payload.name },
        hasError: false
      };

    case 'MODIFY_INSTRUCTION':
      return { ...state, instruction: action.payload, hasError: false };

    case 'MODIFY_MEASUREMENT':
      console.log('MODIFY_MEASUREMENT:', action.payload);
      return {
        ...state,
        ingredient: { ...state.ingredient, amount: action.payload },
        hasError: false
      };

    case 'MODIFY_TAG':
      return { ...state, tag: action.payload, hasError: false };

    case 'ADD_INGREDIENT':
      console.log('add ingredient:', action.payload);
      ingredients = [...state.ingredients, action.payload];
      return { ...state, ingredients };

    case 'ADD_TAG':
      tags = [...state.tags, action.payload];
      return { ...state, tags, tag: '' };

    case 'ADD_INSTRUCTION':
      steps = [...state.steps, action.payload];
      return { ...state, steps, instruction: '' };

    case 'RESET_RECIPE':
      return INITIAL_STATE;

    case 'RESET_INSTRUCTION':
      return { ...state, instruction: '' };

    case 'RESET_INGREDIENT':
      return { ...state, ingredient: { id: -1, name: '', amount: '' } };

    case 'SAVE_RECIPE_PENDING':
      return { ...state, isLoading: true };
    case 'SAVE_RECIPE_FULFILLED':
      return INITIAL_STATE;
    case 'SAVE_RECIPE_REJECTED':
      return { ...state, isLoading: false };

    case 'POST_RECIPE_PENDING':
      return { ...state, isLoading: true };
    case 'POST_RECIPE_FULFILLED':
      if (!action.payload.results) {
        return { ...state, isLoading: false, hasError: true, msg: action.payload };
      }
      if (action.payload.results.errors) {
        return { ...state, isLoading: false, hasError: true };
      }
      return INITIAL_STATE;
    case 'POST_RECIPE_REJECTED':
      return { ...state, isLoading: false, hasError: true };

    default:
     return state;
  }
};
