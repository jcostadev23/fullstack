import formatDate from '../utils/dateFormat';

class IdeasList {
  constructor(ideas) {
    this._ideaList = document.getElementById('idea-list');
    this._ideas = ideas;

    this._validTags = new Set();
    this._validTags.add('health');
    this._validTags.add('software');
    this._validTags.add('business');
    this._validTags.add('education');
    this._validTags.add('technology');
    this._validTags.add('inventions');
  }

  getTagClass(tag) {
    tag = tag.toLowerCase();
    return this._validTags.has(tag) ? `tag-${tag}` : '';
  }

  render() {
    this._ideaList.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea?.tag);
        return `
        <div class="card">
          <button data-id=${
            idea._id
          } class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea?.text ?? ''}
          </h3>
          <p class="tag ${tagClass}" >${idea?.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${formatDate(idea?.date)}</span> by
            <span class="author">${idea?.username}</span>
          </p>
      </div>`;
      })
      .join('');
  }
}

export default IdeasList;
