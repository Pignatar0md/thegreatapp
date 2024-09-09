import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from "react";
import { getCurrentUser } from "@/services/appwrite";
import { loggedInUserInitState } from "./initialStates";
import { LoggedInUser } from "@/types/context";

const GlobalContext = createContext({
	isLoading: true,
	isLoggedIn: false,
	setIsLoggedIn: (value: boolean) => undefined as void,
	setIsLoading: (value: boolean) => undefined as void,
	setUser: (value: LoggedInUser) => undefined as void,
	user: loggedInUserInitState,
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactElement }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(loggedInUserInitState);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getCurrentUser()
			.then((response: any) => {
				if (response) {
					setIsLoggedIn(true);
					setUser(response);
				} else {
					setIsLoggedIn(false);
					setUser(loggedInUserInitState);
				}
			})
			.catch((error) => {
				console.log("Errorr", error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				isLoading,
				setIsLoading,
				user,
				setUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
