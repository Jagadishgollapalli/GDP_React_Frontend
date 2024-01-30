import React from 'react';

function Upload(props) {
    return (
        <div>
            <div className="container">
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02" style={{border: "1px solid #B2CCEC"}}/>
                    <label class="input-group-text" for="inputGroupFile02" style={{backgroundColor:"#ECFFF0",cursor: "pointer", backgroundColor:"#110359", color:"white"}}>UPLOAD</label>
                </div>
            </div>
        </div>
    );
}

export default Upload;