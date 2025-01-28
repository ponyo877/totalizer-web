import LocalSvg from "../assets/local.svg";
import GlobaSvg from "../assets/global.svg";
import { JSX } from "react";

export const LocalIcon: JSX.Element = <img
    className="avatar"
    src={LocalSvg}
    alt={'local'}
    style={{
        width: 27,
        height: 27,
    }}
/>;

export const GlobalIcon: JSX.Element = <img
    className="avatar"
    src={GlobaSvg}
    alt={'global'}
    style={{
        width: 32,
        height: 27,
    }}
/>;