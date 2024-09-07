import '@fortawesome/fontawesome-free/css/all.css';
import IdeasList from './components/IdeasList';
import InputForm from './components/InputForm';
import Modal from './components/Modal';
import './css/style.css';

new Modal();
const inputForm = new InputForm();
inputForm.render();
new IdeasList();
