import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import ProductAddForm from '../../../elements/EntityForms/Product/ProductAddForm/ProductAddForm';
import ProductEditForm from '../../../elements/EntityForms/Product/ProductEditForm/ProductEditForm';

const columnsToShow = [
	'id',
	'name',
	'price',
	'category.name',
	'manufacturer.name',
	'size',
	'color.name',
];

const Products = () => {
	const { products, getProductsData } = useAdmin();

	useEffect(() => {
		getProductsData();
	}, []);

	console.log(products);

	return (
		<section className='container'>
			<EntityPage
				title='Products'
				list={products}
				columnsToShow={columnsToShow}
				AddForm={ProductAddForm}
				EditForm={ProductEditForm}
				onRefresh={getProductsData}
			></EntityPage>
		</section>
	);
};

export default Products;
