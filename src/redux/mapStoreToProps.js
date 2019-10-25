const mapStoreToProps = (reduxState) => {
    return {
        store: reduxState,
        user: reduxState.user,
        loginMode: reduxState.loginMode,
        errors: reduxState.errors,
        admin: reduxState.adminReducer
    }
};

export default mapStoreToProps;
