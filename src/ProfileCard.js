import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaMapMarkedAlt, FaEnvelope, FaPhoneAlt} from "react-icons/fa";

const ProfileCard = ({details}) => {
    return (
        <Card className="card">
            <CardBody className="text-center">
                <img height="150" width="150" 
                className="rounded-circle img-thumbnail border-secondary"
                src={details.picture?.large} />
                <CardTitle className="text-light">
                <h2>
                    <span className="me-2">{details.name?.title}</span>
                    <span className="me-2">{details.name?.first}</span>
                    <span className="me-2">{details.name?.last}</span>
                </h2>
                </CardTitle>
                <CardText>
                    <p><FaMapMarkedAlt className="me-2" />{details.location?.city}, {details.location?.state}, {details.location?.country}</p>
                    <p><FaPhoneAlt className="me-2"/>{details.phone}</p>
                    <p><FaEnvelope className="me-2"/>{details.email}</p>
                    <p>Age {details.dob?.age}</p>
                </CardText>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;