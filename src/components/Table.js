import React, { useEffect, useState } from 'react';


const Tabla = ( {name, setName, bandera, setBandera, description, setDescription, btnName, setBtnName, setId} ) => {
    const [projects, setProjects] = useState([]);
    
    const getAllProjects = async () => {

        try {
            const res = await fetch('http://localhost:5000/projects');
            const json = await res.json();
    
            //if( res.ok ) console.table(json); // comprobamos las consulta exitosa.
            
            setProjects(json);

        } catch (error) {
            console.log( error );
        }    
    }

    const handleEdit = ( pr ) => {

        //console.log(pr);
        
        setName(pr.name);
        setDescription(pr.description);
        setId(pr.id)

        setBtnName('Update');

    };
    const handleDelete = async ( id ) => {
        const res = await fetch(`http://localhost:5000/projects/${ id }`, {
            method: 'DELETE'
        });
        const data = await res.json();
        
        //console.log(data);
        getAllProjects();
    };

    useEffect(() => {
        getAllProjects();
    },[bandera]);

    return(
        <div className="container col-md-10">
            <table className='table table-striped my-4'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Project</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {projects.map(( project )=> (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>
                                <button 
                                    className='btn btn-danger mx-2'
                                    onClick={() => handleDelete(project.id) }>
                                        delete
                                </button>
                                <button 
                                    className='btn btn-secondary'
                                    onClick={ () => handleEdit(project) }>edit</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>

            </table>
        </div>
    );
    

}
export default Tabla;