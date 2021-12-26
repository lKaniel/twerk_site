import React from 'react';
import * as classes from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.NavbarCenter}>
                <div className={classes.Logo}>
                    <span>Julia</span>Twerk
                </div>
                <ul className={classes.LinksList}>
                    <li>
                        <a href={"/"}>
                            Заняття
                        </a>
                    </li>
                    <li>
                        <a href={"/"}>
                            інфо
                        </a>
                    </li>
                    <li>
                        <a href={"/"}>
                            Про мене
                        </a>
                    </li>
                    <li>
                        <a href={"/"}>
                            Новини
                        </a>
                    </li>
                    <li>
                        <a href={"/"}>
                            Контакти
                        </a>
                    </li>
                </ul>
                <div className={classes.EndWrap}>
                    <button className={classes.EndButton}>
                        Записатися
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;