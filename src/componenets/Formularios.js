import { Box } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  fone: yup.string().required('O telefone é obrigatório').matches(/^\d+$/, 'O telefone é inválido'),
  email: yup.string().email('E-mail inválido').required('O E-mail é obrigatório'),
  cpf: yup.string().required('O CPF é obrigatório'),
  estado: yup.string().required('Estado é obrigatório'),
});


function App() {

  const [name, setName] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [estado, setEstado] =useState('');
  const [errors, setErrors] = useState({});


  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      await schema.validate({name, fone, email, cpf, estado}, {abortEarly: false});
      console.log('formulário válido');
      setErrors({});

      console.log(name);
      console.log(fone);
      console.log(email);
      console.log(cpf);
      console.log(estado);
      

    }catch (errors){
      console.log('formulário inválido');
      const formattedErrors ={};
      errors.inner.forEach((error)=>{
        formattedErrors[error.path]=error.message;
      });
      setErrors(formattedErrors);
    }
  };

  
  
  return (
    <div className="App">      
      <Box
      component="form" onSubmit={handleSubmit}
      backgroundColor='yellow'
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },        
        
      }}
      noValidate
      autoComplete="off"
    >
      {errors.name && <p>{errors.name}</p>}
      <TextField required fullWidth id="outlined-basic" label="Nome"
       variant="outlined"  onChange={(e)=>setName(e.target.value)} />
       
       {errors.fone && <p>{errors.fone}</p>}
     <TextField required fullWidth id="outlined-basic" label="Telefone"
       variant="outlined"  onChange={(e)=>setFone(e.target.value)} />
       
       {errors.email && <p>{errors.email}</p>}
      <TextField required fullWidth id="outlined-basic" label="E-mail"
       variant="outlined"  onChange={(e)=>setEmail(e.target.value)} />
       
       {errors.cpf && <p>{errors.cpf}</p>}
       <TextField required fullWidth id="outlined-basic" label="CPF"
       variant="outlined"  onChange={(e)=>setCpf(e.target.value)} />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Estado</InputLabel>
        <Select
          labelId="select-label-id"
          id="simple-select"
          value={estado}
          label="Estado"
          onChange={(e)=>setEstado(e.target.value)}
        >
          <MenuItem value={'go'}>Goiás</MenuItem>
          <MenuItem value={'df'}>Distrito</MenuItem>
          <MenuItem value={'sp'}>São Paulo</MenuItem>
        </Select>
      </FormControl>
    </Box>
       

        <Stack direction="row" spacing={2}> 
            <Button type='submit' variant="contained" endIcon={<SendIcon />}>
            Enviar
      </Button>
        </Stack>
    
     </Box>
    </div>

    
  );
}

export default App;