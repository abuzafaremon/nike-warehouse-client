import { useEffect, useState } from 'react';

const useProductDetail = productId => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId, product]);
  return [product, setProduct];
};

export default useProductDetail;