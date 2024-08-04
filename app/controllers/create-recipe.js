import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateRecipeController extends Controller {
  title = '';
  description = '';
  ingredients = '';
  instructions = '';

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
  }

  @action
  updateIngredients(event) {
    this.ingredients = event.target.value;
  }

  @action
  updateInstructions(event) {
    this.instructions = event.target.value;
  }

  @action
  async createRecipe(event) {
    event.preventDefault();

    let newRecipe = {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients
        .split(',')
        .map(() => this.ingredients.trim()),
      instructions: this.instructions,
    };

    console.log(newRecipe);
  }
}
