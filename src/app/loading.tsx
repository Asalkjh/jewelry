import { GridLoader } from "react-spinners";


function Loading() {
    return (
        <div className="w-full h-[600px] flex justify-center items-center">
            <GridLoader />
        </div>
    )
}

export default Loading;