
//useState

const [name, setName] = useState('');
const [email, setEmai] = usesState('');
const [password, setPassword] = usesState('');

const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
}

const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
}

//fix

cosnt [form, setForm] = useState

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
}