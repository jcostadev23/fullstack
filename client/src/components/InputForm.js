import { createIdea } from '../utils/apiCalls';
import IdeasList from './IdeasList';

class InputForm {
  constructor() {
    this._formModal = document.getElementById('form-modal');
    this._ideasList = new IdeasList();
  }

  addEventListener() {
    this._form.addEventListener('submit', this.onSubmit.bind(this));
  }

  async onSubmit(e) {
    e.preventDefault();

    if (
      !this._form.elements.text.value ||
      !this._form.elements.tag.value ||
      !this._form.elements.username.value
    ) {
      alert('Please enter all fields');
      return;
    }

    localStorage.setItem('username', this._form.elements.username.value);

    const idea = {
      tag: this._form.elements.tag.value,
      text: this._form.elements.text.value,
      username: this._form.elements.username.value,
    };

    const response = await createIdea(idea);
    this._ideasList.addIdeaToList(response);

    this._form.elements.tag.value = '';
    this._form.elements.text.value = '';
    this._form.elements.username.value = '';
    document.dispatchEvent(new Event('closeModal'));

    this.render();
  }

  render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" value="${
              localStorage.getItem('username') ?? ''
            }"/>
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <select required class="form-control" name="tag" id="tag">
              <option value=""></option>
              <option value="health">Health</option>
              <option value="software">Software</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="inventions">Inventions</option>
            </select>
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>`;

    this._form = document.getElementById('idea-form');
    this.addEventListener();
  }
}

export default InputForm;
