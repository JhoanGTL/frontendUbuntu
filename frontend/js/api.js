const BASE_URL = "http://192.168.1.60:8080/api/items"; 
//  Cambia esta IP por la de tu VM backend

export async function fetchItems() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}