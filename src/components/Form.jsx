import {InputText} from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';


import React, {useState} from "react";

export default function Form() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div >
      <div className="flex w-25rem flex-column gap-2">
        <label htmlFor="title">Title</label>
        <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)}  />
      </div>
      <div className="flex w-25rem flex-column gap-2 text-center">
        <label htmlFor="desc">Description</label>
        <InputTextarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}  cols={40} />
      </div>
      <div className="flex w-25rem flex-column gap-2 text-center">
        <label htmlFor="date">Date</label>
        <Calendar value={date} onChange={(e) => setDate(e.value)} />
      </div>
    </div>
  )
}
