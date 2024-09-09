import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import { UserLogin } from "../../types/appwrite";

const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const BUNDLE_ID = "com.application.aora";
const PROJECT_ID = "66cda694001e52ae1055";
const DATABASE_ID = "66cdac22002f757eeb7c";
const USERCOLLECTION_ID = "66cdac4500136fea4903";
const VIDEOCOLLECTION_ID = "66cdac63000a283b5cfa";

const client = new Client();

client
	.setEndpoint(APPWRITE_ENDPOINT)
	.setProject(PROJECT_ID)
	.setPlatform(BUNDLE_ID); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const signIn = async ({ email, password }: UserLogin) => {
	try {
		const session = await account.createEmailPasswordSession(email, password);
		return session;
	} catch (error: any) {
		throw Error(error);
	}
};

export {
	APPWRITE_ENDPOINT,
	BUNDLE_ID,
	PROJECT_ID,
	DATABASE_ID,
	USERCOLLECTION_ID,
	VIDEOCOLLECTION_ID,
	account,
	avatars,
	databases,
};
