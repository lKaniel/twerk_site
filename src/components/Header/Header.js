import React from 'react';
import * as classes from "./Header.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import Button from "../Button/Button";

const Header = () => {
    return (
        <section className={classes.Header}>
            <div className={classes.HeaderInner}>
                <div>
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
                    <Button>
                        Записатися
                    </Button>
                </div>
            </div>
            <StaticImage
                src={"../../assets/images/header.jpg"}
                alt={"Main banner"}
                className={classes.HeaderImg}
                placeholder={"tracedSVG"}
                layout={"fullWidth"}
                // aspectRatio={16/8}
            />
        </section>
    );
};

export default Header;
