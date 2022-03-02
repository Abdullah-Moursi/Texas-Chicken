import { useRouter } from "next/router";

export default function Product({ product }) {

    const router = useRouter();
    const { id } = router.query;

    return <h1>Hello {id} </h1>
}

// export async function getStaticProps({ params }) {
//     const req = await fetch(``)
// }