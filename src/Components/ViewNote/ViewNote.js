import React from 'react';
import { Link } from 'react-router-dom';

const ViewNote = ({ id, title }) => {
  return (
    <div>
      <Link to={`/`} className='back-btn'>◀ back</Link>
      <h1>{title}</h1>
      <p>kjsdfnkasjfkasjndfkasjdnfkasjdnfksjdnfsdnc</p>
    </div>
  )
}

export default ViewNote;
