import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import Home from "../pages/Home";

const Breadcrump = () => {
    const location = useLocation();
    const pathArr = location.pathname.split("/");
    const filteredArr = pathArr.filter((path) => path !== "");

    return (
        <div>
            <Breadcrumbs separator={"/"} className=" w-full max-w-[1440px] mx-auto">
                <Link className="text-gray-900" to="/">
                    Bosh sahifa
                </Link>
                {filteredArr.map((path, index) => {
                    return (
                        <Link key={index} to={"/" + path} className="text-gray-900">
                            {path}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrump;
