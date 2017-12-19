
import axios from 'axios'


const URLBase = "https://kndl.io/eyes/v1/"

export default {
    getConfig: () => {
        console.log('fired')
        return axios.get(encodeURI(URLBase+"config"))
        },
    getSchedule: () => {
        return axios.get(encodeURI(URLBase+"schedule"))
        },
    getProbe: () => {
        return axios.get(encodeURI(URLBase+"probe"))
        },
    getDeploy: () => {
        return axios.get(encodeURI(URLBase+"deploy"))
        }
};