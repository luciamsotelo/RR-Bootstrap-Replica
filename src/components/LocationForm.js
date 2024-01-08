// LocationForm.js
import React from "react";
import { Form, Button } from "react-bootstrap";

const LocationForm = () => {
    return (
        <div className="bg-image">
            <Form className="location-form">
                {/* Add form elements, e.g., input fields and buttons */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LocationForm;
