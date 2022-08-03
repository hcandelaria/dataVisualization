import axios from "axios";

/**
 * Get health information data from AWS S3
 * 
 * @return {*} 
 */
export const getHealthInsuranceData = async () => { 
    const URL = 'https://health-insurance-coverage.s3.amazonaws.com/data.json'
    try {
        const response = await axios.get(URL);
        return response;
    } catch (err) {
        console.log("Error", err);
    }
}

/**
 * Get health information data from AWS S3
 * 
 * @return {*} 
 */
 export const getHealthInsuranceMapFeatures = async () => {
    // const URL = 'https://health-insurance-coverage.s3.amazonaws.com/features.json'
    const URL = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json'
    try {
        const response = await axios.get(URL);
        return response;
    } catch (err) {
        console.log("Error", err);
    }
}