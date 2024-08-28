import { getCurrentUser } from "@/lib/appwrite";
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactElement }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getCurrentUser()
			.then((response) => {
				console.log(response);
				if (response) {
					setIsLoggedIn(true);
					setUser(response);
				} else {
					setIsLoggedIn(false);
					setUser(null);
				}
			})
			.catch((error) => console.log(error))
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
