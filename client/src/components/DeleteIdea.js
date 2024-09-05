import { deleteIdea } from '../utils/apiCalls';

class DeleteIdea {
  constructor(ideaList) {
    this._ideaList = ideaList;

    this._init();
  }

  async _delete(event) {
    const btnDelete = event.target.closest('.delete');
    if (btnDelete) {
      const ideaId = btnDelete.getAttribute('data-id');
      await deleteIdea(ideaId);
    }
  }

  addEventListener() {
    this._ideaList.addEventListener('click', this._delete);
  }

  _init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.addEventListener();
    });
  }
}

export default DeleteIdea;
