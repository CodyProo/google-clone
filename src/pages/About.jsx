import React from "react";
import { useStore } from "../hooks/useStore";

const About = () => {
    const context = useStore();
    console.log(context);
    if (context.loading) {
        return <p>Loading</p>;
    }
    if (context.error) {
        return <p>Error</p>;
    }

    return <p>Salam :)</p>;

};

export default About;