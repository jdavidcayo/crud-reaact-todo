import React from 'react'

const Form = ( {name, setName, bandera, setBandera, description, setDescription, btnName, setBtnName, id, setId} ) => {
    
    const handleSubmit = async( event ) => {
        event.preventDefault();
        
        if(btnName === 'Add'){
            await fetch('http://localhost:5000/projects', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( { name,
                                        description
                })
            });
        }else {
            //console.log(id);
            await fetch(`http://localhost:5000/projects/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( { name,
                                        description
                })
            });
            setBtnName('Add');
        }


        setBandera(!bandera);
        setName('');
        setDescription('');
    };
    
    const onChangeName = (e) => {
        setName( e.target.value )
    }

    const onChangeDescription = (e) => {
        setDescription( e.target.value )
    }

    return (
        <div className="row bg-secondary bg-gradient p-4">
            <div className="container col-md-6">
            <form className='form card card-body mx-6' onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input 
                        type="text" 
                        onChange={ onChangeName } 
                        value={name} 
                        className="form-control my-1"
                        placeholder='Nombre del proyecto' 
                        autoFocus/>

                        <input 
                        type="text" 
                        onChange={ onChangeDescription } 
                        value={description} 
                        placeholder='Descripción' 
                        className="form-control my-1" 
                        />
                </div>
                <button className='btn btn-primary btn-block' type='submit'>{ btnName }</button>
            </form>
            </div>
        </div>
    )
}

export default Form;