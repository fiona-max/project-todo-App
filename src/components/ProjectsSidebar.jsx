import { Button } from 'primereact/button';
import React from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

export default function ProjectsSidebar() {
     return (
       <div className="m-4" style={{ backgroundColor: '#2169af', color: 'white', width: '25rem', height: '45rem'}}>
         <h2 className="p-4">Your Projects</h2>
         <Button label="Add button" icon="pi pi-plus" severity={"secondary"} />
         <div className="pt-4 mt-4">
           <p>Learning React</p>
           <p>Mastering React</p>
         </div>
       </div>
     )
}
