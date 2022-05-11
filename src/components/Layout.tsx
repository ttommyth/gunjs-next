import React from "react";

export const Layout = (props: React.PropsWithChildren<{}>) => {
    return <div  data-theme="myDarkTheme">
    {props.children}
    </div>
}