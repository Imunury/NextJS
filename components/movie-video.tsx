import { API_URL } from "../app/(home)/page";


async function getVideo(id: string) {
    console.log(`Fetching videos : ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error('something is wrong')
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
    const video = await getVideo(id);
    return <h6>{JSON.stringify(video)}</h6>

}