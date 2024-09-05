import { createIdea } from '../utils/apiCalls';
import IdeasList from './IdeasList';

class InputForm {
  constructor() {
    this._formModal = document.getElementById('form-modal');
  }

  addEventListener() {
    this._form.addEventListener('submit', this.onSubmit.bind(this));
  }

  async onSubmit(e) {
    e.preventDefault();
    const idea = {
      tag: this._form.elements.tag.value,
      text: this._form.elements.text.value,
      username: this._form.elements.username.value,
    };

    const result = await createIdea(idea);
    const ideasList = new IdeasList([result.data]);
    ideasList.render();

    (this._form.elements.tag.value = ''),
      (this._form.elements.text.value = ''),
      (this._form.elements.username.value = ''),
      document.dispatchEvent(new Event('closeModal'));
  }

  render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>`;

    this._form = document.getElementById('idea-form');
    this.addEventListener();
  }
}

export default InputForm;
