import React, {useState} from 'react'
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setTypeVisible(true)}>Добавит тип</button>
            <button onClick={() => setBrandVisible(true)}>Добавить бренд</button>
            <button onClick={() => setDeviceVisible(true)}>Добавить устройство</button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </div>
    )
}

export default Admin
