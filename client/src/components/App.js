import React from 'react';
import { Router, Route } from 'react-router-dom';
import NoteCreate from './notes/NoteCreate';
import NoteDelete from './notes/NoteDelete';
import NoteEdit from './notes/NoteEdit';
import NoteList from './notes/NoteList';
import NoteShow from './notes/NoteShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='container'>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={NoteList} />
          <Route path='/notes/new' exact component={NoteCreate} />
          <Route path='/notes/edit/:id' exact component={NoteEdit} />
          <Route path='/notes/delete/:id' exact component={NoteDelete} />
          <Route path='/notes/show/:id' exact component={NoteShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
