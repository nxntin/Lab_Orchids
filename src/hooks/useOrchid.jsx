import { useState, useEffect } from 'react';

const useOrchid = (id, orchidsData) => {
    const [orchid, setOrchid] = useState(null);

    useEffect(() => {
        console.log('useOrchid called with id:', id);
        if (id) {
            const foundOrchid = orchidsData.find(orchid => orchid.id === id);
            console.log('Found orchid:', foundOrchid);
            setOrchid(foundOrchid);
        }
    }, [id, orchidsData]);

    return orchid;
};

export default useOrchid;
