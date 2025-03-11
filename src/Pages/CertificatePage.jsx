import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function CertificatePage() {
  const [certificateNo, setCertificateNo] = useState('');
  const [certdata, setcertdata] = useState(null);
  const [isValidated, setIsValidated] = useState(false);

  const handleInputChange = (e) => {
    setCertificateNo(e.target.value);
  };

  const handleValidateClick = () => {
    if (certificateNo) {
      fetch(`https://certification-gs4h.onrender.com/verify/${certificateNo}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setcertdata(data);
          setIsValidated(true);
        })
        .catch((err) => {
          console.log(err.message);
          setcertdata({ error: "Failed to validate certificate" });
          setIsValidated(true);
        });
    } else {
      alert('Please enter a certificate number');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: '#e0e7ee' }}>
      <div className="w-[400px] h-[400px] bg-white shadow-lg shadow-outline m-10">
        <div className="flex justify-center items-center">
          <div className="m-8 space-y-8">
            {!isValidated ? (
              <>
                <div className="flex justify-center">
                  <img className="w-24" src={logo} alt="" />
                </div>
                <p className="text-2xl flex justify-center">Verify a Certificate</p>
                <div className="form-group flex-row justify-center">
                  <input style={{ border: '1px solid black', borderRadius: '5px', width: '100%', height: '35px', paddingLeft: '10px',}} type="text" className="form-input" name="serialno" value={certificateNo} onChange={handleInputChange}/>
                  <p className="form-input-hint text-gray-500">The serial number can be found at the bottom of each certificate.</p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-950 rounded-md text-white w-20 text-lg h-10" onClick={handleValidateClick} >
                    Validate
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                {certdata?.error ? (
                  <p className="text-red-500">{certdata.error}</p>
                ) : (
                  <>
                    <p className="text-2xl font-semibold">Certificate Validation</p>
                    <p className="text-lg mt-4">{certdata.error}</p>
                  </>
                )}
                <button
                  className="mt-4 bg-blue-950 text-white rounded-md py-2 px-4"
                  onClick={() => {
                    setIsValidated(false);
                    setCertificateNo('');
                    setcertdata(null);
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
