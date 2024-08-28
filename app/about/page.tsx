import Link from "next/link";

export default function Page(){
    return (
    <div className="flex w-full h-full">
        <div className="flex w-full h-full flex-col mx-20 my-10 min-w-md">
            <h1>About</h1>
            <div className="flex text-lg">
                <p className="flex font-bold">
                    <br />See below for a brief introduction about myself.
                    Also, please contact me via linkedin, email, or phone through the 
                    icons at the footer.
                </p>
            </div>

            {/* Content */}
            <div className="flex h-full w-full flex-col my-10 gap-5">
                <div><h2>Education</h2>
                    <p className="mx-10">Graduated May 2024 from the 
                        <a href="https://www.utdallas.edu/" className="text-blue-600"> University of Texas at Dallas</a>.
                        <br/>
                        B.S. in Biomedical Engineering with GPA 3.77/4.0.
                    </p>
                </div>

                {/* Lab Experience */}
                <div><h2>Laboratory Experience</h2>
                    {/* NNIL */}
                    <p className="mx-10">Worked as an <b>Undergraduate Researcher</b> at the 
                        <a href="https://labs.utdallas.edu/nnil/" className="text-blue-600"> Neuronal Networks and Interfaces Laboratory</a>.
                        
                        <br/>
                        <u>Publication:</u> Jeakle, E. N., et. al. (2023). Chronic stability of local 
                        field potentials using amorphous silicon carbide microelectrode arrays 
                        implanted in the rat motor cortex. <em>Micromachines</em>, 14(3), 680. 
                        <a href="https://doi.org/10.3390/mi14030680" className="text-blue-600"> https://doi.org/10.3390/mi14030680</a>.
                        
                        {/* UT summer 2018 */}
                        <br/><br/>
                            Worked as a <b>Research Assistant Intern</b> at UT Austin, under the 
                            Practical Molecular Sensors stream of the 
                            <a href="https://fri.cns.utexas.edu" className="text-blue-600"> Accelerated Research Initiative </a> 
                            program during the summer of 2018.
                    </p>
                </div>
                
                {/* Projects both personal and college */}
                <div><h2>Projects</h2>
                    {/* Capstone */}
                    <p className="mx-10"><b>Bleeding Control Trainer with Augmented Reality 
                        Interface</b>
                        <br/>AR training device for treating traumatic hemorrhage. Sponsored 
                            by Dr. Gilberto Salazar from
                            <a href="https://www.utsouthwestern.edu/" className="text-blue-600"> UTSW Medical Center</a>.
                        <br/>
                            Project Manager- Microsoft Project, Work Breakdown Structure, risk matrices
                            <br/>
                            Programmer- Unity, C#, Github for collaboration.
                        <br/><br/>

                        {/* ML tumor detection */}
                        <b>Brain Tumor Detection using Machine Learning</b>
                        <br/>Brain MRI image analysis project for the Biomedical Image Processing course.
                        <br/>
                            Utilized MATLAB and MRI image database on 
                            <a href="https://kaggle.com" className="text-blue-600"> kaggle.com</a>.
                        <br/><br/>

                        {/* Wifi extender */}
                        <b>Wi-Fi Signal Extender for home useage</b>
                        <br/>Linux-based Wi-Fi signal extender made for my parents.
                        <br/>
                            Made with Raspberry Pi Zero W and an additional Wi-Fi port. Non-GUI 
                            lightweight Linux installed, and wrote a bash file that transports Wi-Fi signal 
                            from one port to the other.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}