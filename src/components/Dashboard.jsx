import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CompanyDashboard() {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [requirements, setRequirements] = useState('');
    const [projects, setProjects] = useState([]);

    const handleAddProject = (event) => {
        event.preventDefault();
        if (projectName && requirements) {
            setProjects([...projects, { projectName, requirements }]);
            setProjectName('');
            setRequirements('');
        }
    };
    console.log(Cookies.get('islogin'))
    const all_project = [
        { projectName: 'Website Redesign', requirements: 'Redesign the corporate website with a new look.' },
        { projectName: 'Mobile App Development', requirements: 'Develop a mobile app for e-commerce.' },
    ];
    return (
        <>
            {Cookies.get('user_type') == 'Company'?<>
                <div className="container">
                    <section className="py-5">
                        <h2 className="text-center mb-4">Company Dashboard</h2>
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-primary text-white">
                                <h3 className="mb-0">Add a New Project</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleAddProject}>
                                    <div className="mb-3">
                                        <label htmlFor="projectName" className="form-label">Project Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projectName"
                                            placeholder="Enter project name"
                                            value={projectName}
                                            onChange={(e) => setProjectName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="projectType" className="form-label">Project Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projectType"
                                            placeholder="Enter project Type"
                                            value={projectName}
                                            onChange={(e) => setProjectType(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="requirements" className="form-label">Requirements</label>
                                        <textarea
                                            className="form-control"
                                            id="requirements"
                                            rows="4"
                                            placeholder="Enter project requirements"
                                            value={requirements}
                                            onChange={(e) => setRequirements(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Project</button>
                                </form>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-header bg-success text-white">
                                <h3 className="mb-0">Projects Overview</h3>
                            </div>
                            <div className="card-body">
                                {projects.length > 0 ? (
                                    <ul className="list-group">
                                        {projects.map((project, index) => (
                                            <li key={index} className="list-group-item">
                                                <h4>{project.projectName}</h4>
                                                <h4>{project.projectType}</h4>
                                                <p>{project.requirements}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No projects added yet.</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </>
            :
            <>
                <div className="container">
                    <section className="py-5">
                        <h2 className="text-center mb-4">Seller Dashboard</h2>

                        <div className="card shadow-sm">
                            <div className="card-header bg-info text-white">
                                <h3 className="mb-0">Available Projects</h3>
                            </div>
                            <div className="card-body">
                                {projects.length > 0 ? (
                                    <ul className="list-group">
                                        {all_project.map((project, index) => (
                                            <li key={index} className="list-group-item">
                                                <h5>{project.projectName}</h5>
                                                <p>{project.requirements}</p>
                                                <a href="#start-negotiation" className="btn btn-primary">Start Negotiation</a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No projects available at the moment.</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </>}
            
        </>

    );
}

export default CompanyDashboard;
