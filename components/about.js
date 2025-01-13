import Modal from 'react-bootstrap/Modal';

function About(
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
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        WHO AM I?
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        I am a <strong>Full Stack Developer </strong>
                        with a strong academic foundation in computer science and
                        over <strong>8 years of experience</strong> in software development, I specialize in using cutting-edge technologies,
                        such as <strong>Spring/Quarkus/Node.js</strong> for high-performance backends, <strong>Angular/React</strong>
                        for intuitive user interfaces,
                        and <strong>React Native</strong> for mobile development. My expertise extends across the full development lifecycle,
                        from system design to deployment, ensuring seamless integration and user satisfaction.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default About;