import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const ConfirmationPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);

      if (countdown <= 0) {
        clearInterval(intervalId);
        // Redirige vers la page d'accueil après le décompte.
        navigate('/');
      }
    }, 1000);

    // Nettoie l'intervalle lors du démontage du composant
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown, navigate]);

  return (
    <section className="row bg-light rounded">
      <div className="col p-2">
        <h2>Confirmation</h2>
        <p>Your purchase was confirmed!</p>

        <div className="float-right">
          <span className="text-muted">You will be redirected in <span id="countdown">{countdown}</span> seconds...</span>
          {/* Le bouton Return est remplacé par un lien de redirection */}
          <button onClick={() => navigate('/')} className="btn btn-success">Return</button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationPage;