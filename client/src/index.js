import '@fortawesome/fontawesome-free/css/all.css';
import DeleteIdea from './components/DeleteIdea';
import IdeasList from './components/IdeasList';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import './css/style.css';

new Modal();
const inputForm = new InputForm();
inputForm.render();
new IdeasList();
// const deleteIdea = new DeleteIdea();

// const ideaListElement = document.getElementById('idea-list');
// const event = new DeleteIdea(ideaListElement);
