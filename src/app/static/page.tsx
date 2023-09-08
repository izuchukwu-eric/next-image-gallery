import { UnsplashImage } from "@/models/unsplash-image"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap"

export const metadata: Metadata = {
    title: 'Static fetchng - NextJS 13 Image Gallery',
}

//it's a server component by default so the function will only run on the server side, so the access key would never be visible on the client
//fetches the data at compile time and caches it, then renders the static page
//we will see the same image becus it is only fetched at compile time and caches the result, that way when we refresh we get the same image everytime
export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
    const image: UnsplashImage = await response.json();

    //minimum should be 500
    const width = Math.min(500, image.width);

    //height to maintain aspect ratio
    const height = (width / image.width) * image.height;

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches and caches data at build/compile time. </strong>
                Even though the Unsplash API always returns a new image, we see the same image after refreshing the page until we compile the project again.
            </Alert>

            <Image 
                src={image?.urls?.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow mw-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    )
}