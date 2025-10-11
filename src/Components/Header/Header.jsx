import { format } from 'date-fns';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="center">
            <section className='flex justify-center py-5'>
                <img src={logo} alt="logo" />
            </section>
            <p className="text-center">Journalism Without Fear or Favour</p>
            <p className="text-center">{format(new Date(), "EEEE, MMMM QQ, yyyy")}</p>
        </div>
    );
};

export default Header;