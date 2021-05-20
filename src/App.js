import React from 'react';
import './style.css';
import EventBind from './eventBind';
import ParentComponent from './ParentComponent'

export default function App() {
  return (
    <div>
      {/* <EventBind name="gagan" /> */}
      <ParentComponent/>
    </div>
  );
}
