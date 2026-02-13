import React, { useState } from 'react';

const Filter = ({ onApply, setShowFilterForm }) => {
    const [minRating, setMinRating] = useState('');
    const [maxRating, setMaxRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const min = minRating === '' ? 0 : parseFloat(minRating);
        const max = maxRating === '' ? 10 : parseFloat(maxRating);
        if (typeof onApply === 'function') onApply(min, max);
        setShowFilterForm(false);
    };

    return (
        <div className="filter-overlay">
            <div className="filter-form">
                <h3 style={{marginTop:0}}>Filter movies by rating</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom:10}}>
                        <label style={{display:'block', fontSize:12, color:'var(--muted)'}}>Min rating</label>
                        <input className="form-control" type="number" step="0.1" min="0" max="10" value={minRating} onChange={(e) => setMinRating(e.target.value)} style={{width:'100%'}} />
                    </div>
                    <div style={{marginBottom:10}}>
                        <label style={{display:'block', fontSize:12, color:'var(--muted)'}}>Max rating</label>
                        <input className="form-control" type="number" step="0.1" min="0" max="10" value={maxRating} onChange={(e) => setMaxRating(e.target.value)} style={{width:'100%'}} />
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', gap:8}}>
                        <button type="button" onClick={() => setShowFilterForm(false)} className="btn btn-outline-light">Cancel</button>
                        <button type="submit" className="btn btn-success">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filter;