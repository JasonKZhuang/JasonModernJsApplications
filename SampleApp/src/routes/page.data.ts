export type PageData = {
	name: string;
	age: number;
	email: string;
};

export const loader = async (): Promise<PageData> => {
	const res = await fetch("https://api/user/profile");
	return await res.json();
};
