import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import { motion } from 'framer-motion';
import './pages.sass'

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <battom className="pages_Wrap">
            {pages.map(page =>
                <motion.div className="pages"
                    key={page}
                    animate={{ 
                        backgroundColor: device.page === page ? "#E89F71" : "#ffffff",
                        color: device.page === page ? "#ffffff" : "#E89F71"
                    }}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </motion.div>
            )}
        </battom>
    );
});

export default Pages;