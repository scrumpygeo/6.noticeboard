import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NoteCreate from './notes/NoteCreate';
import NoteDelete from './notes/NoteDelete';
import NoteEdit from './notes/NoteEdit';
import NoteList from './notes/NoteList';
import NoteShow from './notes/NoteShow';
import Header from './Header';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={NoteList} />
          <Route path='/notes/new' exact component={NoteCreate} />
          <Route path='/notes/edit' exact component={NoteEdit} />
          <Route path='/notes/delete' exact component={NoteDelete} />
          <Route path='/notes/show' exact component={NoteShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
