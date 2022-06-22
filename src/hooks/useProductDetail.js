import { useEffect, useState } from 'react';

const useProductDetail = productId => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://radiant-oasis-95888.herokuapp.com/product/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId, product]);
  return [product, setProduct];
};

export default useProductDetail;