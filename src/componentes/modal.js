import Modal from "react-modal"
import { useState } from "react"

Modal.setAppElement('#root')


export default function modal(){
const [modalaberto, setModalaberto] = useState(true);

function modalOPen(){
    setModalaberto(false)
}
function modalClosed(){
    setModalaberto(true)
}

    return(
        <Container3>
           <Modal 
           isOpen={modalOPen}
           onRequestClose={modalClosed}
           >
               <p>MODALLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
               </Modal> 
        </Container3>
    )
}

const Container3 = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
