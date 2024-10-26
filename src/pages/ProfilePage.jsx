import "./ProfilePage.css";
import {Footer} from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";

export const ProfilePage = () => {
    const hobies = ["Reading", "Swimming", "Running", "Cycling"];
    return (
        <>
            <Header title={"Customer Profile Page"} />

            <div className="profile-card">
                <h2>Customer Profile</h2>
                <p><strong>First Name:</strong> John</p>
                <p><strong>Last Name:</strong> Doe</p>
                <p><strong>Address:</strong> 123 Main St, Springfield</p>
                <p><strong>Email:</strong> john.doe@example.com</p>

                <p className="section-title">Communication Preferences</p>
                <ul>
                    <li>Email: Subscribed</li>
                    <li>Phone: Subscribed</li>
                    <li>SMS: Not Subscribed</li>
                </ul>

                <p className="section-title">Hobbies</p>
                <ul>
                    {hobies.map((hobby, index) => (
                        <li key={index}>
                            {index+1} - {hobby}
                        </li>
                    ))}
                </ul>
            </div>

            <Footer/>
        </>
    )
}
