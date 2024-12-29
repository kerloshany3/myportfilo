import ProjectCont from "@/app/components/ProjectCont";
import React from "react";


const page = ({ params }) => {


    const { id } = React.use(params);
   

   
    return (
       <ProjectCont id={id}></ProjectCont>
    )
}

export default page