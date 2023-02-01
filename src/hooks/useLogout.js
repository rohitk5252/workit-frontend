import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutContext()
    const logout = () => {
        // Remove user from localStorage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}