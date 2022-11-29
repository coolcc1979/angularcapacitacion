
type API = "Firebase" | "Marvel" 

export interface Ipersonaje {
    id: string,
    name: string,
    description: string,
    image: string,
    series: any[],
    comics: any[],
    type?: API,
    creator?: string,
}
