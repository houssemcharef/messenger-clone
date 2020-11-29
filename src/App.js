import { Button, FormControl, Input,InputLabel } from '@material-ui/core';
import React,{ useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id:doc.id, message: doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt("enter user name"));
  },[])
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="app">
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="enter message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl> 
      </form>
      <FlipMove>
        {
          messages.map(({message, id}) => ( 
            <Message key={id}  message={message} username={username}/>
            ))
        }
      </FlipMove>
    </div>

    
  );
}

export default App;
