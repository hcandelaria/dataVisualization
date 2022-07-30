import axios from "axios";

export const getHealthInsuranceData = async () => {
    const URL = 'https://health-insurance-coverage.s3.amazonaws.com/data.json'
    try {
        const response = await axios.get(URL);
        return response;
    } catch (err) {
        console.log("Error", err);
    }
}