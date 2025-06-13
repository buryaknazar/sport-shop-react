import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import styles from './ProfilePageContent.module.css';

const ProfilePageContent = () => {
	const { user, setUser } = useUser();

	const [username, setUsername] = useState(user?.username || '');
	const [email, setEmail] = useState(user?.email || '');
	const [avatarUrl, setAvatarUrl] = useState(user?.avatarImageUrl || '');
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSave = e => {
		e.preventDefault();

		if (newPassword.trim() != '')
			setUser(prev => ({
				...prev,
				username,
				email,
				avatarImageUrl: avatarUrl,
			}));

		alert('Saved!');
	};

	return (
		<section className={styles.profilePage}>
			<div className='container'>
				<div className={styles.profileContainer}>
					<div className={styles.profileCard}>
						<div className={styles.avatarImageContainer}>
							<img
								src={avatarUrl || '/default-avatar.png'}
								alt='Avatar'
								className={styles.avatar}
							/>
						</div>

						<h2 className={styles.name}>{username}</h2>
						<p className={styles.email}>{email}</p>
					</div>

					<div className={styles.profileFormWrapper}>
						<h2>Profile</h2>
						<form onSubmit={handleSave} className={styles.profileForm}>
							<div className={styles.section}>
								<h4>User Info</h4>

								<label>Name</label>
								<input
									type='text'
									value={username}
									onChange={e => setUsername(e.target.value)}
								/>

								<label>Email</label>
								<input
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>

								<label>Avatar Image Url</label>
								<input
									type='text'
									value={avatarUrl}
									onChange={e => setAvatarUrl(e.target.value)}
								/>
							</div>

							<div className={styles.section}>
								<h4>Password</h4>

								<label>Current password</label>
								<input
									type='password'
									value={currentPassword}
									onChange={e => setCurrentPassword(e.target.value)}
								/>

								<label>New Password</label>
								<input
									type='password'
									value={newPassword}
									onChange={e => setNewPassword(e.target.value)}
								/>

								<label>Confirm New Password</label>
								<input
									type='password'
									value={confirmPassword}
									onChange={e => setConfirmPassword(e.target.value)}
								/>
							</div>

							<div className={styles.formFooter}>
								<button type='submit' className={styles.saveBtn}>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfilePageContent;
