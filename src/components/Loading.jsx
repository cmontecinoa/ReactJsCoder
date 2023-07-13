const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5 text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;