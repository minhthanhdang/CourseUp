import Modal from '../components/InfoCard/Modal'
import NavLeft from '../components/Layout/NavLeft';
import StyledButton from '../components/shared/Button';

const Test = () => {


  return (
    <>
      <NavLeft />
      <StyledButton isWorking={true} onClick={() => console.log("Button working")}>HAHAHA</StyledButton>

      <Modal
        isOpen
        onClose={() => {console.log("close modal")}}
        renderContent={modal => (<button onClick={modal.close} className='text-black'>Close</button>)}
      />


    </>

  )
}

export default Test;
