export const getDoctorComments = async (type, id) => {
	const response = await fetch(
		`https://mecharcovz-be.onrender.com/api/v1/comment?type=${type}&id=${id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${localStorage.getItem('token')}`,
			},
		},
	);

	if (!response.ok) {
		throw new Error('No se pudieron obtener los datos de los médicos');
	}

	return response.json();
};
