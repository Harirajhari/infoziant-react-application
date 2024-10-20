import "./css/ConsultationForm.css"
import { useState } from "react";


export default function ConsultationForm(){
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: ''
});

// Handle input changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
};

return(
    <div className="consultation-section">
    <div className="consultation-container">
            <h1 className="form-title">Get A Quick Consultation</h1>
            <p className="form-desc">
                Are you looking for a solution to a confusing security issue? Ask our customer service team for assistance right away.
            </p>
            <form onSubmit={handleSubmit} className="consultation-form">
                <div className="form-row">
                    <div className="form-left">
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <select
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Services</option>
                                <option value="Service1">Managed Security Services</option>
                                <option value="service2">Vulnerability Assessment / Penetration testing</option>
                                <option value="service3">Cloud Security</option>
                                <option value="service4">Infrastructure Security Assessment</option>
                                <option value="service5">Mobile Security Assessment</option>
                                <option value="service6">Auditing</option>
                                <option value="service7">Security Incident, Event Management and Threat Intelligence</option>
                                <option value="service8">Email Protection System</option>
                                <option value="service9">Application Security</option>
                            </select>
                        </div>
                    </div>
                </div>
                <textarea
                    name="message"
                    placeholder="Enter message*"
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit" className="submit-button">Submit the Request</button>
            </form>
        </div>
        </div>
)

}
        
    