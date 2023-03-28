import React from 'react';

const Modal = (props) => {
  const { description, input_output_examples, pricing, features, integrations, accuracy, image_link } = props.modalData;
  const features_values = Object.values(features || []);

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-1 top-1">✕</label>
          <div className='flex gap-4'>
            <div className='w-1/2 rounded-xl p-6'>
              <h1 className='font-semibold text-2xl'>{description}</h1>
              <div className='flex justify-between'>
                <div>
                  <h1 className="font-semibold text-2xl">Features</h1>
                  {
                    features_values.length > 0 ? features_values.map((feature, index) => 
                    (<p>{index + 1}. {feature.feature_name} </p>)) : "No data Found"
                  }
                </div>
                <div>
                  <h1 className="font-semibold text-2xl">Integrations</h1>
                  {integrations? integrations.map((item, index) => (
                    <p>{index+1}. {item}</p>
                  )) :   "No data Found"}
                </div>
              </div>
            </div>
            <div className='w-1/2 rounded-xl p-6'>
              <img src={ image_link && image_link[0] } alt="" />
              <h1 className='text-center font-semibold text-2xl mt-6'>{input_output_examples ? input_output_examples[0].input : "Can you give any example?"}</h1>
              <h1 className='text-center mt-4'>{input_output_examples ? input_output_examples[0].output : "No! Not Yet! Take a break!!! "}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;