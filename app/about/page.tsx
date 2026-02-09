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
                    <p className="mx-10">
                        M.S. in Biomedical Engineering, GPA 4.0/4.0. Expected graduation Dec. 2026.
                        <br/>
                         - <b>University of Texas at Dallas</b>, Richardson, TX.
                        <br/><br/>
                        B.S. in Biomedical Engineering, GPA 3.77/4.0. Graduated May 2024.
                        <br/>
                         - <b>University of Texas at Dallas</b>, Richardson, TX.
                    </p>
                </div>
                
                {/* Projects both personal and college */}
                <div><h2>Projects</h2>
                    <p className="mx-10">
                        {/* Capstone */}
                        <b>Deep Learning Model for Age Prediction with Brain MRI</b>
                        <br/>
                            Collaborative work with Dr. Joseph Maldjian and Dr. Kuan Zhang from
                            <a href="https://www.utsouthwestern.edu/" className="text-blue-600"> UTSW Medical Center</a>.
                        <br/>
                            PyTorch implementation of DenseNet model for age prediction using 3D brain MRI volumes.
                        <br/>
                            Achieved Mean Absolute Error of <i>5.0 years</i>.
                        <br/><br/>

                        {/* Capstone */}
                        <b>Bleeding Control Trainer with Augmented Reality Interface</b>
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

                        {/* Accessories */}
                        <b>Personal Servers and Accessories</b>
                        <br/>
                            Wi-Fi signal extender made for my parents from RaspberryPi Zero W.
                        <br/>
                            Installed Ubuntu Server on old laptop for hosting home entertainment.
                        <br/>
                    </p>
                </div>

                {/* Experience */}
                <div><h2>Experience</h2>
                    <p className="mx-10">
                        {/* NNIL */}
                            <b><a href="https://txbdc.utdallas.edu/" className="text-blue-600">Texas Biomedical Device Center</a></b>, UT Dallas
                            <br/>
                            <i>Software Developer, Research Assistant</i>. Mar. 2025 - Present.
                            <br/>
                            Python-based full stack development of nerve stimulation system used in laboratory research. Utilized ZeroMQ, Pyside6, PyQtGraph.

                        {/* NNIL */}
                        <br/><br/>
                            <b><a href="https://labs.utdallas.edu/nnil/" className="text-blue-600"> Neuronal Networks and Interfaces Laboratory</a></b>, UT Dallas
                            <br/>
                            <i>Research Assistant</i>. Aug. 2021 - May 2024.
                            <br/>
                            Performed in vivo neurophysiology studies on rodent motor cortex, including neural recordings, neural signal sorting, and analysis.
                            <br/>
                            <u>Publication:</u> Jeakle, E. N., et. al. (2023). Chronic stability of local 
                            field potentials using amorphous silicon carbide microelectrode arrays 
                            implanted in the rat motor cortex. <em>Micromachines</em>, 14(3), 680. 
                            https://doi.org/10.3390/mi14030680.
                        
                        {/* UT summer 2018 */}
                        <br/><br/>
                            <b><a href="https://fri.cns.utexas.edu" className="text-blue-600"> Accelerated Research Initiative </a></b>, UT Austin
                            <br/>
                            <i>Research Intern</i>. Jun. 2018 - Aug. 2018.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}