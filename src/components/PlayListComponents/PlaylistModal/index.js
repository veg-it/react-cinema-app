import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { addWatchlist, authenticate } from '../../../api/index'

function generateLogin() {
    const length = Math.floor(Math.random() * 3) + 6; // Generates a random number between 6 and 8
    let login = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        login += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return login;
}

function generatePassword() {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=';
    const length = 8;

    password += characters.charAt(Math.floor(Math.random() * characters.length)).toUpperCase();
    password += characters.charAt(Math.floor(Math.random() * characters.length)).toLowerCase();
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    for (let i = 4; i < length; i++) {
        let randSet = Math.floor(Math.random() * 3);
        switch(randSet) {
            case 0:
                password += characters.charAt(Math.floor(Math.random() * characters.length));
                break;
            case 1:
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                break;
            case 2:
                password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                break;
            default:
                break;
        }
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}


const Modal = ({ isOpen, handleClose, isGenerateMode, setGenerateMode }) => {
  const { register, handleSubmit, setValue, getValues } = useForm()
  const [error, setError] = useState(null)

  const onSubmit = async (data, event) => {
    if (event) event.preventDefault();

    if (isGenerateMode) {
      try {
        const response = await addWatchlist(data)
        setValue('name', '')
      } catch (err) {
        setError('Failed to add watchlist') 
      }
    } else {
      try {
        const response = await authenticate(data)
        if (response.error) {
          setError(response.error)
        } else {
          handleClose()
        }
      } catch (err) {
        setError('Failed to authenticate')
      }
    }
  }


  const handleGenerate = () => {
    const login = generateLogin()
    const password = generatePassword()
    setValue('login', login)
    setValue('password', password)
    setGenerateMode(false)

    // Sending request to add watchlist after generation
    const list_name = getValues('name')
    if (list_name) {
      onSubmit({ list_name, login, password })
    }
  }


  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="p-6 mx-4 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0">
          <h1 className="text-2xl font-bold">Додати список</h1>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full p-2 mb-4 border rounded"
              {...register('name')}
              placeholder="Назва списку"
              disabled={!isGenerateMode}
            />
            <input
              className="w-full p-2 mb-4 border rounded"
              {...register('login')}
              placeholder="Login"
              disabled={isGenerateMode}
            />
            <input
              className="w-full p-2 mb-4 border rounded"
              {...register('password')}
              type="password"
              placeholder="Password"
              disabled={isGenerateMode}
            />
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="generate">Згенерувати новий</label>
              <input
                id="generate"
                type="checkbox"
                checked={isGenerateMode}
                onChange={() => setGenerateMode((prev) => !prev)}
              />
            </div>
            {isGenerateMode ? (
              <button
                type="button"
                className="px-4 py-2 text-white bg-indigo-500 rounded"
                onClick={handleGenerate}>
                Підтвердити
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-500 rounded"
                >
                Додати
              </button>
            )}
            {error && <p>{error}</p>}
          </form>
          <button
            onClick={handleClose}
            className="fixed top-0 right-0 m-6 text-2xl font-bold leading-none text-black opacity-50 hover:opacity-75 cursor-pointer">
            <span>&times;</span>
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
