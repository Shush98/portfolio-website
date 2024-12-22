import { projectsData } from "@/lib/data";

// const ProjectProps = (typeof projectsData)[number];

export default function Page() {

    const filteredData = projectsData.filter((item)=>(item.id=='MedChatbot@LLM'))

    return (
    <div>
    {/* {projectsData.filter((item)=>(item.id===''))}     */}
    {/* <p className="flex flex-col items-center"> */}
        {filteredData.map((item,index)=>(
        <div key={index}>
        <li>{item.title}</li>
        <li>{item.description}</li>
        </div>
        ))}
        
    {/* </p> */}
    </div>
    );
  }