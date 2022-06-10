import View from './View';
import icons from 'url:../../img/icons.svg';
// import * as model from '../model';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = this._data.results.length / this._data.resultsPerPage;
    console.log(numPages);
    // page 1
  }
}

export default new PaginationView();
