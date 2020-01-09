import React, { useEffect } from 'react';

function withAutoToTop(Comp) {
    return function(props) {
        useEffect(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }, [props]);

        return (
            <Comp {...props} />
        )
    }
}

export default withAutoToTop;