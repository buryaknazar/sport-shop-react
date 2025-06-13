import { useEffect } from 'react';
import { useAdmin } from '../../../hooks/useAdmin';

import EntityPage from '../../../elements/EntityPage/EntityPage';
import ProductAddForm from '../../../elements/EntityForms/Product/ProductAddForm/ProductAddForm';
import ProductEditForm from '../../../elements/EntityForms/Product/ProductEditForm/ProductEditForm';
import ProductDeleteForm from '../../../elements/EntityForms/Product/ProductDeleteForm/ProductDeleteForm';

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

	return (
		<section className='container'>
			<EntityPage
				title='Products'
				list={products}
				columnsToShow={columnsToShow}
				AddForm={ProductAddForm}
				EditForm={ProductEditForm}
				DeleteForm={ProductDeleteForm}
				onRefresh={getProductsData}
			></EntityPage>
		</section>
	);
};

export default Products;
