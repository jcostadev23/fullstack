class IdeasList {
  constructor(ideas) {
    this._ideaList = document.getElementById('idea-list');
    this._ideas = ideas;
  }

  render() {
    this._ideaList.innerHTML = this._ideas
      .map((idea) => {
        return `
        <div class="card">
          <button data-id=${idea._id} class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag tag-technology">${idea.tag}</p>
          <p>
            Posted on <span class="date">January 1, 2022</span> by
            <span class="author">${idea.username}</span>
          </p>
      </div>`;
      })
      .join('');
  }
}

export default IdeasList;
