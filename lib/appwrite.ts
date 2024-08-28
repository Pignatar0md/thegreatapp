import {
	APPWRITE_ENDPOINT,
	BUNDLE_ID,
	DATABASE_ID,
	PROJECT_ID,
	STORAGE_ID,
	USERCOLLECTION_ID,
	VIDEOCOLLECTION_ID,
} from "@env";
import {
	Client,
	Account,
	ID,
	Avatars,
	Databases,
	Query,
} from "react-native-appwrite";

export const appwriteConfig = {
	endpoint: APPWRITE_ENDPOINT,
	bundleId: BUNDLE_ID,
	projectId: PROJECT_ID,
	dbId: DATABASE_ID,
	userCollectionId: USERCOLLECTION_ID,
	videoCollectionId: VIDEOCOLLECTION_ID,
	storageId: STORAGE_ID,
};

const client = new Client();

client
	.setEndpoint(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId)
	.setPlatform(appwriteConfig.bundleId); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

type UserRegister = { username: string; password: string; email: string };
type UserLogin = { password: string; email: string };

export const signIn = async ({ email, password }: UserLogin) => {
	try {
		const session = await account.createEmailPasswordSession(email, password);
		return session;
	} catch (error: any) {
		throw Error(error);
	}
};

export const createUser = async ({
	username,
	password,
	email,
}: UserRegister) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username
		);
		const avatarUrl = avatars.getInitials(username);

		await signIn({ email, password });

		const newUser = await databases.createDocument(
			appwriteConfig.dbId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			{ accountId: newAccount.$id, email, username, avatar: avatarUrl }
		);
		return newUser;
	} catch (error: any) {
		throw Error(error);
	}
};

export const authUser = async ({ password, email }: UserLogin) => {
	try {
		const session = await signIn({ email, password });
		return session;
	} catch (error: any) {
		throw Error(error);
	}
};

export const getCurrentUser = async () => {
	try {
		const currentAccount = await account.get();
		if (!currentAccount) throw Error;
		const currentUser = await databases.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.userCollectionId,
			[Query.equal("accountId", currentAccount.$id)]
		);
		return currentUser.documents[0];
	} catch (error: any) {
		throw Error(error);
	}
};
