import "./EditProfilePage.css";
import {Footer} from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";
import {useState} from "react";

export const EditProfilePage = () => {
    console.log("EditProfilePage s'affiche");
    /**
     * useState c'est un hook, un hook wahd l fonction kat3tihalk react kadir chi haja
     * f had lhala useState kat3tihalk variable w valeur par defaut
     * w kat3tihalk fonction pour changer la valeur de cette variable
     */
    const [ageState,setAgeState] = useState(25)
    const [firstnameState,setFirstnameState] = useState("mouad")
    /**
     * si la variable n'est state, react ne va pas re-render (actualiser) le composant
     * ça veut dire react makaydihach f les variables li machi state
     * @type {number}
     */
    let age=25;
    const onAgeChanged=(event)=>{
        console.log(`Age changed to: ${event.target.value}`);
        //setAge(event.target.value)
        //age=event.target.value;
        /**
         * c'est utilisé pour changer la valeur de la variable ageState
         */
        setAgeState(event.target.value)
    }

    /**
     * depuis le code vers l'interface: ghir t7el la page tban wahd l valeur par defaut, hia l value
     * soit kandiro l value f l input soit kandiro variable
      */

    /**
     * 2eme direction : depuis l'interface vers le code
     * l'utilisateur peut changer la valeur de l'input, et on veut récupérer cette valeur dans le code
     * pour ça on utilise les events
     */

    const onFirstnameChange = (event) => {
        setFirstnameState(event.target.value)
    }

    return (
        <>
            <Header title={"Edit Customer Profile"} />

            <form className="edit-form">
                <h2>Edit Customer Profile</h2>

                <label htmlFor="first-name">First Name</label>
                <p>Le nom saisie c'est: {firstnameState}</p>
                <input type="text" id="first-name" name="first-name" value={firstnameState} onChange={onFirstnameChange} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" value="Doe"/>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value="123 Main St, Springfield"/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={ageState} onChange={onAgeChanged} />
                <p>Votre age est : {ageState}</p>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value="john.doe@example.com"/>

                <label>Communication Preferences</label>
                <div className="checkbox-group">
                    <input type="checkbox" id="email-pref" name="communication" value="email" checked/>
                    <label htmlFor="email-pref">Email</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="phone-pref" name="communication" value="phone" checked/>
                    <label htmlFor="phone-pref">Phone</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="sms-pref" name="communication" value="sms"/>
                    <label htmlFor="sms-pref">SMS</label>
                </div>

                <button type="submit">Save Changes</button>
            </form>
            <Footer/>
        </>
    )
}
