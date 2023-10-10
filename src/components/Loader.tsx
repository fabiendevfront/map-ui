import { RotatingLines } from  "react-loader-spinner";

// Component for Loader
const Loader = () => {
    return (
        <div className="loader">
            <RotatingLines
                strokeColor="#65897b"
                strokeWidth="5"
                animationDuration="0.75"
                width="200"
                visible={true}
                ariaLabel="blocks-loading"
            />
        </div>
    );
};

export default Loader;