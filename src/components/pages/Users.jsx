import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
	return {
		id: val,
		image:
			'https://images.unsplash.com/photo-1528797744628-e3f7a01cf485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		name: `たくや${val}`,
		email: 'hogehoge@exsample.com',
		tel: '000-9999-1234',
		company: {
			name: 'EM'
		},
		website: 'https://hogehoge.com'
	};
});

export const Users = () => {
	return (
		<SContainer>
			<h2>ユーザー一覧</h2>
			<SearchInput />
			<SUserArea>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</SUserArea>
		</SContainer>
	);
};

const SContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px;
`;

const SUserArea = styled.div`
	padding-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
`;
