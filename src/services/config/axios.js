import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.API_URL;

// TODO configurar tokens de acceso
