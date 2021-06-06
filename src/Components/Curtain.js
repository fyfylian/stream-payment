export default function Curtain(props: { visible: boolean }) {
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-white opacity-90 ${props.visible ? "block" : "hidden"}`}>
            <div className="loader"> </div>
        </div>
    )
}