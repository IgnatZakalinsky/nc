import React from 'react';

const Loading = (props) => {
    const isGettingFromS = props.isGettingFromS;
    const srcLoading = props.srcLoading || 'https://vk.com/doc123795798_509829821';
    const altLoading = props.altLoading || 'Loading...';

    return (
        <div>
            {isGettingFromS && <span><img src={srcLoading} alt={altLoading}/>{altLoading}</span>}
        </div>
    );
};

export default Loading;
