import React, { useState } from "react";
import axios from "axios";

function Upload(props) {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const fileUploadHandler = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
            await axios.post("http://localhost:8000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("File uploaded successfully");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file");
        }
    };
    return (
        <div>
            <div className="container">
                <form encType="multipart/form-data">
                    <div class="input-group mb-3">
                        <input
                            type="file"
                            class="form-control"
                            id="inputGroupFile02"
                            style={{ border: "1px solid #B2CCEC" }}
                            onChange={fileSelectedHandler}
                        />
                        <label
                            class="input-group-text"
                            for="inputGroupFile02"
                            style={{
                                backgroundColor: "#ECFFF0",
                                cursor: "pointer",
                                backgroundColor: "#110359",
                                color: "white",
                            }}
                            onClick={fileUploadHandler}
                        >
                            UPLOAD
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Upload;
