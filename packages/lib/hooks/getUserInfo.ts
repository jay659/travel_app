import { useFrappeGetCall } from "frappe-react-sdk"

export const getUserInfo=(currentUser:String) =>{
    const { data,error } = useFrappeGetCall('travel_app.api.user.get_cureent_user')
}