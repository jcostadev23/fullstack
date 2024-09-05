import '@fortawesome/fontawesome-free/css/all.css';
import IdeasList from './components/IdeasList';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import './css/style.css';
import { getIdeas } from './utils/apiCalls';

const modal = new Modal();
const inputForm = new InputForm();

(async () => {
  const result = await getIdeas();
  if (!result) {
    return;
  }

  const ideasList = new IdeasList(result.data);
  ideasList.render();
})();

inputForm.render();
