export default function Logo(props: {src: string}){
    return (
        <div className="mb-8 text-white">
            <img src={props.src} alt="Fyfy Finance logo" className="w-24 mx-auto"/>
            <h1 className="text-6xl text-center">Fyfy<strong>Finance</strong></h1>
        </div>
    )
}