export type LoginInputs = {
    email: string;
   password: string;
};

export interface LoginContext {
    message: {
        login_label: string,
        login_with_email_link: boolean,
        provider_logins: [],
        social_login: boolean,
        two_factor_is_enabled: boolean
        disable_signup:0 | 1
    } | undefined
}

export interface SocialProvider {
    name: 'github' | 'google' | 'facebook'
    provider_name: string,
    auth_url: string,
    redirect_to: string,
    icon: {
        src: string,
        alt: string
    },
}