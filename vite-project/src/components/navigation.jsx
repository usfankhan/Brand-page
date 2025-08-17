const Navigation =() => {
    return(
        <nav className="container">
            <div className="logo">
            <img src="/images/logoo.jpg" alt="Logo" height={50} />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button>Login</button>
      </nav>
    );
};

export default Navigation;