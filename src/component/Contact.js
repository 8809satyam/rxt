// const Contact=()=>{
//     return(
//         <div>
//             <h1>7355572749</h1>
//             <h2>Satyam Singh</h2>
//             <h2>satyamsingh8809@gmail.com</h2>
//             <h2>satyyyaam_.</h2>
//             </div>
//     )
// }
// export default Contact;
import React from 'react'; 

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <h2 style={styles.infoTitle}>Phone:</h2>
          <p style={styles.info}>7355572749</p>
        </div>
        <div style={styles.infoItem}>
          <h2 style={styles.infoTitle}>Name:</h2>
          <p style={styles.info}>Satyam Singh</p>
        </div>
        <div style={styles.infoItem}>
          <h2 style={styles.infoTitle}>Email:</h2>
          <p style={styles.info}>satyamsingh8809@gmail.com</p>
        </div>
        <div style={styles.infoItem}>
          <h2 style={styles.infoTitle}>Skype:</h2>
          <p style={styles.info}>satyyyaam_</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoItem: {
    marginBottom: '15px',
  },
  infoTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#555',
  },
  info: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Contact;
