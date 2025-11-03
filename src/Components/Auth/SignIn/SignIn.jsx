import { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const SignIn = () => {
    const [showError, setShowError] = useState('');
    const [success, setSuccess] = useState(false);
    const { signInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setShowError('');
        setSuccess(false);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    setSuccess('User Login Successfully.')
                }
            })
            .catch(error => {
                setShowError(error.message);
            })

    }
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 col-start-2 bg-[#E9E8E8] rounded-2xl mt-25'>
                <header>
                    <h1 className='text-center font-bold text-2xl mb-10 mt-8'>Login Your Account Here..!</h1>
                </header>
                <main className='col-span-1 col-start-2 mx-6'>
                    <form onSubmit={handleSignIn}>
                        <input className='input input-info w-full mb-4' type="email" name="email" id="email" placeholder='example@gmail.com' />
                        <input className='input input-info w-full mb-4' type="password" name="password" id="password" placeholder='**********' />
                        {
                            showError &&
                            <div role="alert" className="alert alert-warning alert-soft mb-4">
                                <span>{showError}</span>
                            </div>
                        }
                        {
                            success &&
                            <div role="alert" className="alert alert-success alert-soft mb-4">
                                <span>{success}</span>
                            </div>
                        }
                        <button className='btn btn-neutral w-full mb-8' type="submit">Login</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default SignIn;