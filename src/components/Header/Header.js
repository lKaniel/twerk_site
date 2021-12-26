import React from 'react';
import * as classes from "./Header.module.scss";
import {StaticImage} from "gatsby-plugin-image";

const Header = () => {
    return (
        <section className={classes.Header}>
            <div className={classes.HeaderInner}>
                <h2>
                    Заняття з тверку
                </h2>
                <p>
                    Від Юлії фівоалфіовало віоа оао аоа оао
                </p>
                <p>
                    Ексклюзивні танці тфівлаоловал
                </p>
                <p>
                    Ще щось дуже цікаве
                </p>
            </div>
            <StaticImage
                src={"../../assets/images/header.jpg"}
                alt={"Main banner"}
                className={classes.HeaderImg}
                placeholder={"tracedSVG"}
                layout={"fullWidth"}
            />
        </section>
    );
};

export default Header;