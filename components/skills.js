import Modal from 'react-bootstrap/Modal';

function Skills(
    {
        show = false,
        handleClose,
        ...props
    }) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                centered
                show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        SKILLS
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body
                    style={{
                        maxHeight: 'calc(100vh - 300px)',
                        overflowY: 'scroll'
                    }}>
                    <p>
                        <strong>Prototype design:</strong>
                        <ul>
                            <li>Figma</li>
                        </ul>

                        <strong>Web User Interface:</strong>
                        <ul>
                            <li>React</li>
                            <li>Angular</li>
                            <li>TypeScript, HTML, CSS</li>
                        </ul>

                        <strong>Mobile:</strong>
                        <ul>
                            <li>React Native</li>
                        </ul>

                        <strong>API Design:</strong>
                        <ul>
                            <li>Springboot/Quarkus</li>
                            <li>Node.js (Express/Nest.js)</li>
                        </ul>

                        <strong>Database:</strong>
                        <ul>
                            <li>Sql (Postgres, DB2)</li>
                            <li>NoSql (DynamoDB, MongoDB, Firebase)</li>
                        </ul>

                        <strong>Authentication & Authorization:</strong>
                        <ul>
                            <li>JWT</li>
                            <li>OAuth</li>
                        </ul>

                        <strong>Search Engine Optimisation (SEO):</strong>
                        <ul>
                            <li>Server-side Randering (SSR)</li>
                            <li>Dynamic Meta Tag and Title</li>
                        </ul>

                        <strong>Cloud Services:</strong>
                        <ul>
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Google cloud</li>
                        </ul>

                        <strong>DevOps Skills:</strong>
                        <ul>
                            <li>Containerization & Virtualization – Using Docker and Kubernetes.</li>
                            <li>CI/CD – Implementing pipelines with tools like Jenkins, Bamboo, and Github Actions.</li>
                        </ul>

                        <strong>Other Essential Skills:</strong>
                        <ul>
                            <li>Agile Development – Working with Scrum or Kanban methodologies.</li>
                            <li>Problem solving – Ability to break down complex problems and create efficient
                                solutions.
                            </li>
                            <li>Collaboration and Communication – Working with cross-functional teams.</li>
                        </ul>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Skills;