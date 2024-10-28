import "./EditProfilePage.css";
import {Footer} from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";
import {useState} from "react";
import userEvent from "@testing-library/user-event";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const EditProfilePage = () => {
    console.log("EditProfilePage s'affiche");
    /**
     * useState c'est un hook, un hook wahd l fonction kat3tihalk react kadir chi haja
     * f had lhala useState kat3tihalk variable w valeur par defaut
     * w kat3tihalk fonction pour changer la valeur de cette variable
     */
    const [ageState,setAgeState] = useState(25)
    const [firstnameState,setFirstnameState] = useState("mouad")
    const [lastnameState,setLastname]=useState("elrhourha");
    const [adresseState,setAdresse]=useState("123 Main St, Springfield")
    const [emailState,setEmail]=useState("john.doe@example.com");
    const [checkedEmailState, setCheckedEmail]=useState(false);
    const [checkedPhoneState , setCheckedPhone]=useState(false);
    const [checkedSmsState , setCheckedSms]=useState(false);
    const [submitState , setSubmit]=useState(false);
        
    const shouldDisplayComMessage =(checkedEmailState && checkedPhoneState && checkedSmsState); 

 


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

    const onLastnamechange=(event)=>{
         setLastname(event.target.value);
    }

    const onAdressechange = (event)=>{
        setAdresse(event.target.value)
    }

    const onEmailchange=(event)=>{
    setEmail(event.target.value)
    }

    const checkedEmailchange = (event)=>{
        console.log(event.target.checked);
        setCheckedEmail(event.target.checked)
    }

    const oncheckedPhonechange=(event)=>{
        setCheckedPhone(event.target.checked)
        }
    const oncheckedSmschange=(event)=>{
            setCheckedSms(event.target.checked)
            }
            
    const onSubmitchange = (event)=>{     
        event.preventDefault();   
        setSubmit(true)
        console.log("soumis");
        
        
    }


    

   return (
        <>
            <Header title={"Edit Customer Profile"} />

            <form className="edit-form" onSubmit={onSubmitchange}>
                <h2>Edit Customer Profile</h2>

                <label htmlFor="first-name">First Name</label>
                <p>Le nom saisie c'est: {firstnameState}</p>
                <input type="text" id="first-name" name="first-name" value={firstnameState} onChange={onFirstnameChange} />

                <label htmlFor="last-name">Last Name</label>
                <p>le prenom saisie c'est :  {lastnameState.toLocaleUpperCase()}</p>
                <input type="text" id="last-name" name="last-name" value={lastnameState} onChange={onLastnamechange} />

                <label htmlFor="address">Address</label>
                <p> l'adresse saisie c'est : {adresseState} </p>
                <input type="text" id="address" name="address" value={adresseState} onChange={onAdressechange}/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={ageState} onChange={onAgeChanged} />
                <p>Votre age est : {ageState}</p>

                <label htmlFor="email">Email</label>
                <p> l'email saisie c'est : {emailState} </p>
                <input type="email" id="email" name="email" value={emailState} onChange={onEmailchange}/>

                <label>Communication Preferences</label>
                <div className="checkbox-group">
                    <input type="checkbox" id="email-pref" name="communication" checked={checkedEmailState} onChange={checkedEmailchange}/>
                    <label htmlFor="email-pref">Email</label>

                </div>

                <div className="checkbox-group">
                    <input type="checkbox" id="phone-pref" name="communication"   checked={checkedPhoneState} onChange={oncheckedPhonechange} />
                    <label htmlFor="phone-pref">Phone</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="sms-pref" name="communication" checked={checkedSmsState} onChange={oncheckedSmschange} />
                    <label htmlFor="sms-pref">SMS</label>
                    
                </div>
                <p> {shouldDisplayComMessage?"nous allons communiquer avec vous via toutes les méthodes":null} </p>

                

                <button type="submit" >Save Changes</button>
                {submitState && (
                    <div>
                    <p>  {firstnameState} </p>
                    <p>  {lastnameState} </p>
                    <p>  {adresseState} </p>
                    <p>  {ageState} </p>
                    <p>  {emailState} </p>
                    <p>{checkedEmailState&& "Email"} </p>
                    <p>{checkedPhoneState&& "Phone"} </p>
                    <p>{checkedSmsState&& "Sms"} </p>


                    </div>
                    )}

                
            </form>
            <Footer/>
        </>
    )
}



