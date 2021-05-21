import React from 'react';

const Footer = ({showPrev, prevPageQuery, nextPageQuery}) => (
    <div>
        <button className="overview-buttons" disabled={showPrev} onClick={prevPageQuery}>❮ Previous</button>
        <button className="overview-buttons" onClick={nextPageQuery}>Next ❯</button>
    </div>
);

export default Footer;