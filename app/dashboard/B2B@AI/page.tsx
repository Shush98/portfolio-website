import { projectsData } from "@/lib/data";

// const ProjectProps = (typeof projectsData)[number];

export default function Page() {

    const filteredData = projectsData.filter((item)=>(item.id=='B2B@AI'))

    return (
    <div>
    {/* {projectsData.filter((item)=>(item.id===''))}     */}
    {/* <p className="flex flex-col items-center"> */}
        {filteredData.map((item,index)=>(
        <div>
        <li key={index}>{item.title}</li>
        <li key={index}>{item.description}</li>
        </div>
        ))}
        
    {/* </p> */}
    </div>
    );
  }