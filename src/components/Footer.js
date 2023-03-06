import React from 'react'

export default function Footer(){
    return(
        <footer>
            <ul className='icons'>
                <li className='images'>
                    <a href='https://github.com/Alasow2001'>
                        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='My Github Page'/>
                    </a>
                </li>

                <li className='images'>
                    <a href='https://www.linkedin.com/in/ahmed-alasow-80b678215/'>
                        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='My LinkedIn Profile'/>
                    </a>
                </li>
            </ul>

            <div className='footerText'>All rights reserved &copy; Your Name</div>
        </footer>
    )
}