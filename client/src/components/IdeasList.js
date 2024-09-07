import { deleteIdea, getIdeas } from '../utils/apiCalls';
import formatDate from '../utils/dateFormat';

class IdeasList {
  constructor() {
    this._ideaList = document.getElementById('idea-list');
    this._ideas = [];
    this.getIdeas();

    this._validTags = new Set();
    this._validTags.add('health');
    this._validTags.add('software');
    this._validTags.add('business');
    this._validTags.add('education');
    this._validTags.add('technology');
    this._validTags.add('inventions');
  }

  addEventListeners() {
    this._ideaList.addEventListener('click', async (e) => {
      if (e.target.classList.contains('fa-times')) {
        e.stopImmediatePropagation();
        const ideaId = e.target.parentElement.parentElement.dataset.id;
        this._delete(ideaId);
      }
    });
  }

  async _delete(ideaId) {
    await deleteIdea(ideaId);
    this._ideas.filter((idea) => idea._id !== ideaId);
    this.getIdeas();
  }

  async getIdeas() {
    const result = await getIdeas();
    this._ideas = result.data;
    this.render();
  }

  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }

  getTagClass(tag) {
    tag = tag?.toLowerCase();
    return this._validTags.has(tag) ? `tag-${tag}` : '';
  }

  render() {
    this._ideaList.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea?.tag);
        const btnDelete =
          idea.username === localStorage.getItem('username')
            ? ` <button class="delete"><i class="fas fa-times"></i></button>`
            : '';
        return `
        <div class="card" data-id=${idea._id} >
        ${btnDelete}
          <h3>
            ${idea?.text ?? ''}
          </h3>
          <p class="tag ${tagClass}" >${idea?.tag?.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${formatDate(idea?.date)}</span> by
            <span class="author">${idea?.username}</span>
          </p>
      </div>`;
      })
      .join('');

    this.addEventListeners();
  }
}

export default IdeasList;
