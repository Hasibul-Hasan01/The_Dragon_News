import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="center">
            <section className='flex justify-center py-5'>
                <img src={logo} alt="logo" />
            </section>
            <p className="text-center">Journalism Without Fear or Favour</p>
            <p className="text-center">Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;