'use server'

import axios from "axios"

export async function addMensage(data: FormData) {
    const form_data = {
        name: data.get("name"),
        email: data.get("email"),
        number: data.get("phone"),
        mensage: data.get("mensage")
    }

    console.log(form_data)
    axios.post("http://localhost:3000/mensages",form_data);
}
