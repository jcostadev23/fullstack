import '@fortawesome/fontawesome-free/css/all.css';
import DeleteIdea from './components/DeleteIdea';
import IdeasList from './components/IdeasList';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import { getIdeas } from './utils/apiCalls';
import './css/style.css';

const modal = new Modal();
const inputForm = new InputForm();
const deleteIdea = new DeleteIdea();

(async () => {
  const result = await getIdeas();
  if (!result) {
    return;
  }

  const ideasList = new IdeasList(result.data);
  ideasList.render();
})();

const ideaListElement = document.getElementById('idea-list');
const event = new DeleteIdea(ideaListElement);

inputForm.render();
