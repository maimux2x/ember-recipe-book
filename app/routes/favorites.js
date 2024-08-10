import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class FavoritesRoute extends Route {
  @service recipeData;
  @service store;

  async model() {
    let favoriteIds = this.recipeData.getFavorites();
    return favoriteIds.map(id => this.store.peekRecord('recipe', id));
  }
}
