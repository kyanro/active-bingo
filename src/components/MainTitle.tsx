/**
 * Created by ppp on 2016/07/28.
 */
import * as React from "react";

import * as style from "../../public/test.css";

export interface MainTitleProps {
    name: string;
}

export class MainTitle extends React.Component<MainTitleProps, {}> {
    render() {
        return <div className={style.myTitle}><h1>my title</h1></div>;
    }
}
