import { useEffect, useState } from 'react';

interface GitHubUserData {
	name: string;
	profilePictureUrl: string;
    userName: string;
}

const useGitHubOAuth = (): GitHubUserData | null => {
	const [userData, setUserData] = useState<GitHubUserData | null>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const urlParams = new URLSearchParams(window.location.search);
				const token = urlParams.get('token');

				if (token) {
					const response = await fetch('https://api.github.com/user', {
						headers: {
							Accept: 'application/vnd.github.v3+json',
							Authorization: 'token ' + token,
						},
					});

					if (response.ok) {
						const data = await response.json();
						const profilePictureUrl = data.avatar_url;
						const name = data.name;
                        const userName = data.login

						setUserData({
							name,
							profilePictureUrl,
                            userName
						});
					}
				}
			} catch (error) {
				console.error('Error fetching GitHub user data:', error);
			}
		};

		fetchUserData();
	}, []);

	return userData;
};

export default useGitHubOAuth;
