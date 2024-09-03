import '@fortawesome/fontawesome-free/css/all.css';
import IdeasList from './components/IdeasList';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import './css/style.css';
import { getIdeas } from './utils/getData';

const modal = new Modal();
const inputForm = new InputForm();
inputForm.render();

async function getData() {
  try {
    const result = await getIdeas();
    const ideasList = new IdeasList(result.data);
    ideasList.render();
  } catch (error) {
    console.log('Error:', error);
  }
}

getData();
