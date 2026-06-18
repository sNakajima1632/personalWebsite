import Link from "next/link";

export default function Page(){
    return (
    <div className="flex w-full h-full">
        <div className="flex w-full h-full flex-col mx-20 my-10 min-w-md">
            <h1>About</h1>
            <div className="flex text-lg">
                <p className="flex font-bold">
                    <br />See below for a brief background
                </p>
            </div>


            {/* Content */}
            <div className="flex h-full w-full flex-col my-10 gap-5">
                {/* Education */}
                <div><h2>Education</h2>
                    <p className="mx-10">
                        <b>M.S. in Biomedical Engineering</b>, GPA 3.926/4.0. Expected graduation May 2027.
                        <br/>
                        University of Texas at Dallas
                        <br/>
                        <b>B.S. in Biomedical Engineering</b>, GPA 3.77/4.0. Graduated May 2024.
                        <br/>
                        University of Texas at Dallas
                    </p>
                </div>
                

                {/* Skills */}
                <div><h2>Technical Skills</h2>
                    <p className="mx-10">
                        {/* Tools */}
                            <b>Tools:</b> 3D CAD, FEBio, Meshlab, 3D Slicer, Gantt Chart

                        {/* ML */}
                        <br/>
                            <b>Machine Learning:</b> PyTorch, TensorFlow, MATLAB Deep Learning Toolbox
                        
                        {/* CS */}
                        <br/>
                            <b>Computer Language</b> Python MATLAB, Bash, Powershell, HTML, CSS, JavaScript
                    </p>
                </div>


                {/* Experience */}
                <div><h2>Experience</h2>
                    <div className="mx-10">
                        {/* TXBDC */}
                        <b><a href="https://txbdc.utdallas.edu/" className="text-blue-600">Texas Biomedical Device Center</a></b>, UT Dallas
                        <br/>
                        <i>Software Developer, Research Assistant</i>. Mar. 2025 - Present.
                        <ul>
                            <li>Developed a peripheral nerve stimulation device, enabling synchronized hardware communication, data analysis, and stimulation</li>
                            <li>Analyzed electromyography data of vocalization muscle, isolating motor unit signals along 64 channels</li>
                        </ul>

                        {/* NNIL */}
                        <br/>
                        <b><a href="https://labs.utdallas.edu/nnil/" className="text-blue-600"> Neuronal Networks and Interfaces Laboratory</a></b>, UT Dallas
                        <br/>
                        <i>Research Assistant</i>. Jan. 2021 - Mar. 2024.
                        <ul>
                            <li>Analyzed neural activity in rat motor cortex through implanted microelectrode arrays, improving signal stability and duration by 8-fold</li>
                            <li>Implemented Butterworth filter on neuronal data, reducing noise by 30%</li>
                            <li>Handled, habituated, anesthetized, and injected rats to observe change in collection of neuronal activity</li>
                        </ul>

                        {/* UT summer 2018 */}
                        <br/>
                        <b><a href="https://fri.cns.utexas.edu" className="text-blue-600"> Accelerated Research Initiative </a></b>, UT Austin
                        <br/>
                        <i>Research Intern</i>. Jun. 2018 - Aug. 2018.
                    </div>
                </div>


                {/* Projects both personal and college */}
                <div><h2>Projects</h2>
                    <div className="mx-10">
                        {/* Oura Sleep Study */}
                        <b>Sleep Structure Study Using Oura Ring</b>
                        <br/>
                        <ul>
                            <li>Analyzed continuous sleep structure data over 2 months period, resulting in machine learning models with R<sup>2</sup> of 0.74</li>
                            <li>Implemented an ETL pipeline on sleep structure data, reducing misdiagnosis of sleep stage by 70%</li>
                            <li>Deployed a predictive model to generate sleep debt data, increasing data volume by 8-fold</li>
                        </ul>
                        <br/>

                        {/* Brain Age Prediction */}
                        <b>Deep Learning Model for Age Prediction with Brain MRI</b>
                        <br/>
                        <i>Collaborative work with Dr. Joseph Maldjian and Dr. Kuan Zhang from
                            <a href="https://www.utsouthwestern.edu/" className="text-blue-600"> UTSW Medical Center</a>.</i>
                        <br/>
                        <ul>
                            <li>Developed a deep learning model that predicts age from brain MRI volume, resulting in accuracy of +/- 5 years</li>
                            <li>Implemented an end-to-end automated pipeline for data preparation, visual feature extraction, and regressorage prediction, 
                                enabling easy deployment and reproducibility</li>
                        </ul>
                        <br/>

                        {/* Capstone */}
                        <b>Bleeding Control Trainer with Augmented Reality Interface</b>
                        <br/>
                        <i>Capstone project sponsored by <a href="https://www.utsouthwestern.edu/" className="text-blue-600">UTSW Medical Center</a>.</i>
                        <br/>
                        <ul>
                            <li>Developed a Unity/C# based AR application for traumatic hemorrhage treatment training</li>
                            <li>Managed the team using Gantt chart and Work Breakdown Structure, reducing development timeline by 2 weeks</li>
                        </ul>
                    </div>
                </div>


                {/* Publications */}
                <div><h2>Publications</h2>
                    <p className="mx-10">
                        Jeakle, E. N., et. al. (2023). Chronic stability of local field potentials using amorphous silicon carbide microelectrode
                            arrays implanted in the rat motor cortex. Micromachines, 14(3), 680. <a href="https://doi.org/10.3390/mi14030680" className="text-blue-600">https://doi.org/10.3390/mi14030680</a>
                    </p>
                </div>


                {/* Additional Information */}
                <div><h2>Additional Information</h2>
                    <div className="mx-10">
                        {/* Eligibility */}
                            Eligible in the U.S. for internships & full-time - no restrictions

                        {/* Language */}
                        <br/>
                            English (native) and Japanese (native)
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}