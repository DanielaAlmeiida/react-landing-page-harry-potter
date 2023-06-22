import './Footer.css'

const Footer = () => {
    return <footer className='footerLogo'>
        <div>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>

        <img src='../images/logo.png' alt=''></img>
        
        <p>Desenvolvido por Alura.</p>
    </footer>
}

export default Footer;