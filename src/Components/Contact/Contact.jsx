import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'


const Contact = () => {



    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0f1c48f8-32d9-4d6a-b91d-3cbbc849aed3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Reservation reussit!",
                text: "Tu as envoyer ta reservation!",
                icon: "success"
              });
        }
      };


  return (

        
    <section className="contact">
      
        <form onSubmit={onSubmit}>
            <h2>Reservation Service CAC</h2>
            <div className="input-box">
                <label> Nom</label>
                <input type="text" className='field' placeholder='Entrer votre Nom' name='nom'required />
            </div>
            <div className="input-box">
                <label> Prenom</label>
                <input type="text" className='field' placeholder='Entrer votre Prenom' name='prenom'required />
            </div>
            <div className="input-box">
                <label> adresse</label>
                <input type="text" className='field' placeholder='Entrer votre adresse' name='adresse' required />
            </div> 

            <div className="input-box">
                <label> Email  </label>
                <input type="text" className='field' placeholder='Entrer votre Numero Email' name='email' required />
            </div>
            

            <div className="input-box">
                <label>Date </label>
                <input type="date" className='field' placeholder='Entrer la date' name='date' required />
            </div>

            <div className="input-box">
                    <label>Numéro de Téléphone :</label>
                    <input type="tel" 
                            className='field' 
                            placeholder='Entrer votre numéro de téléphone' 
                            name='phone_number' 
                                required 
                                pattern="[0-9]*" />
            </div>
            <div class="input-box">
                <label>Sexe :</label>
                <select name="sexe" className='field' required>
                    <option value="" disabled selected>Sélectionner votre sexe</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre ou abstinence</option>
                </select>
            </div>


            <div class="input-box">
                <label>Type de reservation:</label>
                <select name="reservation type " className='field' required>
                    <option value="" disabled selected>Votre Choix</option>
                    <option value="Mariage">Mariage Religieux</option>
                    <option value="Mariage">Mariage Coutumier</option>
                    <option value="Mariage">Dote</option>
                    <option value="Conference">Conference</option>
                    <option value="Anniversaire">Anniversaire</option>
                    <option value="Manifestation">Manifestation</option>
                    <option value="Universite">Collation</option>
                    <option value="Universite">Defense</option>
                    <option value="Seance">Seance privee</option>
                    <option value="Celebration">Celebration religieuse</option>
                    <option value="Politique">Manifestation Polique</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            
            
            <div className="input-box">
                <label> Message  </label>
                <textarea name="Message" className='field mess' id=""placeholder='entrer les details sur votre reservation ou laisser un message'required></textarea>
            </div>

            <button type="Submit">Envoyer votre reservation</button>
            

        </form>
    </section>
  )
}

export default Contact