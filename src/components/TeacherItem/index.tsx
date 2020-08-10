import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/11357308?s=460&u=5390b306161ba190fc327cd8934f8a07060d9be7&v=4" alt="Photo" />
                <div>
                    <strong>Xavero</strong>
                    <span>Maths</span>
                </div>
            </header>
            <p>
                Short Title
                        <br /><br />
                        Description
                    </p>

            <footer>
                <p>
                    Price/Hour
                            <strong>$ 20.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Get in Touch
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;