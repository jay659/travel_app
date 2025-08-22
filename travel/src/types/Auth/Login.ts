export interface LoginContext {
    message: {
        login_label: string,
        provider_logins: [],
        social_login: boolean,
        disable_signup:0 | 1
    } | undefined
}