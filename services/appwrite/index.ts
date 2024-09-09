import { UserRegister, UserLogin } from "../../types/appwrite";
import { ID, Query } from "react-native-appwrite";
import {
	account,
	avatars,
	DATABASE_ID,
	databases,
	signIn,
	USERCOLLECTION_ID,
	VIDEOCOLLECTION_ID,
} from "./init";

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
			DATABASE_ID,
			USERCOLLECTION_ID,
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
			DATABASE_ID,
			USERCOLLECTION_ID,
			[Query.equal("accountId", currentAccount.$id)]
		);
		return currentUser.documents[0];
	} catch (error: any) {
		throw Error(error);
	}
};

export const getAllPosts = async () => {
	try {
		const response = await databases.listDocuments(
			DATABASE_ID,
			VIDEOCOLLECTION_ID
		);
		return response.documents;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const getLatestPosts = async () => {
	try {
		const response = await databases.listDocuments(
			DATABASE_ID,
			VIDEOCOLLECTION_ID,
			[Query.orderDesc("$createdAt"), Query.limit(7)]
		);
		return response.documents;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const searchPosts = async (query: string) => {
	try {
		const response = await databases.listDocuments(
			DATABASE_ID,
			VIDEOCOLLECTION_ID,
			[Query.search("title", query)]
		);
		return response.documents;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const getUserPosts = async (userId: string) => {
	try {
		const response = await databases.listDocuments(
			DATABASE_ID,
			VIDEOCOLLECTION_ID,
			[Query.equal("creator", userId)]
		);
		return response.documents;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const signOut = async () => {
	try {
		const response = await account.deleteSession("current");
		return response;
	} catch (error: any) {
		throw new Error(error);
	}
};
